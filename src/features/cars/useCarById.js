import { useQuery } from "@tanstack/react-query";
import { getCarById } from "../../services/apiCars";
import { useParams } from "react-router-dom";

export const useCarById = function () {
  // const { carId } = useParams();
  const { isLoading, data, error } = useQuery({
    queryKey: ["car", 5],
    queryFn: () => getCarById(5),
  });

  return { data, isLoading, error };
};
