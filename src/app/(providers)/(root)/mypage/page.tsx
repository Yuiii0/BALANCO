"use client";

import Heading from "@/components/Heading";
import Page from "@/components/Page";
import ProductCardsList from "@/components/ProductCardsList";
import ShoppingLink from "@/components/ShoppingLink/ShoppingLink";
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
      <Heading>좋아요한 상품 🖤</Heading>
      <section>
        {products.length > 0 ? (
          <ProductCardsList products={products} />
        ) : (
          <section className="flex items-center justify-center flex-col gap-y-12">
            <h6 className="text-lg  text-custom-gray">
              좋아요한 상품이 없습니다.
            </h6>
            <ShoppingLink />
          </section>
        )}
      </section>
    </Page>
  );
}

export default MyPage;
