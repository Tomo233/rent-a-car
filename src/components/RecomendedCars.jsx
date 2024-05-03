import styled from "styled-components";
import Button from "./Button";
import FlexContainer from "./FlexContainer";

const StyledRecomendedCars = styled.section`
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

function RecomendedCars() {
  return (
    <StyledRecomendedCars>
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
    </StyledRecomendedCars>
  );
}

export default RecomendedCars;
