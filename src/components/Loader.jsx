import { CircularProgress } from "@mui/material";
import styled from "styled-components";

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 250px 0;
`;

const StyledCircularProgress = styled(CircularProgress)`
  width: 80px !important;
`;

function Loader() {
  return (
    <StyledLoader>
      <StyledCircularProgress />
    </StyledLoader>
  );
}

export default Loader;
