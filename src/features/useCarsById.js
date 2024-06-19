import { useQuery } from "@tanstack/react-query";
import { getCarById } from "../services/apiCars";
import { useParams } from "react-router-dom";

export const useCarsById = function () {
  const { carId } = useParams();
  const { isLoading, data, error } = useQuery({
    queryKey: ["car"],
    queryFn: () => getCarById(carId),
  });

  return { data, isLoading, error };
};
