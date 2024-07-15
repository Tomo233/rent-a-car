import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookingById as deleteBookingByIdApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: deleteBookingByIdApi,
    mutationKey: ["bookings"],
    onSuccess: () => {
      toast.success("Booking successfully canceled");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (error) => {
      toast.error(`Error while canceling booking: ${error.message}`);
    },
  });
  return { deleteBooking, isDeletingBooking };
}
