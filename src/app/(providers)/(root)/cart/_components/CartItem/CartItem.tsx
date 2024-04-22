import { CartItem } from "@/types/Cart.type";
import formatPrice from "@/utils/formatPrice.utils";
import { getDeliveryDate } from "@/utils/getDeliveryDate";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import ItemQuantityController from "../ItemQuantityController";

interface CartItemProps {
  cartItem: CartItem;
}

function CartItem({ cartItem }: CartItemProps) {
  const product = cartItem.product;

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex h-40 sm:h-48 border-b py-5 gap-x-5 ">
          <div className=" mr-2">
            <Image
              alt={product.name}
              src={product.imgSrc}
              width={115}
              height={115}
              className="object-cover"
            />
          </div>

          <div className="flex flex-col w-[400px] pt-4">
            <div className="font-bold">{product.brand.nameEn}</div>
            <div className="font-light text-gray-600 text-[15px] mb-3">
              {truncateText(product.name, 40)}
            </div>
            <div className="text-[15px] font-semibold">{getDeliveryDate()}</div>
            <div className="text-[13px] text-custom-gray">
              {`잔여재고 ${product.onlineStock}개`}
            </div>
          </div>
          <ItemQuantityController
            quantity={cartItem.quantity}
            productId={product.id}
          />
          <div className="flex  w-28 justify-end self-center">
            <div className="font-bold text-lg">
              {`${formatPrice(product.price * cartItem.quantity)}원`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
