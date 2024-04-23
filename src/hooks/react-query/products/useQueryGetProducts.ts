import api from "@/apis";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetProducts(enabled: boolean = true) {
  return useQuery({
    queryKey: ["products"],
    queryFn: api.products.getProducts,
    enabled,
  });
}
