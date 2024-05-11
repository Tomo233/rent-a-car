import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <Container>
        <Header />
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default AppLayout;
