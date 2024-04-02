import { RouteProp } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, ImageURISource, StyleSheet } from "react-native";

import StackParamType from "../../types/stackParamsType";

type Props = { route: RouteProp<StackParamType, "Detail"> };

export default function About({ route }: Props) {
  const { image_url, name, categories, rating, review_count } = route.params;

  const formattedCategories = categories
    .map((category) => category.title)
    .join(" • ");

  const description = `${rating} ⭐ (${review_count}+)`;

  const source: ImageURISource = { uri: image_url };

  return (
    <View>
      <Image source={source} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.description}>{formattedCategories}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: { width: "100%", height: 180 },
  text: {
    fontSize: 29,
    fontWeight: "600",
    marginTop: 10,
    paddingHorizontal: 15,
  },
  description: {
    paddingHorizontal: 15,
    fontWeight: "400",
    fontSize: 15,
  },
});
