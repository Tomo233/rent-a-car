import { useQuery } from "@tanstack/react-query";
import { getSomeCars } from "../../services/apiCars";

export function useSomeCars(fromTo) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["someCars"],
    queryFn: () => getSomeCars(fromTo),
  });
  return { data, error, isLoading };
}
