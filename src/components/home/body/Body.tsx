import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import RestaurantCard from "./RestaurantCard";
import yelpApiType from "../../../types/yelpApiType";

export default function Body() {
  const [data, setData] = useState<yelpApiType>();

  const URL =
    "https://api.yelp.com/v3/businesses/search?location=RiodeJaneiro&categories=hotdogs%2Cdesserts%2Cbeverage_stores%2Cbakeries%2Ccafes%2Cgrocery&locale=pt_BR&sort_by=review_count&limit=20";

  const apiOptions = {
    headers: {
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_YELP_API_KEY}`,
    },
  };

  const getData = () => {
    fetch(URL, apiOptions)
      .then((res) => res.json())
      .then((data: yelpApiType) => setData(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ gap: 5, marginVertical: 5 }}>
        {data?.businesses.map(({ id, name, image_url, rating }) => (
          <RestaurantCard
            key={id}
            name={name}
            image_url={image_url}
            rating={rating}
          />
        ))}
      </View>
    </ScrollView>
  );
}
