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

  @media (max-width: 992px) {
    height: 300px;
  }
`;

const StyledIcon = styled.div`
  color: var(--color-primary-blue);
  font-size: 40px;
`;

const P = styled.p`
  margin: 5px 0;
  color: white;
`;

const ResponsiveGrid = styled(Grid)`
  @media (max-width: 690px) {
    grid-template-columns: 1fr;
  }
`;

const ResponsiveFooterContent = styled.div`
  p {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const ResponsiveHeading = styled(Heading)`
  @media (max-width: 690px) {
    text-align: center;
    margin-bottom: 10px;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <ResponsiveGrid columns="3" height="100%" gap="15px">
          <ResponsiveFooterContent>
            <Flex justify="normal" gap="5px">
              <Logo />
              <Heading as="h3" color="white" $notaligned={true}>
                <Span>Car</Span> Rental
              </Heading>
            </Flex>
            <P>
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adiPisicing elit. Possimus, voluPtate.
            </P>
          </ResponsiveFooterContent>
          <div>
            <ResponsiveHeading as="h3" color="white" $notaligned={true}>
              Popular <Span>Cars</Span>
            </ResponsiveHeading>
            <P>Luxury Car Rental</P>
            <P>All Car/Sedan Sizes</P>
            <P>Electric Car Rental</P>
          </div>
          <ResponsiveFooterContent>
            <ResponsiveHeading as="h3" color="white" $notaligned={true}>
              Contact
            </ResponsiveHeading>
            <P>Email: rental@gmail.com</P>
            <P>Telefon: +387 66 357 126</P>
            <StyledIcon as={InstagramIcon} fontSize="" />
            <StyledIcon as={LinkedInIcon} fontSize="" />
            <StyledIcon as={FacebookIcon} fontSize="" />
            <StyledIcon as={TwitterIcon} fontSize="" />
          </ResponsiveFooterContent>
        </ResponsiveGrid>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
