"use client";

import Heading from "@/components/Heading";
import Page from "@/components/Page";
import ProductCardsList from "@/components/ProductCardsList";
import useQueryGetLikedProducts from "@/hooks/react-query/products/useQueryGetLikedProducts";
import { useLikedProductsStore } from "@/stores/products/likedProductsStore";
import { Product } from "@/types/Product.type";

function MyPage() {
  const { likedProducts } = useLikedProductsStore();
  const productQueries = useQueryGetLikedProducts(likedProducts);

  const products = productQueries
    .map((query) => (query.isSuccess && query.data ? query.data : null))
    .filter(Boolean) as Product[];


  return (
    <Page>
      <Heading>좋아요한 상품</Heading>
      {products.length > 0 ? (
        <ProductCardsList products={products} />
      ) : (
        <div>좋아요한 상품이 없어요</div>
      )}
    </Page>
  );
}

export default MyPage;
