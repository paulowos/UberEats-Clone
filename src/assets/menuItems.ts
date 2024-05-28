import { fakerPT_BR as faker } from "@faker-js/faker";

import FoodType from "../types/foodType";

export default function getMenuItems(seed: number): FoodType[] {
  faker.seed(seed);

  const menuItems: FoodType[] = [];

  for (let i = 0; i < 10; i++) {
    const foodItem: FoodType = {
      id: faker.string.uuid(),
      name: faker.commerce.product(),
      image: faker.image.urlLoremFlickr({ category: "food" }),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price({ max: 100, min: 10, symbol: "R$ " }),
    };
    menuItems.push(foodItem);
  }

  return menuItems;
}
