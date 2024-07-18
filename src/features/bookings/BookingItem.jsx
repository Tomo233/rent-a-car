/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Button from "../../components/Button";
import CarDetails from "../cars/CarDetails";
import Loader from "../../components/Loader";
import FlexContainer from "../../components/FlexContainer";
import BasicModal from "../../components/BasicModal";
import { useDeleteBooking } from "./useDeleteBooking";
import Heading from "../../components/Heading";

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

const ModalContent = styled.div`
  background-color: white;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  input {
    width: 300px;
    height: 45px;
    text-align: center;
  }
  button {
    height: 50px;
    display: flex;
    align-items: center;
  }
`;

function BookingItem({ car, booking }) {
  const { id: bookingId, startDate, endDate, startTime } = booking;
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

  const button = <CancelButton>Cancel Booking</CancelButton>;
  const closeButton = <Button type="short">Go Back</Button>;

  return (
    <div>
      <FlexContainer>
        <p>{startDate}</p>
        <p>{endDate}</p>
      </FlexContainer>
      <CarDetails car={car}>
        <Button type="short" onClick={() => navigate(`/bookings/${bookingId}`)}>
          More Info
        </Button>
      </CarDetails>
      <FlexCenter>
        <BasicModal button={button} closeButton={closeButton}>
          <ModalContent>
            <Heading as="h3">Cancel Booking</Heading>
            <p>Are you sure you want to cancel this booking?</p>
            <FlexContainer>
              <CancelButton onClick={handleCancelBooking}>
                Yes,Cancel
              </CancelButton>
            </FlexContainer>
          </ModalContent>
        </BasicModal>
      </FlexCenter>
    </div>
  );
}

export default BookingItem;
