// CONFIGURAÇÃO OFICIAL DE CONEXÃO COM O SUPABASE - SUPERCALC
const SUPABASE_URL = "https://blzhzrctahvwaakxygzn.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsemh6cmN0YWh2d2Fha3h5Z3puIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyMzQ1NjcsImV4cCI6MjA1NjgxMDU2N30.placeholder_anon_key";

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
