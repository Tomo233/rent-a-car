import styled from "styled-components";
import Line from "../../components/Line";
import Loader from "../../components/Loader";
import Map from "../../components/Map";
import FlexContainer from "../../components/FlexContainer";
import Button from "../../components/Button";
import { useCarById } from "./useCarById";
import { useBookCar } from "./useBookCar";

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
  const { data, isLoading } = useCarById();
  const { bookCar, isBooking } = useBookCar();

  if (isLoading || isBooking) return <Loader />;

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
    lat,
    lng,
  } = data;

  const handleReserve = () => {
    bookCar();
  };

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
              <StyledListItem>
                <CarFlex>
                  <span>Price :</span>
                  <Button type="reserveButton" onClick={handleReserve}>
                    {price}$
                  </Button>
                </CarFlex>
              </StyledListItem>
            </ul>
          </div>
        </CarInfo>
      </CarFlex>
      <Line />
      <CarInfo>
        <FlexContainer>
          <div>
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
          </div>
          <Map lat={lat} lng={lng} />
        </FlexContainer>
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
