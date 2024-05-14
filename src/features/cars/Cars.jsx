import styled from "styled-components";
import { useCars } from "./useCars";
import CarItem from "./CarItem";
import { CircularProgress } from "@mui/material";

const StyledRecommendedCars = styled.section`
  margin-top: 100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
`;

function Cars() {
  const { cars, isLoading } = useCars();

  if (isLoading) return <CircularProgress />;

  return (
    <StyledRecommendedCars>
      <Grid>
        {cars.map((car) => (
          <CarItem car={car} key={car.id} />
        ))}
      </Grid>
    </StyledRecommendedCars>
  );
}

export default Cars;
