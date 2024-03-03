import { createFileRoute } from "@tanstack/react-router";
import { Game } from "../types";
import Card from "../components/Card";
const key = import.meta.env.VITE_APP_RAWG_KEY;

export const Route = createFileRoute("/_mainLayout/about")({
  loader: async () => {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${key}&ordering=-released&page_size=24`
    );
    const data = await response.json();
    return data.results;
  },
  component: About,
});

function About() {
  const data = Route.useLoaderData();

  return (
    <ul className="grid grid-cols-3 gap-6 py-6">
      {data.map((game: Game) => (
        <Card game={game} key={game.id} />
      ))}
    </ul>
  );
}
