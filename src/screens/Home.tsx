import React from "react";
import { View } from "react-native";
import { Divider } from "react-native-elements";

import Body from "../components/home/body";
import Footer from "../components/home/footer";
import Header from "../components/home/header";

export default function Home() {
  return (
    <View style={{ backgroundColor: "#eee", flex: 1 }}>
      <Header />
      <Body />
      <Divider width={1} />
      <Footer />
    </View>
  );
}
