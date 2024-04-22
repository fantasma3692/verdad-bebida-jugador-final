import { create } from "zustand";
import { MostrarVerdadobebidaXnivel } from "../supabase/crudVerdadobebida";

export const usePreguntasStore = create((set, get) => ({
  datapreguntas: [],
  preguntaItemSelect: [],
  mostrarpreguntasxidnivel: async (p) => {
    const response = await MostrarVerdadobebidaXnivel(p);
    set({ datapreguntas: response });
    const { chocolatear } = get();
    chocolatear();
    return response;
  },
  chocolatear: () => {
    const { datapreguntas } = get();
    set({
      preguntaItemSelect:
        datapreguntas[Math.floor(Math.random() * datapreguntas.length)],
    });
  },
}));
