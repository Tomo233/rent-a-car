import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Flex from "./Flex";
import Grid from "./Grid";

const StyledPageNotFound = styled.div`
  margin-top: 20%;
`;

const StyledH = styled.h1`
  margin-bottom: 30px;
`;

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <StyledPageNotFound>
      <Flex justify="center" gap="30px">
        <Grid>
          <StyledH>Page not found</StyledH>
          <Button onClick={() => navigate(-1)}>Go back</Button>
        </Grid>
      </Flex>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
