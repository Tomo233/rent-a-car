import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ieffmbujdqbtydbuhuiw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllZmZtYnVqZHFidHlkYnVodWl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNzAwODIsImV4cCI6MjAzMDc0NjA4Mn0.bjmkA9JeN4_2iu48G2l0TKR2BMsxO9R2AisSCeOT4MQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
