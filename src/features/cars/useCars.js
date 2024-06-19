import { useQuery } from "@tanstack/react-query";
import { getCars } from "../../services/apiCars";
import { useCarContext } from "../../context/CarContext";

export function useCars() {
  const { formData } = useCarContext();
  const {
    isLoading,
    data: cars,
    error,
  } = useQuery({
    queryKey: ["cars"],
    queryFn: () => getCars(formData),
  });
  return { cars, error, isLoading };
}
