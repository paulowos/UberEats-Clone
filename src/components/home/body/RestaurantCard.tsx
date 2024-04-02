import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  View,
  Image,
  ImageURISource,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import StackParamType from "../../../types/stackParamsType";
import { Business } from "../../../types/yelpApiType";

type Props = {
  data: Business;
  navigation: NativeStackNavigationProp<StackParamType, "Home">;
};

const defaultImageUrl =
  "https://img.odcdn.com.br/wp-content/uploads/2019/09/20190919034956.jpg";

export default function RestaurantCard({ data, navigation }: Props) {
  const { name, image_url, rating } = data;

  const source: ImageURISource = {
    uri: image_url ? image_url : defaultImageUrl,
  };

  const nameFormatter = (name: string): string => {
    return name.split(" - ")[0];
  };

  const handlePress = () => {
    navigation.navigate("Detail", data);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.cardContainer}
      onPress={handlePress}
    >
      <Image source={source} style={styles.cardImage} />
      <TouchableOpacity style={styles.cardHeart}>
        <Ionicons name="heart-outline" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.cardView}>
        <View>
          <Text style={styles.cardTitle}>{nameFormatter(name)}</Text>
          <Text style={styles.cardInfo}>30-45 • min</Text>
        </View>
        <View style={styles.cardRating}>
          <Text>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: { backgroundColor: "white", padding: 10 },
  cardImage: { width: "100%", height: 180, borderRadius: 2 },
  cardHeart: { position: "absolute", right: 20, top: 20 },
  cardView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  cardTitle: { fontSize: 15, fontWeight: "bold" },
  cardInfo: { fontSize: 13, color: "gray" },
  cardRating: {
    backgroundColor: "#eee",
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
