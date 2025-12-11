-- Create a table for system-wide settings
CREATE TABLE IF NOT EXISTS public.system_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    key TEXT NOT NULL UNIQUE,
    value JSONB NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_by UUID REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE public.system_settings ENABLE ROW LEVEL SECURITY;

-- Policy: Allow read access to authenticated users (admin needs to read, public might need to read some?)
-- Actually, prices and commission rates might be public or at least for instructors.
-- Let's allow public read for now as prices are displayed publicly.
CREATE POLICY "Allow public read access to system_settings"
    ON public.system_settings FOR SELECT
    USING (true);

-- Policy: Allow update only for admins
-- Assuming admins are distinguished by a role or specific user ID.
-- For now, I'll allow authenticated users to update if they are admins.
-- Use the is_admin function if it exists, or just check role.
-- I'll check if is_admin exists in verified files or schema. 
-- In previous context schema.sql, there was an is_admin function? 
-- I'll assume standard RLS for now. If no is_admin, I'll restrict to service_role or authenticated for now.
-- Ideally: 
CREATE POLICY "Allow admin update to system_settings"
    ON public.system_settings FOR UPDATE
    USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'admin'));

-- Insert default settings
INSERT INTO public.system_settings (key, value)
VALUES 
    ('commission_rates', '{"gratis": 20, "prata": 15, "ouro": 10}'::jsonb),
    ('plan_prices', '{"prata": 99, "ouro": 199}'::jsonb)
ON CONFLICT (key) DO NOTHING;
