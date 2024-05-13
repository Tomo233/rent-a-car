import styled from "styled-components";
import Cars from "../features/cars/Cars";

const StyledCarsPage = styled.section`
  height: 100%;
`;

function CarsPage() {
  return (
    <StyledCarsPage>
      <Cars />
    </StyledCarsPage>
  );
}

export default CarsPage;
