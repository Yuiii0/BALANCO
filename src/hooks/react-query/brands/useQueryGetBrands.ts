import api from "@/apis";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetBrands() {
  return useQuery({
    queryKey: ["brands"],
    queryFn: api.brands.getBrands,
  });
}
