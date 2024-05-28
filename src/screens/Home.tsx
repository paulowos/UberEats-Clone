import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";

import Body from "../components/home/body";
import Footer from "../components/home/footer";
import Header from "../components/home/header";
import StackParamType from "../types/stackParamsType";

type Props = NativeStackScreenProps<StackParamType, "Home">;

export default function Home({ navigation }: Props) {
  return (
    <View style={{ backgroundColor: "#eee", flex: 1 }}>
      <Header />
      <Body navigation={navigation} />
      <Footer />
    </View>
  );
}
