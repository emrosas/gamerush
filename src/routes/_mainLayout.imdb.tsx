import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_mainLayout/imdb")({
    loader: async () => {
        
    }
  component: () => <div>Hello /_mainLayout/imdb!</div>,
});
