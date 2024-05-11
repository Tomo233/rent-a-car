import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </>
  );
}

export default App;
