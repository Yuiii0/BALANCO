import api from "@/apis";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetCart(enabled: boolean = false) {
  return useQuery({
    queryKey: ["cart"],
    queryFn: api.cart.getCart,
    enabled,
  });
}
