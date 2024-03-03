import { createFileRoute, Link } from "@tanstack/react-router";
import { ErrorComponent, ErrorComponentProps } from "@tanstack/react-router";
import { Game } from "../types";

export const Route = createFileRoute("/$gameName")({
  loader: async ({ params: { gameName } }) => {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${import.meta.env.VITE_APP_RAWG_KEY}&search=${gameName}&page_size=1`
    );
    const data = await response.json();
    return data.results;
  },
  errorComponent: GameErrorComponent,
  component: Game,
});

export function GameErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function Game() {
  const data = Route.useLoaderData();
  const game = data[0] as Game;
  return (
    <div className="p-6 flex flex-col gap-4">
      <Link
        to="/"
        className="text-brand-1 hover:text-brand-2 transition-colors duration-75">
        ← Back to Home
      </Link>
      <div className="flex flex-col gap-2 items-start">
        <img
          src={game.background_image}
          alt={game.name}
          className="h-24 aspect-video rounded-lg"
        />
        <div className="flex flex-col gap-1">
          <span>Selected Game:</span>
          <h2 className="text-2xl font-semibold">{game.name}</h2>
        </div>
      </div>
      <ul className="flex gap-4 flex-wrap">
        {game.tags.map((tag: any) => (
          <li className="bg-white rounded-full text-dark-1 text-xs px-2 py-1">
            {tag.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
