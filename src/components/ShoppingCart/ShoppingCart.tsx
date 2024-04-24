"use client";

import { useModal } from "@/contexts/modal.context";
import useMutationAddItemToCart from "@/hooks/react-query/cart/useMutationAddItemToCart";
import useMutationClearItemInCart from "@/hooks/react-query/cart/useMutationClearItemInCart";
import useQueryGetCart from "@/hooks/react-query/cart/useQueryGetCart";
import { useAuthStore } from "@/stores/auth/authStore";
import {
  MdOutlineAddShoppingCart,
  MdOutlineRemoveShoppingCart,
} from "react-icons/md";
import Button from "../Button";
import LogInModal from "../Header/components/LoginModal/LogInModal";

interface AddToCartButtonProps {
  iconType?: boolean;
  productId: number;
}

function ShoppingCartButton({ iconType, productId }: AddToCartButtonProps) {
  const auth = useAuthStore();
  const modal = useModal();

  const { data: cart } = useQueryGetCart(auth.isLoggedIn);
  const { mutateAsync: addItemToCart } = useMutationAddItemToCart();
  const { mutateAsync: clearItemInCart } = useMutationClearItemInCart();

  const isAlreadyAdded =
    auth.isLoggedIn &&
    cart?.items.findIndex((item) => item.product.id === productId) !== -1;

  const handleClickButton = async () => {
    //로그인한 유저가 아니라면, 로그인 모달 띄우기
    if (!auth.isLoggedIn) return modal.open(<LogInModal />);

    //상품이 담긴 상태에 따라 분기 처리
    if (isAlreadyAdded) {
      await clearItemInCart(productId);
      alert("장바구니에서 제거되었습니다 🗑");
    } else {
      await addItemToCart(productId);
      alert("장바구니에 추가되었습니다 🛒");
    }
  };

  return iconType ? (
    <button
      onClick={handleClickButton}
      className="cursor-pointer text-xl sm-max:text-sm"
    >
      {isAlreadyAdded ? (
        <MdOutlineRemoveShoppingCart />
      ) : (
        <MdOutlineAddShoppingCart />
      )}
    </button>
  ) : (
    <Button
      color={isAlreadyAdded ? "white" : "black"}
      onClick={handleClickButton}
    >
      {isAlreadyAdded ? "장바구니에서 삭제" : "장바구니 추가"}
    </Button>
  );
}

export default ShoppingCartButton;
