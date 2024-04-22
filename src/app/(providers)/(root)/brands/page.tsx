import api from "@/apis";
import Page from "@/components/Page";
import ProductCardsList from "@/components/ProductCardsList";
import { Product } from "@/types/Product.type";
import BrandLink from "./_components/BrandLink";

async function BrandsPage(props: { searchParams: { brandId?: string } }) {
  const brandId = props.searchParams.brandId;
  let products: Product[] = [];

  if (brandId) {
    let brandResult = await api.brands.getBrand(Number(brandId));
    products = brandResult.products;
  } else {
    products = await api.products.getProducts();
  }

  const brands = await api.brands.getBrands();
  brands.sort((a, b) => a.nameEn.localeCompare(b.nameEn));

  return (
    <Page>
      <div>
        <nav className="mb-16">
          <ul className="grid grid-cols-2 sm:grid-cols-4  gap-x-4 gap-y-2 px-12 ">
            <li className="col-span-2 sm:col-span-4 text-center mb-4 text-lg font-bold ">
              <BrandLink href="/brands" label="ALL" isActive={!brandId} />
            </li>
            {brands.map((brand) => (
              <li key={brand.id} className="list-none ">
                <BrandLink
                  href={`/brands?brandId=${brand.id}`}
                  label={brand.nameEn}
                  isActive={brandId === String(brand.id)}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {brandId && (
        <h2 className="font-bold text-2xl text-center py-4">
          {products[0].brand.nameEn}
        </h2>
      )}
      <ProductCardsList products={products} />
    </Page>
  );
}

export default BrandsPage;
