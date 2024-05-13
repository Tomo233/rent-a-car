import { useQuery } from "@tanstack/react-query";
import { getCars } from "../../services/apiCars";

export function useCars() {
  const {
    isLoading,
    data: cars,
    error,
  } = useQuery({
    queryKey: ["cars"],
    queryFn: getCars,
  });
  return { cars, error, isLoading };
}
