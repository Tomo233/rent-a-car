import styled from "styled-components";
import FlexContainer from "../../components/FlexContainer";
import Span from "../../components/Span";
import Line from "../../components/Line";
import Heading from "../../components/Heading";
import { useSomeCars } from "./useSomeCars";
import { randomNum } from "../../utils/helpers";
import CarItem from "./CarItem";
import Loader from "../../components/Loader";

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
      <FlexContainer>
        {data.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </FlexContainer>
      <Line />
    </StyledRecommendedCars>
  );
}

export default RecomendedCars;
