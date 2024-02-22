import { create } from "zustand";
// const API_KEY = "c4848c9d02d844a6b9ef498336231a46";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  rating_top: number;
  stores: Stores[];
}
interface Stores {
  id: number;
  store: {
    id: number;
    name: string;
    domain: string;
    image_background: string;
  };
}

interface GamesState {
  games: Game[];
  loading: boolean;
  error: string | null;
  fetchGames: () => Promise<void>;
}

export const useGamesStore = create<GamesState>((set) => ({
  games: [],
  loading: false,
  error: null,
  fetchGames: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}`
      );
      const data = await response.json();
      set({ games: data.results });
      console.log(data.results);
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message });
      } else {
        set({ error: "An unknown error occurred" });
      }
    } finally {
      set({ loading: false });
    }
  },
}));
