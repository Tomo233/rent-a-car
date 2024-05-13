import FlexContainer from "../../components/FlexContainer";
import styled from "styled-components";
import { useCars } from "./useCars";
import CarItem from "./CarItem";
import { CircularProgress } from "@mui/material";

const StyledRecommendedCars = styled.section`
  margin-top: 100px;
`;

function Cars() {
  const { cars, isLoading } = useCars();

  if (isLoading) return <CircularProgress />;

  return (
    <StyledRecommendedCars>
      <FlexContainer>
        {cars.map((car) => (
          <CarItem car={car} key={car.id} />
        ))}
      </FlexContainer>
    </StyledRecommendedCars>
  );
}

export default Cars;
