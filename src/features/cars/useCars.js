import { useQuery } from "@tanstack/react-query";
import { getCars } from "../../services/apiCars";

export function useCars({ sortQuery, ascending }) {
  const {
    isLoading,
    data: cars,
    error,
  } = useQuery({
    // Similar as useEffect dependency array if param or ascending changes it will cause re-render
    queryKey: ["cars", sortQuery, ascending],
    queryFn: () => getCars({ sortQuery, ascending }),
  });
  return { cars, error, isLoading };
}
