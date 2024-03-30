import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import HeaderTabs from "./HeaderTabs";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <SafeAreaView style={{ backgroundColor: "white", padding: 15 }}>
      <HeaderTabs />
      <SearchBar />
    </SafeAreaView>
  );
}
