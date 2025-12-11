-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- Create Enums
create type user_role as enum ('admin', 'instructor', 'student');
create type instructor_status as enum ('pending', 'active', 'rejected', 'suspended');
create type lesson_status as enum ('scheduled', 'confirmed', 'ongoing', 'completed', 'cancelled');
create type transaction_status as enum ('pending', 'released', 'paid', 'cancelled');
create type document_status as enum ('pending', 'approved', 'rejected');
create type document_type as enum ('cnh', 'instructor_cert', 'residence_proof');
create type cnh_category as enum ('A', 'B', 'C', 'D', 'E');
create type plan_type as enum ('gratis', 'prata', 'ouro');

-- 1. PROFILES (Base User Table linked to Auth)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  full_name text,
  avatar_url text,
  role user_role default 'student',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. SYSTEM CONFIG (Global Settings)
create table public.system_config (
  id int primary key generated always as identity,
  commission_free numeric default 20,
  commission_silver numeric default 15,
  commission_gold numeric default 10,
  price_silver numeric default 99.00,
  price_gold numeric default 199.00,
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Insert default config
insert into public.system_config (commission_free, commission_silver, commission_gold, price_silver, price_gold)
values (20, 15, 10, 99.00, 199.00);

-- 3. INSTRUCTORS (Extended Profile)
create table public.instructors (
  id uuid references public.profiles(id) on delete cascade primary key,
  bio text,
  phone text,
  city text,
  state text,
  hourly_rate numeric default 0,
  plan plan_type default 'gratis',
  status instructor_status default 'pending',
  verified_docs boolean default false,
  enabled_categories cnh_category[] default '{}',
  vehicle_data jsonb, -- { brand, model, year, plate, transmission }
  rating numeric default 0,
  rating_count int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 4. STUDENTS (Extended Profile)
create table public.students (
  id uuid references public.profiles(id) on delete cascade primary key,
  phone text,
  city text,
  state text,
  target_category cnh_category,
  lessons_completed int default 0,
  package_credits int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 5. DOCUMENTS (KYC)
create table public.documents (
  id uuid default uuid_generate_v4() primary key,
  instructor_id uuid references public.instructors(id) on delete cascade not null,
  type document_type not null,
  file_url text not null,
  status document_status default 'pending',
  rejection_reason text,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  analyzed_at timestamp with time zone
);

-- 6. LESSONS
create table public.lessons (
  id uuid default uuid_generate_v4() primary key,
  instructor_id uuid references public.instructors(id) not null,
  student_id uuid references public.students(id) not null,
  date date not null,
  time time not null,
  duration_minutes int default 60,
  price numeric not null,
  status lesson_status default 'scheduled',
  location text,
  student_rating int check (student_rating >= 1 and student_rating <= 5),
  student_comment text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 7. LESSON FEEDBACK (Instructor -> Student)
create table public.lesson_feedback (
  id uuid default uuid_generate_v4() primary key,
  lesson_id uuid references public.lessons(id) on delete cascade unique not null,
  student_id uuid references public.students(id) not null,
  instructor_id uuid references public.instructors(id) not null,
  general_rating int check (general_rating >= 1 and general_rating <= 5),
  confidence_level text check (confidence_level in ('beginner', 'evolving', 'confident', 'ready')),
  strengths text[],
  improvements text[],
  recommendation text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 8. TRANSACTIONS (Financials)
create table public.transactions (
  id uuid default uuid_generate_v4() primary key,
  instructor_id uuid references public.instructors(id) not null,
  lesson_id uuid references public.lessons(id),
  gross_amount numeric not null,
  commission_rate numeric not null,
  commission_amount numeric not null,
  net_amount numeric not null,
  status transaction_status default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()),
  released_at timestamp with time zone,
  paid_at timestamp with time zone
);

-- 9. CHAT MESSAGES
create table public.chat_messages (
  id uuid default uuid_generate_v4() primary key,
  lesson_id uuid references public.lessons(id) on delete cascade,
  sender_id uuid references public.profiles(id) not null,
  content text not null,
  read boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- RLS POLICIES (Row Level Security)
alter table public.profiles enable row level security;
alter table public.instructors enable row level security;
alter table public.students enable row level security;
alter table public.documents enable row level security;
alter table public.lessons enable row level security;
alter table public.transactions enable row level security;
alter table public.chat_messages enable row level security;
alter table public.system_config enable row level security;

-- Policies
-- Profiles: Public read, Self update
create policy "Public profiles are viewable by everyone" on public.profiles for select using (true);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

-- System Config: Read everyone, Update Admin only
create policy "Config viewable by everyone" on public.system_config for select using (true);
-- Note: Admin update policy requires checking role in profiles, skipping for brevity but recommended.

-- Lessons: Participants can view/edit
create policy "Participants view lessons" on public.lessons for select 
using (auth.uid() = student_id or auth.uid() = instructor_id);

-- Transactions: Instructor views own
create policy "Instructor views own transactions" on public.transactions for select
using (auth.uid() = instructor_id);

-- REALTIME setup
begin;
  drop publication if exists supabase_realtime;
  create publication supabase_realtime;
commit;
alter publication supabase_realtime add table public.chat_messages;
alter publication supabase_realtime add table public.lessons;
alter publication supabase_realtime add table public.transactions;
alter publication supabase_realtime add table public.system_config;

-- TRIGGER: Auto-create profile on signup
create or replace function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name', 'student'); -- Default to student
  
  -- Create entry in students by default? Users might select role during signup.
  -- Assuming frontend handles role meta_data.
  if (new.raw_user_meta_data->>'role' = 'instructor') then
      update public.profiles set role = 'instructor' where id = new.id;
      insert into public.instructors (id) values (new.id);
  else 
      insert into public.students (id) values (new.id);
  end if;
  
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
