import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

enum activeEnum {
  "delivery",
  "pickup",
}

type tabProps = {
  text: string;
  name: activeEnum;
  btnColor: string;
  textColor: string;
  setActive: React.Dispatch<React.SetStateAction<activeEnum>>;
};

export default function HeaderTabs() {
  const [active, setActive] = useState<activeEnum>(activeEnum.delivery);

  return (
    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 5 }}>
      <Tab
        text="Delivery"
        name={activeEnum.delivery}
        btnColor={active === activeEnum.delivery ? "black" : "white"}
        textColor={active === activeEnum.delivery ? "white" : "black"}
        setActive={setActive}
      />
      <Tab
        text="Pickup"
        name={activeEnum.pickup}
        btnColor={active === activeEnum.pickup ? "black" : "white"}
        textColor={active === activeEnum.pickup ? "white" : "black"}
        setActive={setActive}
      />
    </View>
  );
}

const Tab = ({ text, name, btnColor, textColor, setActive }: tabProps) => {
  const styles = StyleSheet.create({
    tab: {
      backgroundColor: btnColor,
      width: 90,
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    },
    text: {
      color: textColor,
      fontSize: 15,
      textAlign: "center",
      fontWeight: "900",
    },
  });

  return (
    <TouchableOpacity
      style={styles.tab}
      onPress={() => {
        setActive(name);
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
