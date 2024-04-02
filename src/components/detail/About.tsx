import { View, Text, Image, ImageURISource, StyleSheet } from "react-native";
import React from "react";

const image =
  "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2rltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxMDY2NjE4LWltYWdlLWt3dnkzdnltLmpwZw.jpg";

const defaultImageUrl =
  "https://img.odcdn.com.br/wp-content/uploads/2019/09/20190919034956.jpg";
const title = "Restaurante Teste";

const description = "Descrição Teste";

export default function About() {
  const source: ImageURISource = { uri: defaultImageUrl };

  return (
    <View>
      <Image source={source} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
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
    fontSize: 15.5,
  },
});
