import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ietgpgxjxbbxeoqgrajd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlldGdwZ3hqeGJieGVvcWdyYWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMDA3NjgsImV4cCI6MjA0OTY3Njc2OH0.pYejvh17L49k5btiXYEYLu-WG-2c85p5rbqUe1g85OY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
