import api from "@/apis";
import { useQueries } from "@tanstack/react-query";

export default function useQueryGetLikedProducts(productIds: number[]) {
  return useQueries({
    queries: productIds.map((productId) => ({
      queryKey: ["product", { productId }],
      queryFn: () => api.products.getProduct(productId),
      enabled: !!productId,
    })),
  });
}
