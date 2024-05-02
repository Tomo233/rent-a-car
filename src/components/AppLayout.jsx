import Container from "./Container";
import Header from "./Header";
import HeroSection from "./HeroSection";

function AppLayout() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <HeroSection />
    </>
  );
}

export default AppLayout;
