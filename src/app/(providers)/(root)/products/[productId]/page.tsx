import api from "@/apis";
import Page from "@/components/Page";
import { calculateDiscountPercentage } from "@/utils/calculateDiscount";
import formatPrice from "@/utils/formatPrice.utils";
import Image from "next/image";
import Link from "next/link";

async function ProductPage(props: { params: { productId: string } }) {
  const productId = props.params.productId;
  const product = await api.products.getProduct(Number(productId));
  console.log(product);

  return (
    <Page>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 pt-8">
        <div className="relative aspect-[3/4]">
          <Image
            alt={product.name}
            src={product.imgSrc}
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        <div className="py-8 flex flex-col gap-y-2">
          <Link href={`/brands?brandId=${product.brandId}`}>
            <h1 className="font-extrabold text-xl">{product.brand.nameEn}</h1>
          </Link>
          <h1 className="text-[15px] border-b-2 border-black pb-5 text-slate-700">
            {product.name}
          </h1>
          <div className="grid grid-cols-5 my-6 gap-x-5  gap-y-5 text-[15px] border-b-2 border-black pb-6">
            <div className="text-slate-900 font-bold">상품 금액</div>
            <div className="col-span-4 font-light line-through text-custom-gray">
              {formatPrice(product.originalPrice)}
            </div>
            <div className="text-slate-900 font-bold ">판매가</div>
            <div className="col-span-4 font-extrabold text-lg -translate-y-0.5 font-notoSans">
              <span>{`${formatPrice(product.price)}원`}</span>
              <span className="text-warning ml-3 text-[15px]">
                {calculateDiscountPercentage(
                  product.originalPrice,
                  product.price
                )}
              </span>
            </div>
            <div className="text-slate-900 font-bold">배송</div>
            <div className="col-span-4 font-light">{product.deliveryType}</div>
            <div className="text-slate-900 font-bold ">잔여 재고</div>
            <div className="col-span-4 font-light">{`${product.onlineStock}개`}</div>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default ProductPage;
