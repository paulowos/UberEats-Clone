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

export default function RestaurantCard() {
  const source: ImageURISource = {
    uri: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxMDY2NjE4LWltYWdlLWt3dnkzdnltLmpwZw.jpg",
  };
  return (
    <TouchableOpacity activeOpacity={1} style={styles.cardContainer}>
      <Image source={source} style={styles.cardImage} />
      <TouchableOpacity style={styles.cardHeart}>
        <Ionicons name="heart-outline" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.cardView}>
        <View>
          <Text style={styles.cardTitle}>Restaurante de Teste</Text>
          <Text style={styles.cardInfo}>30-45 • min</Text>
        </View>
        <View style={styles.cardRating}>
          <Text>4.5</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: { backgroundColor: "white", padding: 10 },
  cardImage: { width: "100%", height: 180 },
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
