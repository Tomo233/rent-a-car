import styled from "styled-components";
import { useCars } from "./useCars";
import CarItem from "./CarItem";
import Loader from "../../components/Loader";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

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

  useEffect(() => {
    console.log(searchParams.getAll("filters"));
  }, [searchParams]);

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
