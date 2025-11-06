import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qmdjfezkbhfxzojcwqsv.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_KEY;
const supabaseServiceKey = createClient(supabaseUrl, supabaseKey);

// Client-side: call from React components
export const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY');
    return null;
  }
  return createClient(supabaseUrl, supabaseAnonKey);
};

// Server-side: call from API/server code only
export const supabaseAdmin: SupabaseClient | undefined = (supabaseUrl && supabaseServiceKey)
  ? createClient(supabaseUrl, supabaseServiceKey)
  : undefined;
