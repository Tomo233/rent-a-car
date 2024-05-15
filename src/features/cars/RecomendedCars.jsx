import styled from "styled-components";
import FlexContainer from "../../components/FlexContainer";
import Span from "../../components/Span";
import Line from "../../components/Line";
import Heading from "../../components/Heading";
import { useSomeCars } from "./useSomeCars";
import { randomNum } from "../../utils/helpers";
import { CircularProgress } from "@mui/material";
import CarItem from "./CarItem";

const StyledRecommendedCars = styled.section`
  margin-top: 100px;
`;

function RecomendedCars() {
  const fromTo = randomNum();
  const { data, isLoading, error } = useSomeCars(fromTo);
  console.log(data);

  if (isLoading) return <CircularProgress />;

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
