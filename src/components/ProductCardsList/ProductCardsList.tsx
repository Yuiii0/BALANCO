import { Product } from "@/types/Product.type";
import ProductCard from "../ProductCard/ProductCard";

interface ProductCardsListProps {
  products: Product[];
}

function ProductCardList({ products }: ProductCardsListProps) {
  return (
    <ul
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5
    gap-y-20
    "
    >
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductCardList;
