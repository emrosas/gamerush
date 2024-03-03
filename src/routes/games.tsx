import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { Game } from "../types";

export const Route = createFileRoute("/games")({
  loader: async () => {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${import.meta.env.VITE_APP_RAWG_KEY}&ordering=-rating&page_size=24`
    );
    const data = await response.json();
    return data.results;
  },
  component: Game,
});

function Game() {
  const data = Route.useLoaderData();
  return (
    <div className="p-6">
      <h1 className="text-xl">Games</h1>
      <ul>
        {data.map((game: Game) => (
          <li className="text-sm opacity-50 hover:opacity-80">
            <Link to="/games/$gamesId/overview" params={{ gamesId: game.name }}>
              {game.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* <Outlet /> */}
    </div>
  );
}
