import { Link } from "@tanstack/react-router";

function Navbar() {
  return (
    <nav className="px-6 relative col-span-3 bg-dark-1 flex flex-col">
      <div className="py-6 flex flex-col gap-4 sticky top-0">
        <Link to="/" className="[&.active]:font-bold [&.active]:text-blue-400">
          Popular
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
