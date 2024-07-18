import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookingById as deleteBookingByIdApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isPending: isDeletingBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingByIdApi(bookingId),
    onSuccess: () => {
      toast.success("Booking successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (error) => {
      toast.error(`Error while deleting booking: ${error.message}`);
    },
  });

  return { deleteBooking, isDeletingBooking };
}
