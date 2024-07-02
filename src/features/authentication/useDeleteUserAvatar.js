import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAvatar as deleteAvatarApi } from "../../services/apiAuthentication";
import toast from "react-hot-toast";

export function useDeleteUserAvatar() {
  const queryClient = useQueryClient();
  const { mutate: deleteAvatar, isLoading: isDeleting } = useMutation({
    mutationFn: deleteAvatarApi,
    mutationKey: ["user"],
    onSuccess: () => {
      toast.success("Avatar successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => {
      toast.error(`Error while deleting avatar ${err.message}`);
    },
  });

  return { deleteAvatar, isDeleting };
}
