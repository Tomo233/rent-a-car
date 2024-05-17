import styled from "styled-components";
import Cars from "../features/cars/Cars";
import SortBy from "../components/SortBy";

const StyledCarsPage = styled.section`
  height: 100%;
`;

function CarsPage() {
  return (
    <StyledCarsPage>
      <SortBy />
      <Cars />
    </StyledCarsPage>
  );
}

export default CarsPage;
