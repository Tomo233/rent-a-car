import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuthentication";

export function useUser() {
  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return { user, isLoadingUser };
}
