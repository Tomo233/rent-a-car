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

function Fallback({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyles />
      <StyledErrorBoundary>
        <Heading as="h1">Something went wrong</Heading>
        <P>{error.message}</P>
        <Button onClick={resetErrorBoundary}>Try again</Button>
      </StyledErrorBoundary>
    </>
  );
}

export default Fallback;
