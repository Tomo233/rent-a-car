import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Flex from "./Flex";

const StyledH = styled.h1`
  margin-bottom: 30px;
`;

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <Flex justify="center" gap="30px">
      <div>
        <StyledH>Page not found</StyledH>
        <Button onClick={() => navigate(-1)}>Go back</Button>
      </div>
    </Flex>
  );
}

export default PageNotFound;
