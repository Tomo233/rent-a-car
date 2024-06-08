import styled from "styled-components";
import { useCars } from "./useCars";
import CarItem from "./CarItem";
import Loader from "../../components/Loader";
import { useSearchParams } from "react-router-dom";

const StyledRecommendedCars = styled.section`
  margin-top: 100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
`;

function Cars() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort")?.split("-");
  console.log(searchParams.get("filters"));

  const { cars, isLoading } = useCars(sort);

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
