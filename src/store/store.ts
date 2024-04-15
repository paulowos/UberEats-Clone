import { create } from "zustand";

import FoodType from "../types/foodType";

type Store = {
  location: string;
  setLocation: (location: string) => void;
  alias: string;
  setAlias: (alias: string) => void;
  cart: FoodType[];
  setCart: (food: FoodType) => void;
  total: number;
};

export const DEFAULT_ALIAS =
  "hotdogs%2Cdesserts%2Cbeverage_stores%2Cbakeries%2Ccafes%2Cgrocery";

const useStore = create<Store>((set) => ({
  location: "Rio%20de%20Janeiro",
  setLocation: (location) => set({ location }),
  alias: DEFAULT_ALIAS,
  setAlias: (alias) => set({ alias }),
  cart: [],
  setCart: (food) =>
    set((state) => {
      if (state.cart.some((f) => f.id === food.id)) {
        const newCart = state.cart.filter((f) => f.id !== food.id);
        const total = newCart.reduce((acc, f) => {
          const price = parseFloat(f.price.replace("R$", "").replace(",", "."));
          return acc + price;
        }, 0);
        return { cart: newCart, total };
      }
      return {
        cart: [...state.cart, food],
        total:
          state.total +
          parseFloat(food.price.replace("R$", "").replace(",", ".")),
      };
    }),
  total: 0,
}));

export default useStore;
