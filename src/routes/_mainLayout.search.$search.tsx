import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_mainLayout/search/$search")({
  component: () => <div>Hello /_mainLayout/search/$search!</div>,
});
