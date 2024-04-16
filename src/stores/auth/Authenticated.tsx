import api from "@/apis";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAuthStore } from "./authStore";

function Authenticated({ children }: { children: React.ReactNode }) {
  const { isAuthInitialized, setIsAuthInitialized, setIsLoggedIn } =
    useAuthStore();

  const { data: isAccessTokenRefreshed, isFetched } = useQuery({
    queryKey: ["authentication"],
    queryFn: api.auth.refreshToken,
    refetchInterval: 1000 * 60 * 19,
    staleTime: 1000 * 60 * 20,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (isFetched) {
      setIsAuthInitialized(true);
    }
  }, [isFetched, setIsAuthInitialized]);

  useEffect(() => {
    if (isAccessTokenRefreshed) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isAccessTokenRefreshed, setIsLoggedIn]);

  if (!isAuthInitialized) return null;

  return children;
}

export default Authenticated;
