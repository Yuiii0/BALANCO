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
    <Link
      href={`/products/${product.id}`}
      className="sm-max:flex sm-max:relative sm:pb-2 "
    >
      <div className="flex justify-center sm-max:block ">
        <div className="flex h-48 sm-max:h-[220px] border-b py-5 gap-x-5 sm-max:gap-x-3 ">
          <div className="mr-2 sm-max:pt-2 ">
            <Image
              alt={product.name}
              src={product.imgSrc}
              width={115}
              height={115}
              className="object-cover sm-max:w-full"
            />
          </div>
          <div className="flex flex-col w-[400px] sm-max:pt-7 pt-4">
            <div className="font-bold">{product.brand.nameEn}</div>
            <div className="font-light text-gray-600 text-[15px] mb-2 sm-max:mb-3">
              {truncateText(product.name, 40)}
            </div>
            <div className="text-[15px] font-semibold sm-max:text-sm">
              {getDeliveryDate()}
            </div>
            <div className="text-[13px] text-custom-gray">
              {`잔여재고 ${product.onlineStock}개`}
            </div>
          </div>
          <div className="flex gap-x-3 sm-max:justify-between sm-max:w-full sm-max:pt-4 sm-max:absolute sm-max:top-[168px] sm-max:px-3 ">
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
    </Link>
  );
}

export default CartProduct;
