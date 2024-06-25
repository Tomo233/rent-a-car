import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuthentication";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      toast.success("User is successfully logged in");
      queryClient.setQueryData(["user"], user.user);
    },
    onError: (error) => {
      console.error("Login error:", error);
      toast.error("User cannot be logged in");
    },
  });

  return { login, isLoading };
}
