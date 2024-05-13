import { useQuery } from "@tanstack/react-query";
import { GetCars } from "../../services/apiCars";

export function useCars() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["cars"],
    queryFn: GetCars,
  });

  return { isLoading, data, error };
}
