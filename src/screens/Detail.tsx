import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { Divider } from "react-native-elements";

import getMenuItems from "../assets/menuItems";
import About from "../components/detail/About";
import Menu from "../components/detail/Menu";
import StackParamType from "../types/stackParamsType";

type Props = NativeStackScreenProps<StackParamType, "Detail">;

export default function Detail({ route }: Props) {
  const seed = route.params.rating + route.params.review_count;

  const foods = getMenuItems(seed);

  return (
    <View style={{ height: "100%" }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginTop: 10 }} />
      <Menu foods={foods} />
    </View>
  );
}
