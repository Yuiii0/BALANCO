"use client";

import ErrorComponent from "@/components/ErrorComponent";
import LoadingSpinner from "@/components/LoadingSpinner";
import Page from "@/components/Page";
import ProductCardsList from "@/components/ProductCardsList";
import useQueryGetBrand from "@/hooks/react-query/brands/useQueryGetBrand";
import useQueryGetProducts from "@/hooks/react-query/products/useQueryGetProducts";
import { Product } from "@/types/Product.type";
import { useEffect, useState } from "react";
import BrandNav from "./_components/BrandNav";

function BrandsPage(props: { searchParams: { brandId?: string } }) {
  const brandId = props.searchParams.brandId;
  let isFetchTotalProducts = !brandId;
  const [products, setProducts] = useState<Product[]>([]);

  const {
    data: brandResult,
    isLoading: isBrandLoading,
    isError: isBrandError,
  } = useQueryGetBrand(Number(brandId));
  const {
    data: productsResult,
    isLoading: isProductLoading,
    isError: isProductError,
  } = useQueryGetProducts(isFetchTotalProducts);

  useEffect(() => {
    if (brandId && brandResult) {
      setProducts(brandResult.products);
    } else {
      setProducts(productsResult || []);
    }
  }, [brandId, brandResult, productsResult]);

  if (isBrandLoading || isProductLoading) {
    return <LoadingSpinner />;
  }
  if (isBrandError || isProductError) {
    return <ErrorComponent />;
  }

  return (
    <Page>
      <BrandNav brandId={brandId} />
      {brandId && (
        <h2 className="font-bold text-2xl text-center py-4">
          {products[0]?.brand.nameEn}
        </h2>
      )}
      <ProductCardsList products={products} />
    </Page>
  );
}

export default BrandsPage;
