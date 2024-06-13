import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import PageNotFound from "./components/PageNotFound";
import CarsPage from "./pages/CarsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CarFilterProvider } from "./context/CarFilterContext";
import Car from "./features/cars/Car";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <CarFilterProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/cars" element={<CarsPage />} />
              <Route path="/cars/:carId" element={<Car />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <GlobalStyles />
        </BrowserRouter>
      </QueryClientProvider>
    </CarFilterProvider>
  );
}

export default App;
