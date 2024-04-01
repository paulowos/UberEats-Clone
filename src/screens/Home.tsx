import React, { useState } from "react";
import { View } from "react-native";

import Body from "../components/home/body/Body";
import Header from "../components/home/header/Header";

export default function Home() {
  const [location, setLocation] = useState("Rio%20de%20Janeiro");

  return (
    <View style={{ backgroundColor: "#eee", flex: 1 }}>
      <Header setLocation={setLocation} />
      <Body location={location} />
    </View>
  );
}
