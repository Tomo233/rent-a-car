import Container from "./Container";
import Header from "./Header";
import Home from "../pages/Home";

function AppLayout() {
  return (
    <>
      <Container>
        <Header />
        <main>
          <Home />
        </main>
      </Container>
    </>
  );
}

export default AppLayout;
