import { useQuery } from "@tanstack/react-query";
import { getCarById } from "../../services/apiCars";
import { useParams } from "react-router-dom";

export const useCarById = function () {
  const { carId } = useParams();
  const { isLoading, data, error } = useQuery({
    queryKey: ["car", carId],
    queryFn: () => getCarById(carId),
  });

  return { data, isLoading, error };
};
