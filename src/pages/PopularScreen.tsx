const key = import.meta.env.VITE_APP_RAWG_KEY;
import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";
import { Game } from "../types";

function PopularScreen() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${key}&ordering=-rating&page_size=24`
      );
      const data = await response.json();
      return data.results;
    },
  });
  return (
    <main className="min-h-screen grid grid-cols-12 gap-6">
      <aside className="bg-dark-1 col-span-3 col-start-1 relative">
        <div className="px-6 py-6 h-screen sticky top-0 flex flex-col justify-between">
          <div className="flex gap-4 items-center">
            <div className="size-4 bg-brand-1 rounded-sm" />
            <h1 className="text-3xl font-bold">Gamerush</h1>
          </div>
          <button className="bg-brand-1 outline outline-brand-2 rounded-lg px-4 py-2 hover:-translate-y-1 transition duration-300 ease-out hover:bg-brand-2">
            Show Games
          </button>
        </div>
      </aside>
      <section className="col-span-9 pr-6 py-6">
        <ul className="grid grid-cols-3 gap-8">
          {isPending ? (
            <span className="font-semibold opacity-50">Loading...</span>
          ) : (
            data.map((game: Game) => <Card game={game} key={game.id} />)
          )}
          {isError && (
            <span className="text-red-600 uppercase font-semibold">
              Error: {error.message}
            </span>
          )}
        </ul>
      </section>
    </main>
  );
}

export default PopularScreen;
