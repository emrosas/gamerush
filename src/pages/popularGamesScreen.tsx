import { useEffect } from "react";
import GameCard from "../components/GameCard";
import { useGamesStore } from "../store";

function PopularGamesScreen() {
  const games = useGamesStore((state) => state.games);
  const fetchGames = useGamesStore((state) => state.fetchGames);
  const loading = useGamesStore((state) => state.loading);
  const error = useGamesStore((state) => state.error);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  return (
    <main className="min-h-screen grid grid-cols-12 gap-6">
      <aside className="bg-dark-1 col-span-3 col-start-1 relative">
        <div className="px-6 py-6 h-screen sticky top-0 flex flex-col justify-between">
          <div className="flex gap-4 items-center">
            <div className="size-4 bg-brand-1 rounded-sm" />
            <h1 className="text-3xl font-bold">Gamerush</h1>
          </div>
          <button
            onClick={fetchGames}
            className="bg-brand-1 outline outline-brand-2 rounded-lg px-4 py-2 hover:-translate-y-1 transition duration-300 ease-out hover:bg-brand-2">
            Show Games
          </button>
        </div>
      </aside>
      <section className="col-span-9 pr-6 py-6">
        <ul className="grid grid-cols-3 gap-8">
          {loading ? (
            <span className="font-semibold opacity-50">Loading...</span>
          ) : (
            games.map((game) => <GameCard game={game} />)
          )}
          {error && (
            <span className="text-red-600 uppercase font-semibold">
              {error}
            </span>
          )}
        </ul>
      </section>
    </main>
  );
}

export default PopularGamesScreen;
