import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Categories from "./Categories";
import HeaderTabs from "./HeaderTabs";
import SearchBar from "./SearchBar";

type Prop = { setLocation: React.Dispatch<React.SetStateAction<string>> };

export default function Header({ setLocation }: Prop) {
  return (
    <SafeAreaView style={{ backgroundColor: "white", paddingVertical: 15 }}>
      <HeaderTabs />
      <SearchBar setLocation={setLocation} />
      <Categories />
    </SafeAreaView>
  );
}
