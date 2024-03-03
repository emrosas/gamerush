import { Game } from "../types";
import { Link } from "@tanstack/react-router";

function Card({ game }: { game: Game }) {
  return (
    <li key={game.id} className="hover:-translate-y-1 transition-all">
      <Link
        to="/$gameName"
        params={{ gameName: game.name }}
        className="flex flex-col gap-2">
        {game.background_image === null ? (
          <div className=" bg-brand-1 bg-opacity-15 h-48 w-full rounded-lg" />
        ) : (
          <img
            className="rounded-lg object-cover aspect-video"
            src={game.background_image}
            alt={game.name}
          />
        )}

        <div className="flex justify-between gap-4">
          <h3
            className={`font-semibold ${
              game.name.length > 30 ? "text-sm" : "text-base"
            }`}>
            {game.name}
          </h3>
          <div className="flex gap-2 items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="size-3 text-amber-300">
              <path
                fill="currentColor"
                d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"
              />
            </svg>
            <span
              className={`text-xs ${game.rating > 4.5 && "text-green-500"} ${
                game.rating < 3.8 && "text-orange-500"
              }`}>
              {game.rating}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Card;
