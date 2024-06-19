import styled from "styled-components";
import { useCars } from "./useCars";
import CarItem from "./CarItem";
import Loader from "../../components/Loader";
import { useFetchCars } from "./useFetchCars";

const StyledRecommendedCars = styled.section`
  margin-top: 100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
`;

function Cars() {
  // const { cars, isLoading } = useCars();
  const { fetchedCars, isLoading } = useFetchCars();

  if (isLoading) return <Loader />;

  // if (!cars) return <p>no cars</p>;

  console.log(fetchedCars);

  return (
    <StyledRecommendedCars>
      <Grid>
        {fetchedCars?.map((car) => (
          <CarItem car={car} key={car.id} />
        ))}
      </Grid>
    </StyledRecommendedCars>
  );
}

export default Cars;
