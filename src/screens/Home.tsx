import React from "react";
import { View } from "react-native";

import Header from "../components/home/Header";

export default function Home() {
  return (
    <View style={{ backgroundColor: "#eee", flex: 1 }}>
      <Header />
    </View>
  );
}
