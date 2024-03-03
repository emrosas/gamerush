import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_mainLayout/$category")({
  component: () => <div>Hello /_mainLayout/$category!</div>,
});
