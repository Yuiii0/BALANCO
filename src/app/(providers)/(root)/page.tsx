import api from "@/apis";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import ProductCardList from "@/components/ProductCardsList";

async function HomePage() {
  const products = await api.products.getProducts();

  return (
    <Page>
      <Heading>New In</Heading>
      <ProductCardList products={products} />
    </Page>
  );
}

export default HomePage;
