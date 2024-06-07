import { useQuery } from "@tanstack/react-query";
import { getCars } from "../../services/apiCars";

export function useCars(sort) {
  const {
    isLoading,
    data: cars,
    error,
  } = useQuery({
    // Similar as useEffect dependency array if param or ascending changes it will cause re-render
    queryKey: ["cars", sort],
    queryFn: () => getCars(sort),
  });
  return { cars, error, isLoading };
}
