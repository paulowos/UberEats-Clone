type yelpApiType = {
  businesses: business[];
};

type business = {
  id: string;
  name: string;
  image_url: string;
  price: string;
  rating: number;
  review_count: number;
  categories: { title: string }[];
};

export default yelpApiType;
