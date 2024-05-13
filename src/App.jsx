import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import PageNotFound from "./components/PageNotFound";
import CarsPage from "./pages/CarsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/s" element={<Home />} />
              <Route path="/" element={<CarsPage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <GlobalStyles />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
