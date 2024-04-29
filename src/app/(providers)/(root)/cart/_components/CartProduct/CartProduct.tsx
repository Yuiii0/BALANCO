import { CartItem } from "@/types/Cart.type";
import formatPrice from "@/utils/formatPrice.utils";
import { getDeliveryDate } from "@/utils/getDeliveryDate";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import Link from "next/link";
import ItemQuantityController from "../ItemQuantityController";

interface CartProductProps {
  cartItem: CartItem;
}

function CartProduct({ cartItem }: CartProductProps) {
  const product = cartItem.product;

  return (
    <div className="sm-max:flex sm-max:relative sm:pb-2 sm-max:justify-center ">
      <div className="flex justify-center sm-max:block ">
        <div className="flex h-48 sm-max:h-[200px] border-b py-5 gap-x-5 sm-max:gap-x-3 sm-max:max-w-[340px]">
          <Link
            href={`/products/${product.id}`}
            className="flex sm-max:h-[220px] sm-max:gap-x-3 sm-max:max-w-[340px] gap-x-3 "
          >
            <div className="mr-2 sm-max:pt-2 ">
              <Image
                alt={product.name}
                src={product.imgSrc}
                width={115}
                height={115}
                className="object-cover sm-max:w-full"
              />
            </div>
            <div className="flex flex-col w-[400px] sm:max-w-[300px] pt-4">
              <div className="font-bold">{product.brand.nameEn}</div>
              <div className="font-light text-gray-600 text-[15px] mb-2 sm-max:mb-3 sm-max:overflow-hidden sm-max:h-4 ">
                {truncateText(product.name, 26)}
              </div>
              <div className="text-[15px] font-semibold sm-max:text-sm">
                {getDeliveryDate()}
              </div>
              <div className="text-[13px] text-custom-gray">
                {`잔여재고 ${product.onlineStock}개`}
              </div>
            </div>
          </Link>
          <div className="flex gap-x-3 sm-max:justify-between sm-max:w-full  sm-max:absolute sm-max:top-[150px] sm-max:px-3 ">
            <ItemQuantityController
              quantity={cartItem.quantity}
              productId={product.id}
            />
            <div className="flex  w-28 justify-end self-center">
              <div className="font-bold text-lg sm-max:text-base lg-max:text-base">
                {`${formatPrice(product.price * cartItem.quantity)}원`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
