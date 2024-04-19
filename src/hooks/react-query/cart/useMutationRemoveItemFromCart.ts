import api from "@/apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationRemoveItemFromCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: api.cart.removeItemFromCart,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["cart"] }),
  });
}
