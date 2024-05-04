import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import Paragraph from "./Paragraph";
import Span from "./Span";

const StyledGetStarted = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 100px;
  margin-bottom: 300px;
`;

const Road = styled.img`
  display: block;
  width: 100%;
  height: 800px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Box = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function GetStarted() {
  return (
    <StyledGetStarted>
      <Road src="./images.jpg" alt="" />
      <Overlay />
      <Box>
        <Heading as="h2" style={{ color: "white" }}>
          Get Started With Our App
        </Heading>
        <Paragraph>
          Start now for seamless travel with exclusive deals. Join savvy
          travelers for personalized service. Say goodbye to hassle -
          <Span> sign up </Span>for convenience and affordability.Begin now for
          seamless travel andexclusive deals. Join savvy travelers for
          personalized service.
        </Paragraph>
        <Button>See Offers</Button>
      </Box>
    </StyledGetStarted>
  );
}

export default GetStarted;
