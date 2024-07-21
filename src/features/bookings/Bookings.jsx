import Loader from "../../components/Loader";
import ResponsiveGrid from "../../components/ResponsiveGrid";
import BookingItem from "./BookingItem";
import { useBookings } from "./useBookings";

function Bookings() {
  const { data, isLoading } = useBookings();
  if (isLoading) return <Loader />;

  if (data.length === 0) return <p>no bookings to display</p>;

  return (
    <ResponsiveGrid gap="50px" columns="3">
      {data?.map((item) => (
        <BookingItem
          car={item.cars}
          key={item.id}
          isBooked={true}
          booking={item}
        />
      ))}
    </ResponsiveGrid>
  );
}

export default Bookings;
