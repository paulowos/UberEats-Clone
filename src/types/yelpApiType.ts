type yelpApiType = {
  businesses: Business[];
};

export type Business = {
  id: string;
  name: string;
  image_url: string;
  rating: number;
  review_count: number;
  categories: { title: string }[];
};

export default yelpApiType;
