import styled from "styled-components";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Span from "./Span";
import Overlay from "./Overlay";
import BasicModal from "./BasicModal";
import Button from "./Button";
import LoginForm from "../features/authentication/LoginForm";
import { useUser } from "../features/authentication/useUser";

const StyledGetStarted = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 100px;
`;

const Road = styled.img`
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;

  @media (max-width: 768px) {
    height: 450px;
  }
`;

const Box = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ResponsiveHeading = styled(Heading)`
  @media (max-width: 992px) {
    font-size: 35px;
  }
  @media (max-width: 600px) {
    font-size: 25px;
  }
  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

const ResponsiveParagraph = styled(Paragraph)`
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 992px) {
    font-size: 16px;
    max-width: 600px;
  }
  @media (max-width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 500px) {
    max-width: 220px;
  }
`;

const ResponsiveButton = styled(Button)`
  @media (max-width: 768px) {
    padding: 12px 35px;
  }
`;

const button = <ResponsiveButton>Get Started</ResponsiveButton>;

function GetStarted() {
  const { user } = useUser();
  return (
    <StyledGetStarted>
      <Road src="./get-started-bmw.jpg" alt="" />
      <Overlay />
      <Box>
        <ResponsiveHeading as="h2" color="white">
          Get Started With Our App
        </ResponsiveHeading>
        <ResponsiveParagraph>
          Start now for seamless travel with exclusive deals. Join savy
          travelers for personalized service. Say goodbye to hassle -
          <Span> sign up </Span>for convenience and affordability.Begin now for
          seamless travel andexclusive deals. Join savvy travelers for
          personalized service.
        </ResponsiveParagraph>
        {!user && (
          <BasicModal button={button}>
            <LoginForm />
          </BasicModal>
        )}
      </Box>
    </StyledGetStarted>
  );
}

export default GetStarted;
