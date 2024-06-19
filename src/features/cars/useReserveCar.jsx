import { useMutation, useQueryClient } from "@tanstack/react-query";
import { reserveCarById } from "../../services/apiCars";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useCarContext } from "../../context/CarContext";

export const useReserveCar = function () {
  const { carId } = useParams();
  const queryClient = useQueryClient();
  const { formData } = useCarContext();
  const navigate = useNavigate();

  const { mutate: reserveCar, isLoading: isReserving } = useMutation({
    mutationFn: () => reserveCarById(carId, formData),
    onSuccess: () => {
      toast.success("car is successfully reserved");
      queryClient.invalidateQueries({ queryKey: ["car"] });
      navigate("/cars");
    },
    onError: (err) => toast.error(err.message),
  });

  return { reserveCar, isReserving };
};
