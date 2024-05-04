import GetStarted from "../components/GetStarted";
import HeroSection from "../components/HeroSection";
import HowWeWork from "../components/HowWeWork";
import MostAskedQuestions from "../components/MostAskedQuestions";
import RecomendedCars from "../components/RecomendedCars";

function Home() {
  return (
    <>
      <HeroSection />
      <RecomendedCars />
      <HowWeWork />
      <GetStarted />
      <MostAskedQuestions />
    </>
  );
}

export default Home;
