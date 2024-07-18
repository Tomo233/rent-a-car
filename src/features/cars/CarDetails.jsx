/* eslint-disable react/prop-types */
import styled from "styled-components";
import Heading from "../../components/Heading";
import FlexContainer from "../../components/FlexContainer";

const CarImage = styled.img`
  width: 200px;
  display: block;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const Car = styled.div`
  border: 2px solid var(--color-border-gray);
  padding: 20px;
  width: 400px;
  height: 300px;
`;

function CarDetails({ car, children }) {
  const { image, name, horsepower, model, year, location } = car;

  return (
    <Car>
      <CarImage src={image} alt="" />
      <FlexContainer>
        <div>
          <Heading as="h3" $notaligned={true}>
            {name} {model}
          </Heading>
          <p>{year} god.</p>
          <p>{horsepower} horsepower</p>
          <p>{location}</p>
        </div>
        {children}
      </FlexContainer>
    </Car>
  );
}

export default CarDetails;
