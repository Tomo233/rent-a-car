import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeAvatar } from "../../services/apiAuthentication";
import toast from "react-hot-toast";

export function useUpdateUserAvatar() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading } = useMutation({
    mutationKey: ["user"],
    mutationFn: (avatar) => changeAvatar(avatar),
    onSuccess: () => {
      toast.success("Avatar successfully changed");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { updateUser, isLoading };
}
