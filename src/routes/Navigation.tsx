import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Detail from "../screens/Detail";
import Home from "../screens/Home";
import StackParamType from "../types/stackParamsType";

export default function Navigation() {
  const Stack = createNativeStackNavigator<StackParamType>();

  const screenOptions = { headerShown: false };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
