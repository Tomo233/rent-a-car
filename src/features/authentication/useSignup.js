import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/apiAuthentication";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: (data) => signUp(data),
    onSuccess: () => {
      toast.success("Account successfully created!");
    },
  });
  return { signup, isLoading };
}
