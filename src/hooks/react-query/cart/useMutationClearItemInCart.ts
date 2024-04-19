import api from "@/apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationClearItemInCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: api.cart.clearItemInCart,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["cart"] }),
  });
}
