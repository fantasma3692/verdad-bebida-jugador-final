import { supabase } from "../index";
export async function MostrarNiveles() {
  try {
    const { data } = await supabase
      .from("niveles")
      .select()
    return data;
  } catch (error) {}
}
