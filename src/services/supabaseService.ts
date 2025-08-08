
// supabaseService.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDI1NjkyMDAsImV4cCI6MTk1ODE0NTIwMH0.placeholder';

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn('Supabase environment variables not found. Please connect your Supabase project via the green Supabase button in the top right.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchNewsItems = async () => {
  try {
    // First, get the most recent published date
    const { data: latestData, error: latestError } = await supabase
      .from("news")
      .select("published")
      .order("published", { ascending: false })
      .limit(1);

    if (latestError) throw new Error(latestError.message);
    
    if (!latestData || latestData.length === 0) {
      return [];
    }

    const latestPublished = latestData[0].published;
    
    // Then fetch all news items from that latest batch/time
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("published", latestPublished)
      .order("published", { ascending: false });

    if (error) throw new Error(error.message);
    return data;
  } catch (error) {
    console.error('Error fetching news items:', error);
    throw error;
  }
};
