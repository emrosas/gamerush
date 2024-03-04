import { createFileRoute } from "@tanstack/react-router";
import { ErrorComponent, ErrorComponentProps } from "@tanstack/react-router";
import { Game } from "../types";
import Card from "../components/Card";

export const Route = createFileRoute("/_mainLayout/genres/$genre")({
  loader: async ({ params: { genre } }) => {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${import.meta.env.VITE_APP_RAWG_KEY}&genres=${genre}&page_size=24`
    );
    const data = await response.json();
    return data.results;
  },
  errorComponent: GenresErrorComponent,
  component: Genres,
});

function GenresErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function Genres() {
  const data: [] = Route.useLoaderData();

  return (
    <ul className="grid grid-cols-3 gap-6 py-6">
      {data.map((game: Game) => (
        <Card game={game} key={game.id} />
      ))}
    </ul>
  );
}
