import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import useStore from "../../store/store";
import StackParamType from "../../types/stackParamsType";

type Props = {
  navigation: NativeStackNavigationProp<StackParamType, "Detail">;
  name: string;
};

export default function ViewCart({ navigation, name }: Props) {
  const store = useStore();

  return (
    store.total > 0 && (
      <TouchableOpacity style={styles.container} activeOpacity={0.96}>
        <Text style={styles.text}>PEDIDO • {store.total.toFixed(2)}</Text>
      </TouchableOpacity>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
    padding: 10,
  },
  text: { color: "white", fontSize: 20 },
});
