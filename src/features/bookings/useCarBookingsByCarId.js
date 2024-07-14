import { useQuery } from "@tanstack/react-query";
import { getCarBookings } from "../../services/apiBookings";

export function useCarBookingsByCarId(carId) {
  const { data: carBookings, isLoading: isLoadingCarBookings } = useQuery({
    queryKey: ["carBookings", carId],
    queryFn: () => getCarBookings(carId),
  });
  return { carBookings, isLoadingCarBookings };
}
