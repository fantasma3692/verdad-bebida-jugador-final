import { supabase } from "../index";
export async function MostrarVerdadobebidaXnivel(p) {
  const { data } = await supabase
    .from("preguntas_reto_bebida")
    .select()
    .eq("id_nivel", p.id_nivel)
    .order("id", { ascending: true });
  return data;
}
