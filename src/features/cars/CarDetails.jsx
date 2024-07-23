/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import Heading from "../../components/Heading";
import Flex from "../../components/Flex";

const Car = styled.div`
  border: 2px solid var(--color-border-gray);
  padding: 20px;
  width: 400px;
  height: 330px;

  ${(props) =>
    props.$isRecommended
      ? css`
          @media (max-width: 1500px) {
            width: 350px;
          }
          @media (max-width: 1325px) {
            width: 600px;
          }
          @media (max-width: 992px) {
            width: 600px;
          }
        `
      : css`
          @media (max-width: 1500px) {
            width: 330px;
          }
          @media (max-width: 1200px) {
            width: 450px;
          }
          @media (max-width: 992px) {
            width: 500px;
          }
          @media (max-width: 600px) {
            width: 400px;
          }
          @media (max-width: 480px) {
            width: 300px;
            height: 350px;
          }
          @media (max-width: 320px) {
            width: 250px;
            height: 350px;
          }
        `}
`;

const CarImage = styled.img`
  width: 200px;
  display: block;
  margin: 0 auto;
  margin-bottom: 50px;
`;

function CarDetails({ car, children, $isRecommended = false }) {
  const { image, name, horsepower, model, year, location } = car;

  return (
    <Car $isRecommended={$isRecommended}>
      <CarImage src={image} alt="" />
      <Flex>
        <div>
          <Heading as="h3" $notaligned={true}>
            {name} {model}
          </Heading>
          <p>{year} god.</p>
          <p>{horsepower} horsepower</p>
          <p>{location}</p>
        </div>
        {children}
      </Flex>
    </Car>
  );
}

export default CarDetails;
