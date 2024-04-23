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
    <button
      onClick={() => toggleLikedProduct(productId)}
      aria-label={isLikedProduct ? "unlike-product" : "like-product"}
      className="cursor-pointer text-2xl transition"
    >
      {isLikedProduct ? <IoMdHeart /> : <IoMdHeartEmpty />}
    </button>
  );
}

export default LikeProductButton;
