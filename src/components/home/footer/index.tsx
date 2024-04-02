import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import FooterTab, { TabNamesEnum } from "./FooterTab";

export default function Footer() {
  const activeTabState = useState<TabNamesEnum>(TabNamesEnum.search);

  return (
    <View style={styles.footerView}>
      <FooterTab
        name={TabNamesEnum.search}
        title="Pesquisar"
        activeTabState={activeTabState}
      />
      <FooterTab
        name={TabNamesEnum.receipt}
        title="Pedidos"
        activeTabState={activeTabState}
      />
      <FooterTab
        name={TabNamesEnum.person}
        title="Conta"
        activeTabState={activeTabState}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footerView: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-around",
    backgroundColor: "white",
  },
});
