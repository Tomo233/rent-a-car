import CarGrid from "../../components/CarGrid";
import Loader from "../../components/Loader";
import CarItem from "../cars/CarItem";
import { useReservations } from "./useReservations";

function Bookings() {
  const { data, isLoading } = useReservations();
  if (isLoading) return <Loader />;

  console.log(data);
  return (
    <CarGrid>
      {data.map((item) => (
        <CarItem car={item.cars} key={item.id} />
      ))}
    </CarGrid>
  );
}

export default Bookings;
