import api from "@/apis";
import { useAuthStore } from "@/stores/auth/authStore";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetCart(enabled: boolean = false) {
  const { isLoggedIn } = useAuthStore();
  return useQuery({
    queryKey: ["cart"],
    queryFn: api.cart.getCart,
    enabled,
  });
}
