import styled from "styled-components";
import Line from "../../components/Line";
import SearchForm from "../../components/SearchForm";
import { useCarsById } from "../useCarsById";
import Loader from "../../components/Loader";

const StyledCar = styled.div`
  margin-top: 50px;
`;

const StyledHeading = styled.h3`
  font-size: 28px;
  margin-bottom: 10px;
  letter-spacing: 2px;
  font-weight: 500;
`;

const CarFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const CarInfo = styled.div`
  margin-top: 15px;
`;

const StyledListItem = styled.li`
  font-size: 19px;
  color: var(--color-primary-gray);
  padding-bottom: 20px;
`;

function Car() {
  const { data, isLoading } = useCarsById();

  if (isLoading) return <Loader />;

  const {
    image,
    name,
    horsepower,
    features,
    engine,
    model,
    price,
    mileage,
    year,
    location,
    transmission,
    fuelType,
  } = data;

  console.log(data);
  return (
    <StyledCar>
      <CarFlex>
        <div>
          <img src={image} alt={name} width="700px" />
        </div>
        <CarInfo>
          <div>
            <StyledHeading>
              {name} {model}
            </StyledHeading>
            <ul>
              <StyledListItem>+387 66 357 126</StyledListItem>
              <StyledListItem>rental@gmail.com</StyledListItem>
              <StyledListItem>Lokacija : {location}</StyledListItem>
              <StyledListItem>Price : {price}$</StyledListItem>
            </ul>
          </div>
        </CarInfo>
      </CarFlex>
      <SearchForm />
      <Line />
      <CarInfo>
        <StyledHeading>Opste informacije</StyledHeading>
        <ul>
          <StyledListItem>Car: {name}</StyledListItem>
          <StyledListItem>Car Model: {model}</StyledListItem>
          <StyledListItem>Engine: {engine}</StyledListItem>
          <StyledListItem>Horse Power: {horsepower}</StyledListItem>
          <StyledListItem>Transmission: {transmission}</StyledListItem>
          <StyledListItem>FuelType: {fuelType}</StyledListItem>
          <StyledListItem>Model Year: {year}</StyledListItem>
          <StyledListItem>Mileage: {mileage}</StyledListItem>
        </ul>
      </CarInfo>
      <Line />
      <CarInfo>
        <StyledHeading>Dodatne informacije</StyledHeading>
        <ul>
          {features.map((f) => (
            <StyledListItem key={f}>{f}</StyledListItem>
          ))}
        </ul>
      </CarInfo>
    </StyledCar>
  );
}

export default Car;
