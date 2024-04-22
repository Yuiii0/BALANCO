import api from "@/apis";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetBrand(brandId: number) {
  return useQuery({
    queryKey: ["brands", { brandId }],
    queryFn: () => api.brands.getBrand(brandId),
    enabled: !!brandId,
  });
}
