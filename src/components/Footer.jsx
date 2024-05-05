/* eslint-disable react/prop-types */
import styled from "styled-components";
import Heading from "./Heading";
import Logo from "./Logo";
import Container from "./Container";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

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

const FooterFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const StyledIcon = styled.div`
  color: var(--color-primary-blue);
  font-size: 40px;
`;

const P = styled.p`
  margin: 5px 0;
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Grid>
          <div>
            <FooterFlex>
              <Logo />
              <Heading as="h3">Car Rental</Heading>
            </FooterFlex>
            <P>
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adiPisicing elit. Possimus, voluPtate.
            </P>
          </div>
          <div>
            <Heading as="h3" style={{ textAlign: "start" }}>
              Popular Rental Cars
            </Heading>
            <P>Luxury Car Rental</P>
            <P>All Car/Sedan Sizes</P>
            <P>Electric Car Rental</P>
          </div>
          <div>
            <Heading as="h3" style={{ textAlign: "start" }}>
              Contact
            </Heading>
            <P>Email: rental@gmail.com</P>
            <P>Telefon: +387 66 357 126</P>
            <StyledIcon as={InstagramIcon} fontSize="" />
            <StyledIcon as={LinkedInIcon} fontSize="" />
            <StyledIcon as={FacebookIcon} fontSize="" />
            <StyledIcon as={TwitterIcon} fontSize="" />
          </div>
        </Grid>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
