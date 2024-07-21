import styled from "styled-components";
import SearchForm from "./SearchForm";
import Span from "./Span";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import BasicModal from "./BasicModal";
import Button from "./Button";
import LoginForm from "../features/authentication/LoginForm";
import { useUser } from "../features/authentication/useUser";

const RoadImage = styled.img`
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
  margin-bottom: ${(props) => (props.$isloggedin ? "190px" : "140px")};

  @media (max-width: 992px) {
    margin-bottom: 175px;
  }

  @media (max-width: 600px) {
    margin-top: 12rem !important;
  }
`;

const ResponsiveParagraph = styled(Paragraph)`
  @media (max-width: 992px) {
    font-size: 18px;
    max-width: 500px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
    max-width: 400px;
  }
  @media (max-width: 481px) {
    max-width: 300px;
  }
  @media (max-width: 320px) {
    max-width: 250px;
  }
`;

const ResponsiveHeading = styled(Heading)`
  @media (max-width: 1200px) {
    font-size: 45px;
  }
  @media (max-width: 600px) {
    font-size: 40px;
  }
  @media (max-width: 481px) {
    font-size: 35px;
  }
  @media (max-width: 320px) {
    font-size: 30px;
  }
`;

const button = <Button>Login / Sign Up</Button>;

function HeroSection() {
  const { user } = useUser();

  return (
    <section>
      <RoadImage src="/road.jpg" alt="" />
      <TextBox $isloggedin={!!user}>
        <ResponsiveHeading as="h1" color="white">
          Cruise into Your Perfect Ride
        </ResponsiveHeading>
        <ResponsiveParagraph>
          Welcome to our car <Span>rental application</Span>, where finding your
          ideal <Span>vehicle</Span> is effortless. With a diverse selection of
          cars ranging from <Span>compact</Span> to <Span>luxury</Span>, we
          cater to every traveler&apos;s needs. Experience convenience and
          reliability as you embark on your next journey with us.
        </ResponsiveParagraph>
        {!user && (
          <BasicModal button={button}>
            <LoginForm />
          </BasicModal>
        )}
      </TextBox>

      <SearchForm />
    </section>
  );
}

export default HeroSection;
