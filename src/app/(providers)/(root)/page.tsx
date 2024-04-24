"use client";

import ErrorComponent from "@/components/ErrorComponent";
import Heading from "@/components/Heading";
import LoadingSpinner from "@/components/LoadingSpinner";
import Page from "@/components/Page";
import Pagination from "@/components/Pagination";
import ProductCardsList from "@/components/ProductCardsList";
import useQueryGetProducts from "@/hooks/react-query/products/useQueryGetProducts";
import { useState } from "react";
import SearchTerm from "./_components/SearchTerm/SearchTerm";

interface PageChangeEvent {
  selected: number;
}

function HomePage(props: { searchParams: { search?: string } }) {
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;

  const searchTerm = props.searchParams.search;

  const { data: products, isLoading, isError } = useQueryGetProducts();

  const handlePageChange = (event: PageChangeEvent) => {
    setPageNumber(event.selected);
  };

  //Loading
  if (isLoading) {
    return <LoadingSpinner />;
  }

  //Error
  if (!products || isError) {
    return <ErrorComponent />;
  }

  // searchTerm에 따라 필터링된 상품 목록
  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  //Pagination을 통해 display될 products 정의
  const pagesVisited = pageNumber * itemsPerPage;
  const displayProducts = filteredProducts.slice(
    pagesVisited,
    pagesVisited + itemsPerPage
  );
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <Page>
      {searchTerm ? (
        <SearchTerm
          productCount={filteredProducts.length}
          searchTerm={searchTerm}
        />
      ) : (
        <Heading>New In</Heading>
      )}

      <ProductCardsList products={displayProducts} />
      {displayProducts.length > 0 && (
        <Pagination
          currentPage={pageNumber}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
      )}
    </Page>
  );
}

export default HomePage;
