import { ImageURISource } from "react-native";

export type categoryAsset = {
  name: string;
  image: ImageURISource;
  alias: string;
};

const categoriesAssets: categoryAsset[] = [
  { name: "Fast Foods", image: require("./fast-food.png"), alias: "hotdogs" },
  { name: "Sobremesas", image: require("./desserts.png"), alias: "desserts" },
  {
    name: "Bebidas",
    image: require("./soft-drink.png"),
    alias: "beverage_stores",
  },
  { name: "Padarias", image: require("./bread.png"), alias: "bakeries" },
  { name: "Cafeterias", image: require("./coffee.png"), alias: "cafes" },
  { name: "Mercados", image: require("./deals.png"), alias: "grocery" },
];

export default categoriesAssets;
