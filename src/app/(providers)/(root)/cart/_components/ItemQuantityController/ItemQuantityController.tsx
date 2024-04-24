import useMutationAddItemToCart from "@/hooks/react-query/cart/useMutationAddItemToCart";
import useMutationRemoveItemFromCart from "@/hooks/react-query/cart/useMutationRemoveItemFromCart";
import { MouseEventHandler } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface ItemQuantityControllerProps {
  quantity: number;
  productId: number;
}

function ItemQuantityController({
  quantity,
  productId,
}: ItemQuantityControllerProps) {
  const { mutateAsync: addItemToCart } = useMutationAddItemToCart();
  const { mutateAsync: removeItemFromCart } = useMutationRemoveItemFromCart();

  const handleClickPlus: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    addItemToCart(productId);
  };
  const handleClickMinus: MouseEventHandler<HTMLButtonElement> = (e) => {
    removeItemFromCart(productId);
  };
  return (
    <div className="grid grid-cols-3 shrink-0 items-stretch self-center">
      <button
        onClick={handleClickMinus}
        className="bg-slate-800 text-white rounded-md px-1.5 py-1"
      >
        <FiMinus />
      </button>
      <span className="text-center translate-y-0.5 text-lg text-slate-800 ">
        {quantity}
      </span>
      <button
        onClick={handleClickPlus}
        className="bg-slate-800 text-white  px-1.5 py-1 rounded-md"
      >
        <FiPlus />
      </button>
      <span></span>
    </div>
  );
}

export default ItemQuantityController;
