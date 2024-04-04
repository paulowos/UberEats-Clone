import React from "react";
import { View, Text, ImageURISource, StyleSheet } from "react-native";
import { Divider, Image } from "react-native-elements";

import FoodType from "../../types/foodType";

type Props = {
  food: FoodType;
  showDivider: boolean;
};

export default function FoodCard({ food, showDivider }: Props) {
  const { name, description, price, image } = food;
  const source: ImageURISource = { uri: image };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text>{description}</Text>
          <Text>{price}</Text>
        </View>
        <Image source={source} style={styles.image} />
      </View>
      {showDivider && (
        <Divider width={0.9} style={{ width: "90%", alignSelf: "center" }} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  infoContainer: { width: 220, justifyContent: "space-evenly" },
  name: { fontSize: 19, fontWeight: "600" },
  image: { width: 100, height: 100, borderRadius: 8 },
});
