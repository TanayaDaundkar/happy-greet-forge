
// supabaseService.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDI1NjkyMDAsImV4cCI6MTk1ODE0NTIwMH0.placeholder';

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn('Supabase environment variables not found. Please connect your Supabase project via the green Supabase button in the top right.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchNewsItems = async () => {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .order("published", { ascending: false })
    .limit(20);

  if (error) throw new Error(error.message);
  return data;
};
