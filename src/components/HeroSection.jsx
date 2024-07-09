import styled from "styled-components";
import SearchForm from "./SearchForm";
import Span from "./Span";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import BasicModal from "./BasicModal";
import Button from "./Button";
import LoginForm from "../features/authentication/LoginForm";
import { useGetUser } from "../features/authentication/useGetUser";

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
  margin-bottom: ${(props) => (props.$isloggedin ? "190px" : "140px")};
`;

const button = <Button>Login / Sign Up</Button>;

function HeroSection() {
  const { user } = useGetUser();

  return (
    <section>
      <RoadImage src="/road.jpg" alt="" />
      <TextBox $isloggedin={!!user}>
        <Heading as="h1" color="white">
          Cruise into Your Perfect Ride
        </Heading>
        <Paragraph>
          Welcome to our car <Span>rental application</Span>, where finding your
          ideal <Span>vehicle</Span> is effortless. With a diverse selection of
          cars ranging from <Span>compact</Span> to <Span>luxury</Span>, we
          cater to every traveler&apos;s needs. Experience convenience and
          reliability as you embark on your next journey with us.
        </Paragraph>
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
