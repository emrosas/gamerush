import { Game } from "../store";

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <li key={game.id} className="flex flex-col gap-2">
      <img
        className="rounded-lg object-cover aspect-video"
        src={game.background_image}
        alt={game.name}
      />
      <div className="flex justify-between gap-4">
        <h3 className="font-semibold">{game.name}</h3>
        <div className="flex gap-2 items-center">
          <div className="size-2 bg-amber-300 opacity-50" />
          <span
            className={`text-xs ${game.rating > 4.5 && "text-green-500"} ${
              game.rating < 3.8 && "text-orange-500"
            }`}>
            {game.rating}
          </span>
        </div>
      </div>
    </li>
  );
}

export default GameCard;
