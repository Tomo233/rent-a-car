import GetStarted from "../components/GetStarted";
import HeroSection from "../components/HeroSection";
import HowWeWork from "../components/HowWeWork";
import RecomendedCars from "../components/RecomendedCars";

function Home() {
  return (
    <>
      <HeroSection />
      <RecomendedCars />
      <HowWeWork />
      <GetStarted />
    </>
  );
}

export default Home;
