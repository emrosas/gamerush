import { Game } from "../store";

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <li key={game.id}>
      <h3>{game.name}</h3>
    </li>
  );
}

export default GameCard;
