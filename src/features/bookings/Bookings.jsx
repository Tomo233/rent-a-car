import CarGrid from "../../components/CarGrid";
import Loader from "../../components/Loader";
import BookingItem from "./BookingItem";
import { useBookings } from "./useBookings";

function Bookings() {
  const { data, isLoading } = useBookings();
  if (isLoading) return <Loader />;

  if (data.length === 0) return <p>no bookings to display</p>;

  return (
    <CarGrid>
      {data?.map((item) => (
        <BookingItem
          car={item.cars}
          key={item.id}
          isBooked={true}
          booking={item}
        />
      ))}
    </CarGrid>
  );
}

export default Bookings;
