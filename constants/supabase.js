import { createClient } from "@supabase/supabase-js";

const supabaseUrl =  'https://ylhcsfcbathqpwivflof.supabase.co' //process.env.SUPABASE_URL;
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyOTEwMzgzMywiZXhwIjoxOTQ0Njc5ODMzfQ.j1UfeEPVbZRxERgBdzb-D-PoXLGcR8WAcFBmvXM_qwA' //process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
