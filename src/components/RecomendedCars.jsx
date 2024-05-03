import styled from "styled-components";
import Button from "./Button";
import FlexContainer from "./FlexContainer";
import Span from "./Span";

const StyledRecommendedCars = styled.section`
  margin-top: 100px;
  margin-bottom: 300px;
`;

const StyledCar = styled.img`
  width: 200px;
`;

const CarName = styled.h3`
  color: black;
  font-size: 20px;
`;

const CarDescription = styled.p`
  color: black;
  font-weight: 700;
`;

const CarItem = styled.div`
  border: 2px solid var(--color-primary-gray);
  padding: 20px;
`;

const Stars = styled.div`
  margin-top: 5px;
`;

const CarTitle = styled.h2`
  color: black;
  font-size: 45px;
  text-align: center;
  margin-bottom: 50px;
`;

function RecomendedCars() {
  return (
    <StyledRecommendedCars>
      <CarTitle>
        <Span>Recommended</Span> Cars
      </CarTitle>
      <FlexContainer>
        <CarItem>
          <StyledCar src="/kia.png" alt="" />,
          <FlexContainer>
            <div>
              <CarName>Meredes Benz S Class</CarName>
              <CarDescription>2015 god.</CarDescription>
              <CarDescription>200KW</CarDescription>
              <CarDescription>Beograd</CarDescription>
            </div>
            <Button type="short">50$/Dan</Button>
          </FlexContainer>
          <Stars>
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
          </Stars>
        </CarItem>
        <CarItem>
          <StyledCar src="/kia.png" alt="" />,
          <FlexContainer>
            <div>
              <CarName>Meredes Benz S Class</CarName>
              <CarDescription>2015 god.</CarDescription>
              <CarDescription>200KW</CarDescription>
              <CarDescription>Beograd</CarDescription>
            </div>
            <Button type="short">50$/Dan</Button>
          </FlexContainer>
          <Stars>
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
          </Stars>
        </CarItem>
        <CarItem>
          <StyledCar src="/kia.png" alt="" />,
          <FlexContainer>
            <div>
              <CarName>Meredes Benz S Class</CarName>
              <CarDescription>2015 god.</CarDescription>
              <CarDescription>200KW</CarDescription>
              <CarDescription>Beograd</CarDescription>
            </div>
            <Button type="short">50$/Dan</Button>
          </FlexContainer>
          <Stars>
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
          </Stars>
        </CarItem>
      </FlexContainer>
    </StyledRecommendedCars>
  );
}

export default RecomendedCars;
