import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const StyledPageNotFound = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20%;
  gap: 30px;
`;

const StyledH = styled.h1`
  margin-bottom: 30px;
`;

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <StyledPageNotFound>
      <div>
        <StyledH>Page not found</StyledH>
        <Button onClick={() => navigate(-1)}>Go back</Button>
      </div>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
