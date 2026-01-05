import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vphgzyuktlbbyqglrsdi.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_ordurbtKq6_tAzc-iNDV9A_54ZhA46S';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface User {
  id?: string;
  google_id: string;
  full_name: string;
  email: string;
  phone?: string;
  college?: string;
  year?: string;
  branch?: string;
  team_code?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Team {
  id?: string;
  code: string;
  name: string;
  member_count: number;
  created_at?: string;
  updated_at?: string;
}
