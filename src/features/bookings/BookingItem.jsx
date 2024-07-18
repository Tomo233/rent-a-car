/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import CarDetails from "../cars/CarDetails";
import { useDeleteBooking } from "./useDeleteBooking";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";
import styled from "styled-components";

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

function BookingItem({ car, booking }) {
  const { id: bookingId, startDate, startTime } = booking;
  const { deleteBooking, isDeletingBooking } = useDeleteBooking();
  const navigate = useNavigate();

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
      <CarDetails car={car}>
        <Button type="short" onClick={() => navigate(`/bookings/${bookingId}`)}>
          More Info
        </Button>
      </CarDetails>
      <FlexCenter>
        <CancelButton onClick={handleCancelBooking}>
          Cancel Booking
        </CancelButton>
      </FlexCenter>
    </div>
  );
}

export default BookingItem;
