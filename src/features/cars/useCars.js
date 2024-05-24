import { useQuery } from "@tanstack/react-query";
import { getCars } from "../../services/apiCars";

export function useCars({ param, ascending }) {
  const {
    isLoading,
    data: cars,
    error,
  } = useQuery({
    // Similar as useEffect dependency array if param or ascending changes it will cause re-render
    queryKey: ["cars", param, ascending],
    queryFn: () => getCars({ param, ascending }),
  });
  return { cars, error, isLoading };
}
