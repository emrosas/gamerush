import { Outlet, createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";

export const Route = createFileRoute("/_mainLayout")({
  component: () => (
    <div className="min-h-screen grid grid-cols-12">
      <Navbar />
      <main className="col-span-9 px-6">
        <Outlet />
      </main>
    </div>
  ),
});
