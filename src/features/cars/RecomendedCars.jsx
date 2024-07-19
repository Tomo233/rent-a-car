import styled from "styled-components";
import Span from "../../components/Span";
import Line from "../../components/Line";
import Heading from "../../components/Heading";
import { useSomeCars } from "./useSomeCars";
import { randomNum } from "../../utils/helpers";
import Loader from "../../components/Loader";
import CarDetails from "./CarDetails";
import Flex from "../../components/Flex";

const StyledRecommendedCars = styled.section`
  margin-top: 100px;
`;

function RecomendedCars() {
  const fromTo = randomNum();
  const { data, isLoading, error } = useSomeCars(fromTo);

  if (isLoading) return <Loader />;

  if (error) console.log(error);

  return (
    <StyledRecommendedCars>
      <Heading as="h2">
        <Span>Recommended</Span> Cars
      </Heading>
      <Flex>
        {data.map((car) => (
          <CarDetails key={car.id} car={car} />
        ))}
      </Flex>
      <Line />
    </StyledRecommendedCars>
  );
}

export default RecomendedCars;
