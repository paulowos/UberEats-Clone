import { create } from "zustand";

type Store = {
  location: string;
  setLocation: (location: string) => void;
  alias: string;
  setAlias: (alias: string) => void;
};

export const DEFAULT_ALIAS =
  "hotdogs%2Cdesserts%2Cbeverage_stores%2Cbakeries%2Ccafes%2Cgrocery";

const useStore = create<Store>((set) => ({
  location: "Rio%20de%20Janeiro",
  setLocation: (location) => set({ location }),
  alias: DEFAULT_ALIAS,
  setAlias: (alias) => set({ alias }),
}));

export default useStore;
