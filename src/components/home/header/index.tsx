import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Categories from "./Categories";
import HeaderTabs from "./HeaderTabs";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <SafeAreaView style={{ backgroundColor: "white", paddingVertical: 15 }}>
      <HeaderTabs />
      <SearchBar />
      <Categories />
    </SafeAreaView>
  );
}
