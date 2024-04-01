import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import categoriesAssets, {
  categoryAsset,
} from "../../../assets/images/categories";

import useStore, { DEFAULT_ALIAS } from "../../../store/store";

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.categoriesScrollView}>
        {categoriesAssets.map((asset) => (
          <Category
            name={asset.name}
            image={asset.image}
            alias={asset.alias}
            key={asset.name}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const Category = ({ name, image, alias }: categoryAsset) => {
  const store = useStore();

  const handlePress = () => {
    if (store.alias == alias) return store.setAlias(DEFAULT_ALIAS);
    store.setAlias(alias);
  };

  return (
    <TouchableOpacity style={styles.categoryView} onPress={handlePress}>
      <Image source={image} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoriesScrollView: {
    flexDirection: "row",
    gap: 30,
    paddingHorizontal: 15,
    marginTop: 15,
  },
  categoryImage: { width: 50, height: 40, resizeMode: "contain" },
  categoryText: { fontSize: 13, fontWeight: "900" },
  categoryView: { alignItems: "center" },
});
