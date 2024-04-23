"use client";

import api from "@/apis";
import { useModal } from "@/contexts/modal.context";
import Authenticated from "@/stores/auth/Authenticated";
import { useAuthStore } from "@/stores/auth/authStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
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
        <Link href="/mypage">
          <AiOutlineUser className="cursor-pointer text-lg" />
        </Link>
        <Link href="/cart">
          <IoCartOutline className="cursor-pointer  text-lg" />
        </Link>
        {auth.isLoggedIn ? (
          <button onClick={handleClickLogOut}>
            <IoIosLogOut
              className="cursor-pointer  text-lg
              "
            />
          </button>
        ) : (
          <IoIosLogIn
            onClick={handleClickLogin}
            className="text-lg  cursor-pointer"
          >
            로그인
          </IoIosLogIn>
        )}
      </div>
    </Authenticated>
  );
}

export default HeaderMenu;
