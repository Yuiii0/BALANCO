"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import ErrorMessage from "@/components/Input/ErrorMessage";
import { useForm } from "react-hook-form";

interface ISignUpForm {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
}

function SignUpForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ISignUpForm>();

  const onValid = (data: ISignUpForm) => {
    console.log(data);
    if (data.password !== data.passwordConfirm) {
      setError(
        "passwordConfirm",
        { message: "비밀번호가 일치하지 않습니다" },
        { shouldFocus: true }
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-y-6">
      <div>
        <Input
          {...register("name", {
            required: "이름을 입력해주세요",
            maxLength: 10,
          })}
          placeholder="이름"
        />
        <ErrorMessage>{errors?.name?.message}</ErrorMessage>
      </div>
      <div>
        <Input
          {...register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
              message: "올바른 이메일 형식으로 작성해주세요",
            },
          })}
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
          placeholder="비밀번호 확인"
        />
        <ErrorMessage>{errors.passwordConfirm?.message}</ErrorMessage>
      </div>

      <Button color="black">회원가입</Button>
    </form>
  );
}

export default SignUpForm;
