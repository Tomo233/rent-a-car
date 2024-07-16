/* eslint-disable react/prop-types */
import styled from "styled-components";
import FlexContainer from "../../components/FlexContainer";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import { useDeleteBooking } from "../bookings/useDeleteBooking";
import { useEffect } from "react";

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

function CarItem({ car, booking = {} }) {
  const { id, image, name, horsepower, model, price, year, location } = car;
  const { id: bookingId, startDate, endDate, endTime } = booking;
  const { deleteBooking, isDeletingBooking } = useDeleteBooking();

  const navigate = useNavigate();

  const today = new Date();
  const isBeforeToday = new Date(startDate) > today;

  useEffect(() => {
    // Calculate the current date
    const today = new Date();

    // Calculate the booking end date and time
    const bookingEndTime = new Date(`${endDate} ${endTime}`);

    // Check if booking has expired
    if (bookingEndTime < today) {
      deleteBooking(bookingId);
    }
  }, [deleteBooking, bookingId, endDate, endTime]);

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

      {Object.keys(booking).length > 0 && isBeforeToday && (
        <FlexCenter>
          <CancelButton
            onClick={() => deleteBooking(bookingId)}
            disabled={isDeletingBooking}
          >
            {isDeletingBooking ? "Canceling..." : "Cancel Booking"}
          </CancelButton>
        </FlexCenter>
      )}
    </div>
  );
}

export default CarItem;
