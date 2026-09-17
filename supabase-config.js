// CONFIGURAÇÃO OFICIAL DE CONEXÃO COM O SUPABASE - SUPERCALC
const SUPABASE_URL = "https://blzhzrctahvwaakxygzn.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsemh6cmN0YWh2d2Fha3h5Z3puIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwNjIyMjIsImV4cCI6MjEwNDYzODIyMn0.ENdprA6pZYce1BkjV5_frncWv_zqCq0XfoKfzF72JE0";

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
