-- Enable Row Level Security on ai_news table
ALTER TABLE public.ai_news ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to news items
-- This is appropriate since news is meant to be publicly accessible
CREATE POLICY "Allow public read access to news" 
ON public.ai_news 
FOR SELECT 
USING (true);

-- Note: No INSERT/UPDATE/DELETE policies needed since this appears to be read-only news data
-- populated by external systems. If write access is needed later, add appropriate policies.