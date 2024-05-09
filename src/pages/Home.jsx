import GetStarted from "../components/GetStarted";
import HeroSection from "../components/HeroSection";
import HowWeWork from "../components/HowWeWork";
import LoginForm from "../components/LoginForm";
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
      <LoginForm />
    </>
  );
}

export default Home;
