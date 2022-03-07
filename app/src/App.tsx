import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Cats from "./Cats";
import Dashboard from "./components/Dashboard";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      {/* <Cats /> */}
      <Dashboard />
    </QueryClientProvider>
  );
}

export default App;
