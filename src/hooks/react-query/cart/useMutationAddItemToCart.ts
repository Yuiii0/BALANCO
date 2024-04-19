import api from "@/apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationAddItemToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: api.cart.addItemToCart,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["cart"] }),
  });
}
