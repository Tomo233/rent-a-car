import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useCarContext } from "../../context/CarContext";
import { bookCarById } from "../../services/apiCars";

export const useBookCar = function () {
  const { carId } = useParams();
  const queryClient = useQueryClient();
  const { formData } = useCarContext();
  const navigate = useNavigate();

  const { mutate: bookCar, isLoading: isBooking } = useMutation({
    mutationFn: () => bookCarById(carId, formData),
    onSuccess: () => {
      toast.success("car is successfully reserved");
      queryClient.invalidateQueries({ queryKey: ["car"] });
      navigate("/cars");
    },
    onError: (err) => toast.error(err.message),
  });

  return { bookCar, isBooking };
};
