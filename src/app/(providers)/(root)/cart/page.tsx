"use client";

import Heading from "@/components/Heading";
import Page from "@/components/Page";
import useQueryGetCart from "@/hooks/react-query/cart/useQueryGetCart";
import Link from "next/link";
import CartItem from "./_components/CartItem";
import TotalPrice from "./_components/TotalPrice";

function CartPage() {
  const { data: cart } = useQueryGetCart();
  console.log("cart", cart);

  const totalPrice = cart?.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  if (!cart)
    return (
      <section>
        <div>로그인 후 이용해주세요🙂 </div>
      </section>
    );

  return (
    <Page>
      <Heading>장바구니</Heading>

      {cart?.items.length > 0 ? (
        <section className="grid gap-x-16 gap-y-10 ">
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
        <section>
          <h6>장바구니에 담긴 상품이 없습니다</h6>
          <Link href={"/"}>쇼핑하러 가기</Link>
        </section>
      )}
    </Page>
  );
}

export default CartPage;
