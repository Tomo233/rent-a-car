/* eslint-disable react/prop-types */
import styled from "styled-components";
import FlexContainer from "../../components/FlexContainer";
import Heading from "../../components/Heading";
import Button from "../../components/Button";

const CarImageParent = styled.div`
  margin-bottom: 50px;
`;
const CarImage = styled.img`
  width: 200px;
  display: block;
  margin: 0 auto;
`;

const Car = styled.div`
  border: 2px solid var(--color-primary-gray);
  padding: 20px;
  width: 400px;
  height: 300px;
`;

function CarItem({ car }) {
  const {
    image,
    name,
    horsepower,
    // features,
    // engine,
    model,
    price,
    year,
    location,
  } = car;

  return (
    <Car>
      <CarImageParent>
        <CarImage src={image} alt="" />
      </CarImageParent>
      <FlexContainer>
        <div>
          <Heading as="h3" notAligned={true}>
            {name} {model}
          </Heading>
          <p>{year} god.</p>
          <p>{horsepower} horsepower</p>
          <p>{location}</p>
        </div>
        <Button type="short">{price}$/Dan</Button>
      </FlexContainer>
    </Car>
  );
}

export default CarItem;
