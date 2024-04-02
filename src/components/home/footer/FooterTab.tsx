import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export enum TabNamesEnum {
  search = "search",
  receipt = "receipt",
  person = "person",
}

type Props = {
  name: TabNamesEnum;
  title: string;
  activeTabState: [
    TabNamesEnum,
    React.Dispatch<React.SetStateAction<TabNamesEnum>>,
  ];
};

export default function FooterTab({ name, title, activeTabState }: Props) {
  const [activeTab, setActiveTab] = activeTabState;

  const handlePress = () => setActiveTab(name);

  const color = activeTab === name ? "black" : "#bebebe";

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.1}>
      <Ionicons
        name={name}
        size={24}
        style={{ alignSelf: "center" }}
        color={color}
      />
      <Text style={{ color }}>{title}</Text>
    </TouchableOpacity>
  );
}
