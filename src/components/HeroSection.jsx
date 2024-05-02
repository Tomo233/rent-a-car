import styled from "styled-components";
import road from "../../public/road.jpg";

const StyledHeroSection = styled.section`
  position: relative;
  top: -100px;
  z-index: -1;
`;

const RoadImage = styled.img`
  width: 100%;
  max-height: 800px;
`;

const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 22px;
  width: 800px;
  text-align: center;
`;

const Span = styled.span`
  color: #7dd3fc;
  font-weight: 600;
`;

function HeroSection() {
  return (
    <StyledHeroSection>
      <RoadImage src={road} alt="" />
      <TextBox>
        <Title>Cruise into Your Perfect Ride</Title>
        <Paragraph>
          Welcome to our car <Span>rental application</Span>, where finding your
          ideal <Span>vehicle</Span> is effortless. With a diverse selection of
          cars ranging from <Span>compact</Span> to <Span>luxury</Span>, we
          cater to every traveler&apos;s needs. Experience convenience and
          reliability as you embark on your next journey with us.
        </Paragraph>
      </TextBox>
    </StyledHeroSection>
  );
}

export default HeroSection;
