/* eslint-disable react/prop-types */
import styled from "styled-components";
import FlexContainer from "../../components/FlexContainer";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import { useDeleteBooking } from "../bookings/useDeleteBooking";
import { useEffect } from "react";
import toast from "react-hot-toast";

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
  padding: 25px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
`;

function CarItem({ car, booking = {} }) {
  const { id, image, name, horsepower, model, price, year, location } = car;
  const { id: bookingId, startDate, startTime, endDate, endTime } = booking;
  const { deleteBooking, isDeletingBooking } = useDeleteBooking();
  const navigate = useNavigate();

  // const today = new Date();
  // const isBeforeToday = new Date(startDate) > today;

  const handleCancelBooking = () => {
    const today = new Date();
    const startDateTime = new Date(`${startDate} ${startTime}`);
    const isBeforeToday = startDateTime > today;

    if (isBeforeToday) deleteBooking(bookingId);
    else {
      toast.error("Booking has started");
    }
  };

  if (isDeletingBooking) return <Loader />;

  return (
    <div>
      <Car>
        <CarImage src={image} alt="" />
        <FlexContainer gap="0">
          <div>
            <Heading as="h3" $notaligned={true}>
              {name} {model}
            </Heading>
            <p>{year} god.</p>
            <p>{horsepower} horsepower</p>
            <p>{location}</p>
          </div>

          {Object.keys(booking).length > 0 ? (
            <Button
              type="short"
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              More Info
            </Button>
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
        <CancelButton onClick={handleCancelBooking}>
          Cancel Booking
        </CancelButton>
      </FlexCenter>
    </div>
  );
}

export default CarItem;
