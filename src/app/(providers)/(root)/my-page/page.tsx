"use client";
//client 지우기
import Heading from "@/components/Heading";
import { useLikedProductsStore } from "@/stores/products/likedProductsStore";

function MyPage() {
  const { likedProducts } = useLikedProductsStore();
  console.log("좋아요한 상품", likedProducts);
  return (
    <div>
      <Heading>좋아요한 상품</Heading>
    </div>
  );
}

export default MyPage;
