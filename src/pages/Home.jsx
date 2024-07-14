import Container from "../components/Container";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HowWeWork from "../components/HowWeWork";
import MostAskedQuestions from "../components/MostAskedQuestions";
import RecomendedCars from "../features/cars/RecomendedCars";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <HeroSection />
        <RecomendedCars />
        <HowWeWork />
        <GetStarted />
        <MostAskedQuestions />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
