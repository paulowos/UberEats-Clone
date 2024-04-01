import React from "react";
import { View } from "react-native";

import Body from "../components/home/body";
import Header from "../components/home/header";

export default function Home() {
  return (
    <View style={{ backgroundColor: "#eee", flex: 1 }}>
      <Header />
      <Body />
    </View>
  );
}
