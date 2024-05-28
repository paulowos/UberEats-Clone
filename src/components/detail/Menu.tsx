import React from "react";
import { ScrollView } from "react-native";

import FoodCard from "./FoodCard";
import FoodType from "../../types/foodType";

type Props = {
  foods: FoodType[];
};

export default function Menu({ foods }: Props) {
  const lastIndex = foods.length - 1;
  return (
    <ScrollView style={{ height: "100%" }} showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => {
        return (
          <FoodCard
            food={food}
            showDivider={index !== lastIndex}
            key={food.id}
          />
        );
      })}
    </ScrollView>
  );
}
