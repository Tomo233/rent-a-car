import CarGrid from "../../components/CarGrid";
import Loader from "../../components/Loader";
import CarItem from "../cars/CarItem";
import { useBookings } from "./useBookings";

function Bookings() {
  const { data, isLoading } = useBookings();
  if (isLoading) return <Loader />;

  if (data.length === 0) return <p>no bookings to display</p>;

  return (
    <CarGrid>
      {data?.map((item) => (
        <CarItem car={item.cars} key={item.id} isBooked={true} booking={item} />
      ))}
    </CarGrid>
  );
}

export default Bookings;
