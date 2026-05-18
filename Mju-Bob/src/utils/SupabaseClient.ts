import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase 환경 변수가 설정되지 않았습니다. .env 파일을 확인해주세요.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export {supabase}