import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate({ from: "/" });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate({ to: "/search/$search", params: { search } });
    setSearch("");
  };

  return (
    <nav className="px-6 relative col-span-3 bg-dark-1 flex flex-col">
      <div className="py-6 flex flex-col gap-4 sticky top-0">
        <Link
          to="/"
          className="text-3xl font-semibold text-brand-2 uppercase flex gap-2 items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="size-10">
            <path
              fill="currentColor"
              d="m11.3 9.8l-2-2q-.15-.15-.225-.337T9 7.075V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v4.075q0 .2-.075.388T14.7 7.8l-2 2q-.15.15-.325.213t-.375.062q-.2 0-.375-.062T11.3 9.8m2.9 2.9q-.15-.15-.212-.325T13.925 12q0-.2.063-.375t.212-.325l2-2q.15-.15.338-.225T16.925 9H21q.425 0 .713.288T22 10v4q0 .425-.288.713T21 15h-4.075q-.2 0-.387-.075T16.2 14.7zM2 14v-4q0-.425.288-.712T3 9h4.075q.2 0 .388.075T7.8 9.3l2 2q.15.15.213.325t.062.375q0 .2-.062.375T9.8 12.7l-2 2q-.15.15-.337.225T7.075 15H3q-.425 0-.712-.288T2 14m7 7v-4.075q0-.2.075-.387T9.3 16.2l2-2q.15-.15.325-.212t.375-.063q.2 0 .375.063t.325.212l2 2q.15.15.225.338t.075.387V21q0 .425-.288.713T14 22h-4q-.425 0-.712-.288T9 21m3-13.35l1-1V4h-2v2.65zM4 13h2.65l1-1l-1-1H4zm7 7h2v-2.65l-1-1l-1 1zm6.35-7H20v-2h-2.65l-1 1z"
            />
          </svg>
          <h1>Gamerush</h1>
        </Link>
        <form onSubmit={handleSearch}>
          <input
            className="bg-white bg-opacity-25 rounded-lg text-white p-2 w-full focus:outline-none focus:bg-opacity-30 focus:ring-2 focus:ring-white transition-all duration-75"
            placeholder="Search..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <div className="flex flex-col gap-6 mt-8 pl-4">
          <Link
            to="/"
            className="relative opacity-70 hover:opacity-100 hover:translate-x-1 transition-all duration-75 [&.active]:font-bold [&.active]:opacity-100 [&.active]:text-brand-2 [&.active]:before:size-1 [&.active]:before:bg-brand-1 [&.active]:before:absolute [&.active]:before:-left-[0.75rem] [&.active]:before:top-1/2">
            Best Rated
          </Link>
          <Link
            to="/genres/$genre"
            params={{ genre: "action" }}
            className="relative opacity-70 hover:opacity-100 hover:translate-x-1 transition-all duration-75 [&.active]:font-bold [&.active]:opacity-100 [&.active]:text-brand-2 [&.active]:before:size-1 [&.active]:before:bg-brand-1 [&.active]:before:absolute [&.active]:before:-left-[0.75rem] [&.active]:before:top-1/2">
            Action
          </Link>
          <Link
            to="/genres/$genre"
            params={{ genre: "adventure" }}
            className="relative opacity-70 hover:opacity-100 hover:translate-x-1 transition-all duration-75 [&.active]:font-bold [&.active]:opacity-100 [&.active]:text-brand-2 [&.active]:before:size-1 [&.active]:before:bg-brand-1 [&.active]:before:absolute [&.active]:before:-left-[0.75rem] [&.active]:before:top-1/2">
            Adventure
          </Link>
          <Link
            to="/genres/$genre"
            params={{ genre: "shooter" }}
            className="relative opacity-70 hover:opacity-100 hover:translate-x-1 transition-all duration-75 [&.active]:font-bold [&.active]:opacity-100 [&.active]:text-brand-2 [&.active]:before:size-1 [&.active]:before:bg-brand-1 [&.active]:before:absolute [&.active]:before:-left-[0.75rem] [&.active]:before:top-1/2">
            Shooter
          </Link>
          <Link
            to="/genres/$genre"
            params={{ genre: "platformer" }}
            className="relative opacity-70 hover:opacity-100 hover:translate-x-1 transition-all duration-75 [&.active]:font-bold [&.active]:opacity-100 [&.active]:text-brand-2 [&.active]:before:size-1 [&.active]:before:bg-brand-1 [&.active]:before:absolute [&.active]:before:-left-[0.75rem] [&.active]:before:top-1/2">
            Platformer
          </Link>
          <Link
            to="/genres/$genre"
            params={{ genre: "indie" }}
            className="relative opacity-70 hover:opacity-100 hover:translate-x-1 transition-all duration-75 [&.active]:font-bold [&.active]:opacity-100 [&.active]:text-brand-2 [&.active]:before:size-1 [&.active]:before:bg-brand-1 [&.active]:before:absolute [&.active]:before:-left-[0.75rem] [&.active]:before:top-1/2">
            Indie
          </Link>
          <Link
            to="/genres/$genre"
            params={{ genre: "sports" }}
            className="relative opacity-70 hover:opacity-100 hover:translate-x-1 transition-all duration-75 [&.active]:font-bold [&.active]:opacity-100 [&.active]:text-brand-2 [&.active]:before:size-1 [&.active]:before:bg-brand-1 [&.active]:before:absolute [&.active]:before:-left-[0.75rem] [&.active]:before:top-1/2">
            Sports
          </Link>
          <Link
            to="/genres/$genre"
            params={{ genre: "puzzle" }}
            className="relative opacity-70 hover:opacity-100 hover:translate-x-1 transition-all duration-75 [&.active]:font-bold [&.active]:opacity-100 [&.active]:text-brand-2 [&.active]:before:size-1 [&.active]:before:bg-brand-1 [&.active]:before:absolute [&.active]:before:-left-[0.75rem] [&.active]:before:top-1/2">
            Puzzle
          </Link>
          <Link
            to="/genres/$genre"
            params={{ genre: "simulation" }}
            className="relative opacity-70 hover:opacity-100 hover:translate-x-1 transition-all duration-75 [&.active]:font-bold [&.active]:opacity-100 [&.active]:text-brand-2 [&.active]:before:size-1 [&.active]:before:bg-brand-1 [&.active]:before:absolute [&.active]:before:-left-[0.75rem] [&.active]:before:top-1/2">
            Simulation
          </Link>
          <Link
            to="/genres/$genre"
            params={{ genre: "strategy" }}
            className="relative opacity-70 hover:opacity-100 hover:translate-x-1 transition-all duration-75 [&.active]:font-bold [&.active]:opacity-100 [&.active]:text-brand-2 [&.active]:before:size-1 [&.active]:before:bg-brand-1 [&.active]:before:absolute [&.active]:before:-left-[0.75rem] [&.active]:before:top-1/2">
            Strategy
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
