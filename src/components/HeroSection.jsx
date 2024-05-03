import styled from "styled-components";
import Button from "./Button";
import SearchForm from "./SearchForm";
import Span from "./Span";

const RoadImage = styled.img`
  width: 100%;
  max-height: 800px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const TextBox = styled.div`
  text-align: center;
  margin-top: 16rem;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: white;
`;

const Paragraph = styled.p`
  font-size: 22px;
  width: 800px;
  text-align: center;
  margin-bottom: 25px;
  text-align: center;
  margin: 20px auto;
  color: white;
`;

function HeroSection() {
  return (
    <section>
      <RoadImage src="/road.jpg" alt="" />
      <TextBox>
        <Title>Cruise into Your Perfect Ride</Title>
        <Paragraph>
          Welcome to our car <Span>rental application</Span>, where finding your
          ideal <Span>vehicle</Span> is effortless. With a diverse selection of
          cars ranging from <Span>compact</Span> to <Span>luxury</Span>, we
          cater to every traveler&apos;s needs. Experience convenience and
          reliability as you embark on your next journey with us.
        </Paragraph>
        <Button>Get Started</Button>
      </TextBox>
      <SearchForm />
    </section>
  );
}

export default HeroSection;
