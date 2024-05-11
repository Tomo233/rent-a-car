import styled from "styled-components";
import Button from "../../components/Button";
import FlexContainer from "../../components/FlexContainer";
import Span from "../../components/Span";
import Line from "../../components/Line";
import Heading from "../../components/Heading";

const StyledRecommendedCars = styled.section`
  margin-top: 100px;
`;

const CarImage = styled.img`
  width: 200px;
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
    <StyledRecommendedCars>
      <Heading as="h2">
        <Span>Recommended</Span> Cars
      </Heading>
      <FlexContainer>
        <CarItem>
          <CarImage src="/kia.png" alt="" />,
          <FlexContainer>
            <div>
              <Heading as="h3">Meredes Benz S Class</Heading>
              <p>2015 god.</p>
              <p>200KW</p>
              <p>Beograd</p>
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
          <CarImage src="/kia.png" alt="" />,
          <FlexContainer>
            <div>
              <Heading as="h3">Meredes Benz S Class</Heading>
              <p>2015 god.</p>
              <p>200KW</p>
              <p>Beograd</p>
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
          <CarImage src="/kia.png" alt="" />,
          <FlexContainer>
            <div>
              <Heading as="h3">Meredes Benz S Class</Heading>
              <p>2015 god.</p>
              <p>200KW</p>
              <p>Beograd</p>
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
      <Line />
    </StyledRecommendedCars>
  );
}

export default RecomendedCars;
