import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import PageNotFound from "./components/PageNotFound";
import CarsPage from "./pages/CarsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Car from "./features/cars/Car";
import { CarProvider } from "./context/CarContext";
import { Toaster } from "react-hot-toast";
import BookingsPage from "./pages/BookingsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <CarProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/cars" element={<CarsPage />} />
              <Route path="/bookings" element={<BookingsPage />} />
              <Route path="/cars/:carId" element={<Car />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <GlobalStyles />
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontStyle: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-border-gray)",
              color: "black",
            },
          }}
        />
      </QueryClientProvider>
    </CarProvider>
  );
}

export default App;
