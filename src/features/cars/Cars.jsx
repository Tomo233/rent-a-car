import styled from "styled-components";
import CarItem from "./CarItem";
import Loader from "../../components/Loader";
import { useCars } from "./useCars";

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

  if (isLoading) return <Loader />;

  return (
    <StyledRecommendedCars>
      <Grid>
        {cars?.map((car) => (
          <CarItem car={car} key={car.id} />
        ))}
      </Grid>
    </StyledRecommendedCars>
  );
}

export default Cars;
