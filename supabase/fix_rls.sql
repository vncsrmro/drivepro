-- FIX: Add missing RLS policies for Instructors
-- Without this, no one can see the instructors list

-- 1. Allow everyone to view detailed instructor profiles
create policy "Public instructors are viewable by everyone" 
on public.instructors for select 
using (true);

-- 2. Allow instructors to update their own data
create policy "Instructors can update own data" 
on public.instructors for update 
using (auth.uid() = id);

-- 3. Allow students to view their own profile
create policy "Students can view own profile" 
on public.students for select 
using (auth.uid() = id);

-- 4. Allow students to update their own profile
create policy "Students can update own profile" 
on public.students for update 
using (auth.uid() = id);

-- 5. Allow public to read Documents (if needed for profile) or just owner?
-- Usually documents are private (CNH), so keep it private to owner.
create policy "Users can view own documents" 
on public.documents for select 
using (auth.uid() = instructor_id);

create policy "Users can upload own documents" 
on public.documents for insert 
with check (auth.uid() = instructor_id);
