import React from "react";
import { ScrollView, View } from "react-native";

import RestaurantCard from "./RestaurantCard";

export default function Body() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ gap: 5, marginVertical: 5 }}>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </View>
    </ScrollView>
  );
}
