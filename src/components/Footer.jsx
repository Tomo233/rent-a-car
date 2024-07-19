import styled from "styled-components";
import Heading from "./Heading";
import Logo from "./Logo";
import Span from "./Span";
import Container from "./Container";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Flex from "./Flex";
import Grid from "./Grid";

const StyledFooter = styled.footer`
  margin-top: 200px;
  background-color: #171717;
  height: 300px;
`;

const StyledIcon = styled.div`
  color: var(--color-primary-blue);
  font-size: 40px;
`;

const P = styled.p`
  margin: 5px 0;
  color: white;
`;

const AlignedHeading = styled(Heading)`
  text-align: start;
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Grid columns="3">
          <div>
            <Flex justify="normal" gap="15px">
              <Logo />
              <Heading as="h3" color="white">
                <Span>Car</Span> Rental
              </Heading>
            </Flex>
            <P>
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adiPisicing elit. Possimus, voluPtate.
            </P>
          </div>
          <div>
            <AlignedHeading as="h3" color="white">
              Popular <Span>Rental Cars</Span>
            </AlignedHeading>
            <P>Luxury Car Rental</P>
            <P>All Car/Sedan Sizes</P>
            <P>Electric Car Rental</P>
          </div>
          <div>
            <AlignedHeading as="h3" color="white">
              Contact
            </AlignedHeading>
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
