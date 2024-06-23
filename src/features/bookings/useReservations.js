import { useQuery } from "@tanstack/react-query";
import { getReservations } from "../../services/apiReservations";

export function useReservations() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["reservations"],
    queryFn: getReservations,
  });

  return { data, isLoading, error };
}
