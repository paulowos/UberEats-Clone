import React from "react";
import { View } from "react-native";
import {
  GooglePlacesAutocomplete,
  Query,
} from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SearchBar() {
  const query: Query = {
    key: process.env.EXPO_PUBLIC_PLACES_API_KEY || "",
    language: "pt-BR",
  };

  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: "row",
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Pesquisar"
        query={query}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 30,
            fontWeight: "700",
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 30,
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 15,
            paddingHorizontal: 10,
          },
        }}
        renderLeftButton={() => <Ionicons name="location-sharp" size={24} />}
        renderRightButton={() => <Ionicons name="search-sharp" size={24} />}
      />
    </View>
  );
}
