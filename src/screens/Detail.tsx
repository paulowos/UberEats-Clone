import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";

import About from "../components/detail/About";
import StackParamType from "../types/stackParamsType";

type Props = NativeStackScreenProps<StackParamType, "Detail">;

export default function Detail({ route }: Props) {
  return (
    <View>
      <About route={route} />
    </View>
  );
}
