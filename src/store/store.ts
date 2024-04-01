import { create } from "zustand";

type Store = {
  location: string;
  setLocation: (location: string) => void;
};

const useStore = create<Store>((set) => ({
  location: "Rio%20de%20Janeiro",
  setLocation: (location) => set({ location }),
}));

export default useStore;
