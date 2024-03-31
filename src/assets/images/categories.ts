import { ImageURISource } from "react-native";

export type categoryAsset = {
  name: string;
  image: ImageURISource;
};

const categoriesAssets: categoryAsset[] = [
  { name: "Fast Foods", image: require("./fast-food.png") },
  { name: "Sobremesas", image: require("./desserts.png") },
  { name: "Bebidas", image: require("./soft-drink.png") },
  { name: "Padarias", image: require("./bread.png") },
  { name: "Cafeterias", image: require("./coffee.png") },
  { name: "Mercados", image: require("./deals.png") },
];

export default categoriesAssets;
