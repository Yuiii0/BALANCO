import api from "@/apis";
import Button from "@/components/Button";
import LikeProductButton from "@/components/LikeProductButton";
import Page from "@/components/Page";
import ShoppingCart from "@/components/ShoppingCart";
import { calculateDiscountPercentage } from "@/utils/calculateDiscount";
import { calculateRewards } from "@/utils/calculateRewards";
import formatPrice from "@/utils/formatPrice.utils";
import { getDeliveryDate } from "@/utils/getDeliveryDate";
import Image from "next/image";
import Link from "next/link";

async function ProductPage(props: { params: { productId: string } }) {
  const productId = Number(props.params.productId);
  const product = await api.products.getProduct(productId);

  return (
    <Page>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 pt-2 ">
        <div className="relative aspect-[3/4]">
          <Image
            alt={product.name}
            src={product.imgSrc}
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        <div className="pb-8 sm-max:pb-2 pt-6 flex flex-col gap-y-3 ">
          <Link href={`/brands?brandId=${product.brandId}`}>
            <h1 className="font-extrabold ">{product.brand.nameEn}</h1>
          </Link>
          <h1 className="text-xl font-light border-b-2 sm-max:text-lg border-black pb-5 sm-max:pb-3 text-slate-700">
            {product.name}
          </h1>
          <div className="grid grid-cols-5 sm-max:px-1 my-6 sm-max:my-3 gap-x-5 sm-max:gap-y-3.5 gap-y-5 text-[15px] border-b-2 border-black pb-6 sm-max:pb-4 relative">
            <div className="text-slate-900 font-bold  sm-max:w-24">
              상품 금액
            </div>
            <div className="col-span-4 font-light line-through text-custom-gray sm-max:ml-4 ">
              {`${formatPrice(product.originalPrice)}원`}
            </div>
            <div className="text-slate-900 font-bold sm-max:w-24">판매가</div>
            <div className="col-span-4 font-extrabold text-lg -translate-y-0.5 font-notoSans sm-max:ml-4">
              <span>{`${formatPrice(product.price)}원`}</span>
              <span className="text-warning ml-3 text-[15px]">
                {calculateDiscountPercentage(
                  product.originalPrice,
                  product.price
                )}
              </span>
            </div>
            <div className="text-slate-900 font-bold sm-max:w-24">적립금</div>
            <div className="col-span-4 font-light sm-max:ml-4">
              {`${formatPrice(calculateRewards(product.price))}원`}
            </div>
            <div className="text-slate-900 font-bold sm-max:w-24">
              무이자할부
            </div>
            <div className="col-span-4 font-light sm-max:ml-4">최대 12개월</div>
            <div className="text-slate-900 font-bold sm-max:w-24">배송</div>
            <div className="col-span-4 font-semibold sm-max:ml-4">
              {getDeliveryDate()}
            </div>
            <div className="text-slate-900 font-bold sm-max:w-24">배송비</div>
            <div className="col-span-4 font-light sm-max:ml-4">무료</div>
            <div className="text-slate-900 font-bold sm-max:w-24">
              잔여 재고
            </div>
            <div className="col-span-4 font-light sm-max:ml-4">{`${product.onlineStock}개`}</div>
          </div>
          <div className="text-end pr-5 -translate-y-20 ">
            <LikeProductButton productId={productId} />
          </div>
          <div className="flex gap-x-4 sm-max:-translate-y-10">
            <ShoppingCart productId={productId} />
            <Button>구매하기</Button>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default ProductPage;
