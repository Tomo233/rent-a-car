/* eslint-disable react/prop-types */
import styled from "styled-components";
import Heading from "./Heading";
import Logo from "./Logo";
import Container from "./Container";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const StyledIcon = styled.div`
  color: var(--color-primary-blue);
  background-color: red;
`;

const StyledSocialIcon = ({ Icon }) => {
  return <StyledIcon as={Icon} />;
};

const StyledFooter = styled.footer`
  margin-top: 200px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  height: 300px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  height: 100%;
`;

const Inline = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Grid>
          <div>
            <Inline>
              <Logo />
              <Heading as="h3">Car Rental</Heading>
            </Inline>
            <p style={{ color: "var(--color-text-gray)" }}>
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.
            </p>
          </div>
          <div>
            <Heading as="h3" style={{ textAlign: "start" }}>
              Popular Rental Cars
            </Heading>
            <p>Luxury Car Rental</p>
            <p>All Car/Sedan Sizes</p>
            <p>Electric Car Rental</p>
          </div>
          <div>
            <Heading as="h3" style={{ textAlign: "start" }}>
              Contact
            </Heading>
            <p>Email: rental@gmail.com</p>
            <p>Telefon: +387 66 357 126</p>
            <StyledSocialIcon icon={InstagramIcon} />
            <StyledSocialIcon icon={LinkedInIcon} />
            <StyledSocialIcon icon={FacebookIcon} />
            <StyledSocialIcon icon={TwitterIcon} />
          </div>
        </Grid>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
