import { Link } from "@tanstack/react-router";

function Navbar() {
  return (
    <nav className="p-6 col-span-3 bg-dark-1 flex flex-col">
      <div className="flex flex-col gap-4">
        <Link to="/" className="[&.active]:font-bold [&.active]:text-blue-400">
          Home
        </Link>
        <Link
          to="/about"
          className="[&.active]:font-bold [&.active]:text-blue-400">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
