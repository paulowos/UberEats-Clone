import React from "react";
import { View } from "react-native";
import {
  GooglePlaceData,
  GooglePlacesAutocomplete,
  Query,
} from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";

import useStore from "../../../store/store";

export default function SearchBar() {
  const store = useStore();

  const query: Query = {
    key: process.env.EXPO_PUBLIC_PLACES_API_KEY || "",
    language: "pt-BR",
  };

  const handlePress = (data: GooglePlaceData) => {
    const city = data.description.split(",");
    const location = city[0].replace(/ /g, "%20");
    store.setLocation(location);
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
        onPress={handlePress}
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
