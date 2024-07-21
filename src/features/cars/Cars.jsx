import styled from "styled-components";
import CarItem from "./CarItem";
import Loader from "../../components/Loader";
import { useCars } from "./useCars";
import Grid from "../../components/Grid";

const StyledCars = styled.section`
  margin-top: 100px;
`;

const ResponsiveGrid = styled(Grid)`
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
function Cars() {
  const { cars, isLoading } = useCars();

  if (isLoading) return <Loader />;

  if (cars.length === 0) return <p>no cars to display</p>;

  return (
    <StyledCars>
      <ResponsiveGrid gap="50px" columns="3">
        {cars?.map((car) => (
          <CarItem car={car} key={car.id} />
        ))}
      </ResponsiveGrid>
    </StyledCars>
  );
}

export default Cars;
