import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuthentication";
import toast from "react-hot-toast";

export function useLogout() {
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("User is successfully logged out");
      queryClient.removeQueries();
    },
  });
  return { logout, isLoading };
}
