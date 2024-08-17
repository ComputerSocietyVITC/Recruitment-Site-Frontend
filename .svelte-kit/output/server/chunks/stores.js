import { createClient } from "@supabase/supabase-js";
import { w as writable } from "./index.js";
const PUBLIC_SUPABASE_URL = "https://niuwcymvlfmcrhzturbo.supabase.co";
const PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdXdjeW12bGZtY3JoenR1cmJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4ODAyMDAsImV4cCI6MjAzOTQ1NjIwMH0.PzTymfMbZYX-2MLqCN79ljwyGIO33sWj0S2AhTH6BGY";
createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
const user = writable(null);
const changeDetails = writable(false);
const submitted = writable(false);
export {
  changeDetails as c,
  submitted as s,
  user as u
};
