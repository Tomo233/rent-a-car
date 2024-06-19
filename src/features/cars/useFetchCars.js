import { useQuery } from "@tanstack/react-query";
import { fetchCars } from "../../services/apiCars";
import { useCarContext } from "../../context/CarContext";

export function useFetchCars() {
  const { formData } = useCarContext();
  const {
    isLoading,
    data: fetchedCars,
    error,
  } = useQuery({
    queryKey: ["fetchedCars"],
    queryFn: () => fetchCars(formData),
  });
  return { fetchedCars, error, isLoading };
}
