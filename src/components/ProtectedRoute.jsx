/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useGetUser } from "../features/authentication/useGetUser";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user, isLoadingUser } = useGetUser();
  const authenticated = user?.role;

  useEffect(() => {
    if (!isLoadingUser && authenticated !== "authenticated") {
      navigate("/");
      toast.error("User is not logged in");
    }
  }, [authenticated, isLoadingUser, navigate]);

  if (isLoadingUser) return <Loader />;

  if (authenticated === "authenticated") return <>{children}</>;
}

export default ProtectedRoute;
