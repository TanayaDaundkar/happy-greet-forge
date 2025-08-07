// supabaseService.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY!;
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
