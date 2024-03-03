import {
  createFileRoute,
  ErrorComponent,
  ErrorComponentProps,
} from "@tanstack/react-router";
import { Game } from "../types";
// import { Game } from "../types";

export const Route = createFileRoute("/games/$gameId")({
  loader: async ({ params: { gameId } }) => {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${import.meta.env.VITE_APP_RAWG_KEY}&search=${gameId}&page_size=1`
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
  console.log(data[0] as Game);
  const game = data[0] as Game;
  return (
    <div className="p-6 flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span>Selected Game:</span>
        <h2 className="text-2xl font-semibold">{game.name}</h2>
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
