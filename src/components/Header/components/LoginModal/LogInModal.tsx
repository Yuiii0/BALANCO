import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import ErrorMessage from "@/components/Input/ErrorMessage";
import Modal from "@/components/Modal";
import { useModal } from "@/contexts/modal.context";
import useMutationLogIn from "@/hooks/react-query/auth/useMutationLogin";
import { useAuthStore } from "@/stores/auth/authStore";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

interface ILoginForm {
  email: string;
  password: string;
}

function LogInModal() {
  const auth = useAuthStore();
  const modal = useModal();
  const router = useRouter();

  const { mutateAsync: logIn, isPending } = useMutationLogIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onValid = async (data: ILoginForm) => {
    try {
      await logIn({ email: data.email, password: data.password });
      auth.setIsLoggedIn(true);
      router.push("/");
      modal.close();
    } catch (error) {
      alert("로그인에 실패하였습니다");
    }
  };
  return (
    <Modal>
      <Heading>로그인</Heading>
      <form
        onSubmit={handleSubmit(onValid)}
        className="w-full flex flex-col gap-y-1 px-2 mb-6"
      >
        <div className="flex flex-col gap-y-1">
          <Input
            {...register("email", {
              required: "이메일을 입력해주세요",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                message: "올바른 이메일 형식으로 작성해주세요",
              },
            })}
            type="text"
            error={!!errors.email}
            placeholder="email@example.com"
          />
          <ErrorMessage>{errors?.email?.message}</ErrorMessage>
        </div>
        <div className="flex flex-col gap-y-1 mb-2s">
          <Input
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              minLength: {
                value: 8,
                message: "8글자 이상 입력해주세요",
              },
            })}
            type="password"
            placeholder="비밀번호"
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </div>
        <Button color="black" disabled={isPending}>
          로그인
        </Button>
      </form>
    </Modal>
  );
}

export default LogInModal;
