import styled from "styled-components";
import Line from "../../components/Line";

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
  return (
    <StyledCar>
      <CarFlex>
        <div>
          <img src="/kia.png" alt="" />
        </div>
        <CarInfo>
          <div>
            <StyledHeading>Mercedes Benz S Class</StyledHeading>
            <ul>
              <StyledListItem>+387 66 357 126</StyledListItem>
              <StyledListItem>rental@gmail.com</StyledListItem>
              <StyledListItem>Lokacija : Beograd</StyledListItem>
            </ul>
          </div>
        </CarInfo>
      </CarFlex>
      <Line />
      <CarInfo>
        <StyledHeading>Opste informacije</StyledHeading>
        <ul>
          <StyledListItem>Car: Mercedes</StyledListItem>
          <StyledListItem>Car Model: S Class</StyledListItem>
          <StyledListItem>Engine: 2.0L 4-cylinder</StyledListItem>
          <StyledListItem>Horse Power: 234</StyledListItem>
          <StyledListItem>Model Year: 2018</StyledListItem>
          <StyledListItem>Mileage: 18000</StyledListItem>
        </ul>
      </CarInfo>
      <Line />
      <CarInfo>
        <StyledHeading>Dodatne informacije</StyledHeading>
        <ul>
          <StyledListItem>Autopilot</StyledListItem>
          <StyledListItem>Premium Interior</StyledListItem>
          <StyledListItem>Panoramic Roof</StyledListItem>
        </ul>
      </CarInfo>
    </StyledCar>
  );
}

export default Car;
