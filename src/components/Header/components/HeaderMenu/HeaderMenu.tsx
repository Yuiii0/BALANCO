"use client";

import api from "@/apis";
import { useModal } from "@/contexts/modal.context";
import Authenticated from "@/stores/auth/Authenticated";
import { useAuthStore } from "@/stores/auth/authStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoginModal from "../LoginModal";

function HeaderMenu() {
  const modal = useModal();
  const router = useRouter();
  const auth = useAuthStore();

  const handleClickLogin = () => {
    modal.open(<LoginModal />);
  };

  const handleClickLogOut = async () => {
    await api.auth.logOut();
    auth.setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <Authenticated>
      <div className="flex gap-x-6 font-semibold">
        {auth.isLoggedIn ? (
          <>
            <Link href="/my-page">마이페이지</Link>
            <Link href="/cart">장바구니</Link>
            <button onClick={handleClickLogOut}>로그아웃</button>
          </>
        ) : (
          <>
            <Link href="/sign-up">회원가입</Link>
            <button onClick={handleClickLogin}>로그인</button>
          </>
        )}
      </div>
    </Authenticated>
  );
}

export default HeaderMenu;
