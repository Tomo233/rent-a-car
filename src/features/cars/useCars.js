import { useQuery } from "@tanstack/react-query";
import { getCars } from "../../services/apiCars";

export function useCars(sort, filters) {
  const {
    isLoading,
    data: cars,
    error,
  } = useQuery({
    // Similar as useEffect dependency array if param or ascending changes it will cause re-render
    queryKey: ["cars", sort, filters],
    queryFn: () => getCars(sort, filters),
  });
  return { cars, error, isLoading };
}
