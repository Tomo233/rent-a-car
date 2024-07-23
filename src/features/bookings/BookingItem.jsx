/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Button from "../../components/Button";
import CarDetails from "../cars/CarDetails";
import Loader from "../../components/Loader";
import Flex from "../../components/Flex";
import BasicModal from "../../components/BasicModal";
import { useDeleteBooking } from "./useDeleteBooking";
import Heading from "../../components/Heading";

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
  const { deleteBooking, isDeletingBooking } = useDeleteBooking(
    "Booking is successfully canceled"
  );
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
      <Flex>
        <p>{startDate}</p>
        <p>{endDate}</p>
      </Flex>
      <CarDetails car={car}>
        <Button type="short" onClick={() => navigate(`/bookings/${bookingId}`)}>
          More Info
        </Button>
      </CarDetails>

      <Flex $justify="center" style={{ marginTop: "15px" }}>
        <BasicModal button={button} closeButton={closeButton}>
          <ModalContent>
            <Flex $gap="30px" $justify="center" $direction="column">
              <Heading as="h3">Cancel Booking</Heading>
              <p>Are you sure you want to cancel this booking?</p>
              <Flex>
                <CancelButton onClick={handleCancelBooking}>
                  Yes,Cancel
                </CancelButton>
              </Flex>
            </Flex>
          </ModalContent>
        </BasicModal>
      </Flex>
    </div>
  );
}

export default BookingItem;
