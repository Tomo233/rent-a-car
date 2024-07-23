/* eslint-disable react/prop-types */
import styled from "styled-components";
import Heading from "./Heading";
import GlobalStyles from "../styles/GlobalStyles";
import Button from "./Button";

const StyledErrorBoundary = styled.div`
  text-align: center;
  margin-top: 20%;
`;

const P = styled.p`
  margin: 25px 0;
`;

const StyledHeading = styled(Heading)`
  @media (max-width: 400px) {
    font-size: 50px;
  }
`;

function Fallback({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyles />
      <StyledErrorBoundary>
        <StyledHeading as="h1">Something went wrong</StyledHeading>
        <P>{error.message}</P>
        <Button onClick={resetErrorBoundary}>Try again</Button>
      </StyledErrorBoundary>
    </>
  );
}

export default Fallback;
