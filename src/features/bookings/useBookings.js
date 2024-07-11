import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useGetUser } from "../authentication/useGetUser";

export function useBookings() {
  const { user } = useGetUser();
  const userId = user?.id;
  const { data, isLoading, error } = useQuery({
    queryKey: ["reservations"],
    queryFn: () => getBookings(userId),
  });

  return { data, isLoading, error };
}
