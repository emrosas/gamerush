import { createFileRoute } from "@tanstack/react-router";
import { ErrorComponent, ErrorComponentProps } from "@tanstack/react-router";
import { Game } from "../types";
import Card from "../components/Card";

export const Route = createFileRoute("/_mainLayout/search/$search")({
  loader: async ({ params: { search } }) => {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${import.meta.env.VITE_APP_RAWG_KEY}&search=${search}&page_size=24`
    );
    const data = await response.json();
    return data.results;
  },
  errorComponent: SearchErrorComponent,
  component: Search,
});

function SearchErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function Search() {
  const data: [] = Route.useLoaderData();

  return (
    <div className="pt-6">
      <h2 className="text-2xl font-semibold">
        SEARCH: <span className="text-brand-2">{Route.useParams().search}</span>
      </h2>
      <ul className="grid grid-cols-3 gap-6 py-6">
        {data.map((game: Game) => (
          <Card game={game} key={game.id} />
        ))}
      </ul>
    </div>
  );
}
