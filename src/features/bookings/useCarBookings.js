import { useQuery } from "@tanstack/react-query";
import { getCarBookings } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useCarBookings() {
  const { carId } = useParams();
  return useQuery({
    queryKey: ["carReservations", carId],
    queryFn: () => getCarBookings(carId),
    enabled: !!carId,
  });
}
