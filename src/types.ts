export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  rating_top: number;
  stores: Stores[];
  genres: [];
  tags: [];
}

export interface Stores {
  id: number;
  store: {
    id: number;
    name: string;
    domain: string;
    image_background: string;
  };
}
