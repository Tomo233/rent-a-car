/* eslint-disable react/prop-types */
import styled from "styled-components";
import FlexContainer from "../../components/FlexContainer";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

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

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const CancelButton = styled.button`
  background-color: #fa3c3c;
  border: none;
  height: 50px;
  color: #fff;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

function CarItem({ car, booking = [] }) {
  const { id, image, name, horsepower, model, price, year, location } = car;
  const { startDate, endDate, startTime, endTime } = booking;
  const navigate = useNavigate();
  return (
    <div>
      {booking && (
        <>
          <FlexContainer>
            <p>{startDate}</p>
            <span>-</span>
            <p>{endDate}</p>
          </FlexContainer>
          <FlexContainer>
            <p>{startTime}</p>
            <span>-</span>
            <p>{endTime}</p>
          </FlexContainer>
        </>
      )}
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

          {booking.length > 0 ? (
            <Button type="short">More Info</Button>
          ) : (
            <Button
              type="short"
              onClick={() => {
                navigate(`/cars/${id}`);
              }}
            >
              {price}$/Dan
            </Button>
          )}
        </FlexContainer>
      </Car>

      <FlexCenter>
        <CancelButton>Cancel Booking</CancelButton>
      </FlexCenter>
    </div>
  );
}

export default CarItem;
