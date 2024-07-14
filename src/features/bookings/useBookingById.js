import { useQuery } from "@tanstack/react-query";
import { getBookingById } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBookingById() {
  const { bookingId } = useParams();
  const { data: booking, isLoading: isLoadingBooking } = useQuery({
    queryFn: () => getBookingById(bookingId),
    queryKey: ["booking", bookingId],
  });

  return { booking, isLoadingBooking };
}
