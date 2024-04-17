import api from "@/apis";
import { useMutation } from "@tanstack/react-query";

export default function useMutationLogIn() {
  return useMutation({
    mutationFn: api.auth.logIn,
  });
}
