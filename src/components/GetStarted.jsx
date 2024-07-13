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
  width: 100%;
  height: 800px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Box = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const button = <Button>Get Started</Button>;

function GetStarted() {
  const { user } = useUser();
  return (
    <StyledGetStarted>
      <Road src="./images.jpg" alt="" />
      <Overlay />
      <Box>
        <Heading as="h2" color="white">
          Get Started With Our App
        </Heading>
        <Paragraph>
          Start now for seamless travel with exclusive deals. Join savy
          travelers for personalized service. Say goodbye to hassle -
          <Span> sign up </Span>for convenience and affordability.Begin now for
          seamless travel andexclusive deals. Join savvy travelers for
          personalized service.
        </Paragraph>
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
