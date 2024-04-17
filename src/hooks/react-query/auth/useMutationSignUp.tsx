import api from "@/apis";
import { useMutation } from "@tanstack/react-query";

export default function useMutationSignUp() {
  return useMutation({ mutationFn: api.auth.signUp });
}
