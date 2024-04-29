"use client";

import { useLikedProductsStore } from "@/stores/products/likedProductsStore";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
interface LikeProductButtonProps {
  productId: number;
}

function LikeProductButton({ productId }: LikeProductButtonProps) {
  const { toggleLikedProduct, isLiked, likedProducts } =
    useLikedProductsStore();
  const isLikedProduct = isLiked(productId);

  return (
    <div
      onClick={() => toggleLikedProduct(productId)}
      aria-label={isLikedProduct ? "unlike-product" : "like-product"}
      className="cursor-pointer text-2xl transition"
    >
      {isLikedProduct ? <IoMdHeart /> : <IoMdHeartEmpty />}
    </div>
  );
}

export default LikeProductButton;
