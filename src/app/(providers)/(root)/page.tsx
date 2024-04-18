"use client";

import api from "@/apis";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import Pagination from "@/components/Pagination";
import ProductCardList from "@/components/ProductCardsList";
import { Product } from "@/types/Product.type";
import { useEffect, useState } from "react";

interface PageChangeEvent {
  selected: number;
}

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;

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

  const pagesVisited = pageNumber * itemsPerPage;
  const displayProducts = products.slice(
    pagesVisited,
    pagesVisited + itemsPerPage
  );
  const pageCount = Math.ceil(products.length / itemsPerPage);

  return (
    <Page>
      <Heading>New In</Heading>
      <ProductCardList products={displayProducts} />
      <Pagination
        currentPage={pageNumber}
        pageCount={pageCount}
        onPageChange={handlePageChange}
      />
    </Page>
  );
}

export default HomePage;
