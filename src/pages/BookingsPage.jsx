import styled from "styled-components";
import Bookings from "../features/bookings/Bookings";

const Margin = styled.div`
  margin-top: 65px;
`;

function BookingsPage() {
  return (
    <>
      <Margin>
        <Bookings />
      </Margin>
    </>
  );
}

export default BookingsPage;
