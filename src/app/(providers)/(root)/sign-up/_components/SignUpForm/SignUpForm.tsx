"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import ErrorMessage from "@/components/Input/ErrorMessage";
import useMutationSignUp from "@/hooks/react-query/auth/useMutationSignUp";
import { useAuthStore } from "@/stores/auth/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useForm } from "react-hook-form";

interface ISignUpForm {
  email: string;
  password: string;
  passwordConfirm: string;
}

function SignUpForm() {
  const auth = useAuthStore();
  const router = useRouter();
  const { mutateAsync: signUp, isPending } = useMutationSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ISignUpForm>();

  const onValid = async (data: ISignUpForm) => {
    console.log(data);
    if (data.password !== data.passwordConfirm) {
      setError(
        "passwordConfirm",
        { message: "비밀번호가 일치하지 않습니다" },
        { shouldFocus: true }
      );
    } else {
      try {
        const email = data.email;
        const password = data.password;

        await signUp({ email, password });
        auth.setIsLoggedIn(true);
      } catch (error) {
        alert("회원가입에 실패하였습니다");
      }
    }
  };

  useEffect(() => {
    if (auth.isLoggedIn) {
      router.push("/");
    }
  }, [auth.isLoggedIn, router]);

  return (
    <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-y-6">
      <div>
        <Input
          {...register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
              message: "올바른 이메일 형식으로 작성해주세요",
            },
          })}
          type="email"
          placeholder="이메일"
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </div>
      <div>
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
      <div>
        <Input
          {...register("passwordConfirm", {
            required: "비밀번호 확인을 입력해주세요",
            minLength: {
              value: 8,
              message: "8글자 이상 입력해주세요",
            },
          })}
          type="password"
          placeholder="비밀번호 확인"
        />
        <ErrorMessage>{errors.passwordConfirm?.message}</ErrorMessage>
      </div>

      <Button color="black">회원가입</Button>
    </form>
  );
}

export default SignUpForm;
