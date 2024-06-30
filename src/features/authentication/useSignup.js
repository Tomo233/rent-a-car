import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUp } from "../../services/apiAuthentication";
import toast from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();
  const { mutate: signup, isLoading: isSigning } = useMutation({
    mutationFn: ({ signUpEmail, signUpPassword, userName, phone, avatar }) =>
      signUp({ signUpEmail, signUpPassword, userName, phone, avatar }),
    onSuccess: (user) => {
      toast.success("Account successfully created!");
      queryClient.setQueryData(["user"], user.user);
    },
    onError: (error) => {
      toast.error(`Something went wrong while signing up: ${error.message}`);
    },
  });
  return { signup, isSigning };
}
