import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://impmvfdijimhxvvtlztv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltcG12ZmRpamltaHh2dnRsenR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwNjg1MTEsImV4cCI6MjA1MzY0NDUxMX0.4oONtSgyHHdlEOdbBtTY_vov5hcThdrIqlpTEtH3yaM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
