import useMutationAddItemToCart from "@/hooks/react-query/cart/useMutationAddItemToCart";
import useMutationRemoveItemFromCart from "@/hooks/react-query/cart/useMutationRemoveItemFromCart";
import { FiMinus, FiPlus } from "react-icons/fi";
function ItemQuantityController() {
  const { mutateAsync: addItemToCart } = useMutationAddItemToCart();
  const { mutateAsync: removeItemFromCart } = useMutationRemoveItemFromCart();

  const handleClickPlus = () => {};
  const handleClickMinus = () => {};
  return (
    <div>
      <button onClick={handleClickPlus}>
        <FiPlus />
      </button>
      <span></span>
      <button onClick={handleClickMinus}>
        <FiMinus />
      </button>
    </div>
  );
}

export default ItemQuantityController;
