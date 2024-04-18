"use client";

import api from "@/apis";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import Pagination from "@/components/Pagination";
import ProductCardList from "@/components/ProductCardsList";
import { Product } from "@/types/Product.type";
import { useEffect, useState } from "react";
import SearchTerm from "./_components/SearchTerm/SearchTerm";

interface PageChangeEvent {
  selected: number;
}

function HomePage(props: { searchParams: { search?: string } }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;

  const searchTerm = props.searchParams.search;

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await api.products.getProducts();
      setProducts(fetchedProduct);
    };
    fetchProduct();
  }, []);

  const handlePageChange = (event: PageChangeEvent) => {
    setPageNumber(event.selected);
  };

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

      <ProductCardList products={displayProducts} />
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
