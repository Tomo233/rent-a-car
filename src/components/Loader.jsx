import { CircularProgress } from "@mui/material";
import styled from "styled-components";
import Flex from "./Flex";

const StyledLoader = styled.div`
  margin: 250px 0;
`;

const StyledCircularProgress = styled(CircularProgress)`
  width: 80px !important;
`;

function Loader() {
  return (
    <StyledLoader>
      <Flex $justify="center">
        <StyledCircularProgress />
      </Flex>
    </StyledLoader>
  );
}

export default Loader;
