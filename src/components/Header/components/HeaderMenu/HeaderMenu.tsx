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
    localStorage.clear();
    router.push("/");
  };

  const handleClickCart = () => {
    if (auth.isLoggedIn) {
      router.push("/cart");
    } else {
      modal.open(<LoginModal />);
    }
  };

  return (
    <Authenticated>
      <div className="flex gap-x-6 font-semibold">
        <button onClick={handleClickCart}>
          <IoCartOutline className="cursor-pointer  text-lg" />
        </button>
        {auth.isLoggedIn && (
          <Link href="/mypage">
            <AiOutlineUser className="cursor-pointer text-lg" />
          </Link>
        )}
        {auth.isLoggedIn ? (
          <button onClick={handleClickLogOut}>
            <IoIosLogOut
              className="cursor-pointer  text-lg
              "
            />
          </button>
        ) : (
          <button onClick={handleClickLogin}>
            <IoIosLogIn className="text-lg  cursor-pointer"></IoIosLogIn>
          </button>
        )}
      </div>
    </Authenticated>
  );
}

export default HeaderMenu;
