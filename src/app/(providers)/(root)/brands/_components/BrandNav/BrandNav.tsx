import useQueryGetBrands from "@/hooks/react-query/brands/useQueryGetBrands";
import BrandLink from "../BrandLink";

interface BrandNavProps {
  brandId?: string;
}

function BrandNav({ brandId }: BrandNavProps) {
  const { data: brands } = useQueryGetBrands();

  return (
    <nav className="mb-16">
      <ul className="grid grid-cols-2 sm:grid-cols-4  gap-x-4 gap-y-2 px-12 ">
        <li className="col-span-2 sm:col-span-4 text-center mb-4 text-lg font-bold ">
          <BrandLink href="/brands" label="ALL" isActive={!brandId} />
        </li>
        {brands?.map((brand) => (
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
  );
}

export default BrandNav;
