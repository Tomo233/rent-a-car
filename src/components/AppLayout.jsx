import Container from "./Container";
import Header from "./Header";
import Home from "../pages/Home";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Container>
        <Header />
        <main>
          <Home />
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default AppLayout;
