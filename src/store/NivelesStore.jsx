import { create } from "zustand";
import { MostrarNiveles } from "../index";

export const useNivelesStore = create((set) => ({
  mostrarNiveles: async () => {
    const response = await MostrarNiveles();
    return response;
  },
  nivelesItemSelect: [],
  selectNiveles: (p) => {
    set({ nivelesItemSelect: p });
  },
}));
