import create from "zustand";
import { persist } from "zustand/middleware";

interface LikeProductsState {
  likedProducts: number[];
  isLiked: (productId: number) => boolean;
  toggleLikedProduct: (productId: number) => void;
}

export const useLikedProductsStore = create(
  persist<LikeProductsState>(
    (set, get) => ({
      likedProducts: [],
      isLiked: (productId) => get().likedProducts.includes(productId),
      toggleLikedProduct: (productId) =>
        set((state) => {
          const isAlreadyLiked = state.likedProducts.includes(productId);
          if (isAlreadyLiked) {
            return {
              likedProducts: state.likedProducts.filter(
                (id) => id !== productId
              ),
            };
          } else {
            return {
              likedProducts: [...state.likedProducts, productId],
            };
          }
        }),
    }),
    {
      name: "liked-products",
    }
  )
);
