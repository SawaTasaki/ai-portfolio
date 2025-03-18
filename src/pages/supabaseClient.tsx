import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

export async function getAiTools() {
  const { data, error } = await supabase.from("aitools").select();
  console.log(data);
  if (error) {
    console.error(
      "Supabase からのデータの取得に失敗してしまいました…。：",
      error,
    );
  }
  return data;
}

export default getAiTools;
