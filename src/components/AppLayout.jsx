import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <Header />
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default AppLayout;
