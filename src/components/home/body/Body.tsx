import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import RestaurantCard from "./RestaurantCard";
import yelpApiType from "../../../types/yelpApiType";

type Prop = { location: string };

export default function Body({ location }: Prop) {
  const [data, setData] = useState<yelpApiType>();

  const URL = `https://api.yelp.com/v3/businesses/search?location=${location}&categories=hotdogs%2Cdesserts%2Cbeverage_stores%2Cbakeries%2Ccafes%2Cgrocery&locale=pt_BR&sort_by=review_count&limit=20`;

  const apiOptions = {
    headers: {
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_YELP_API_KEY}`,
    },
  };

  const getData = () => {
    fetch(URL, apiOptions)
      .then((res) => res.json())
      .then((data: yelpApiType) => setData(data))
      .catch(() => setData(undefined));
  };

  useEffect(() => {
    getData();
  }, [location]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ gap: 5, marginVertical: 5 }}>
        {data?.businesses?.map(({ id, name, image_url, rating }) => (
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
