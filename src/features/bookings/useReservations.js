import { useQuery } from "@tanstack/react-query";
import { getReservations } from "../../services/apiReservations";
import { useGetUser } from "../authentication/useGetUser";

export function useReservations() {
  const { user } = useGetUser();
  const userId = user?.id;
  const { data, isLoading, error } = useQuery({
    queryKey: ["reservations"],
    queryFn: () => getReservations(userId),
  });

  return { data, isLoading, error };
}
