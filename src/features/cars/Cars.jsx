import styled from "styled-components";
import CarItem from "./CarItem";
import Loader from "../../components/Loader";
import { useCars } from "./useCars";

const StyledCars = styled.section`
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

  if (cars.length === 0) return <p>no cars to display</p>;

  return (
    <StyledCars>
      <Grid>
        {cars?.map((car) => (
          <CarItem car={car} key={car.id} />
        ))}
      </Grid>
    </StyledCars>
  );
}

export default Cars;
