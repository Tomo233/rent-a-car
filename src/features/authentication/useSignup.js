import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/apiAuthentication";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading: isSigning } = useMutation({
    mutationFn: ({ signUpEmail, signUpPassword, userName, phone, avatar }) =>
      signUp({ signUpEmail, signUpPassword, userName, phone, avatar }),
    onSuccess: () => {
      toast.success("Account successfully created!");
    },
    onError: (error) => {
      toast.error(`Something went wrong while signing up: ${error.message}`);
    },
  });
  return { signup, isSigning };
}
