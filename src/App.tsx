// import PopularScreen from "./pages/PopularScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PopularScreen from "./pages/PopularScreen";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <PopularScreen />
    </QueryClientProvider>
  );
}

export default App;
