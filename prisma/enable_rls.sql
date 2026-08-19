-- Enable Row Level Security (RLS) on public tables to prevent unauthorized public access via Supabase PostgREST API
ALTER TABLE "RentalRequests" ENABLE ROW LEVEL SECURITY;
