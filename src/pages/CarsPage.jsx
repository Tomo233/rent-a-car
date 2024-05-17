import styled from "styled-components";
import Cars from "../features/cars/Cars";
import CarOperations from "../features/cars/CarOperations";

const StyledCarsPage = styled.section`
  height: 100%;
`;

function CarsPage() {
  return (
    <StyledCarsPage>
      <CarOperations />
      <Cars />
    </StyledCarsPage>
  );
}

export default CarsPage;
