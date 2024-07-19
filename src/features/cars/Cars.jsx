import styled from "styled-components";
import CarItem from "./CarItem";
import Loader from "../../components/Loader";
import { useCars } from "./useCars";
import Grid from "../../components/Grid";

const StyledCars = styled.section`
  margin-top: 100px;
`;

function Cars() {
  const { cars, isLoading } = useCars();

  if (isLoading) return <Loader />;

  if (cars.length === 0) return <p>no cars to display</p>;

  return (
    <StyledCars>
      <Grid gap="50px" columns="3">
        {cars?.map((car) => (
          <CarItem car={car} key={car.id} />
        ))}
      </Grid>
    </StyledCars>
  );
}

export default Cars;
