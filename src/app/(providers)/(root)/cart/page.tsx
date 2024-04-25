"use client";

import ErrorComponent from "@/components/ErrorComponent";
import Heading from "@/components/Heading";
import LoadingSpinner from "@/components/LoadingSpinner";
import Page from "@/components/Page";
import ShoppingLink from "@/components/ShoppingLink/ShoppingLink";
import useQueryGetCart from "@/hooks/react-query/cart/useQueryGetCart";
import { useAuthStore } from "@/stores/auth/authStore";
import CartItem from "./_components/CartProduct";
import TotalPrice from "./_components/TotalPrice";

function CartPage() {
  const auth = useAuthStore();
  const { data: cart, isLoading, isError } = useQueryGetCart(auth.isLoggedIn);

  const totalPrice = cart?.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorComponent />;

  return (
    <Page>
      <Heading>장바구니</Heading>
      {cart ? (
        cart.items.length > 0 ? (
          <section>
            <ul>
              {cart?.items.map((cartItem) => (
                <li key={cartItem.id}>
                  <CartItem cartItem={cartItem} />
                </li>
              ))}
            </ul>
            <TotalPrice totalPrice={totalPrice || 0} />
          </section>
        ) : (
          <section className="flex items-center justify-center flex-col gap-y-12">
            <h6 className="text-lg font-semibold text-custom-gray">
              장바구니가 비어 있습니다.
            </h6>
            <ShoppingLink />
          </section>
        )
      ) : (
        <h6 className="text-lg font-semibold mt-5 text-custom-gray text-center">
          로그인 후 이용해주세요🙂
        </h6>
      )}
    </Page>
  );
}

export default CartPage;
