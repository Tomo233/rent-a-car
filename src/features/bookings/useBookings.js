import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useUser } from "../authentication/useUser";

export function useBookings() {
  const { user } = useUser();
  const userId = user?.id;
  const { data, isLoading, error } = useQuery({
    queryKey: ["reservations"],
    queryFn: () => getBookings(userId),
  });

  return { data, isLoading, error };
}
