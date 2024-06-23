import styled from "styled-components";
import Bookings from "../features/bookings/Bookings";
import BookingsOperations from "../features/bookings/BookingsOperations";

const Margin = styled.div`
  margin-top: 25px;
`;

function BookingsPage() {
  return (
    <>
      <Margin>
        <BookingsOperations />
      </Margin>
      <Margin>
        <Bookings />
      </Margin>
    </>
  );
}

export default BookingsPage;
