import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

function ShoppingLink() {
  return (
    <Link href={"/"}>
      <div className="flex  gap-x-1 hover:underline">
        <AiOutlineShopping className="text-lg" />
        쇼핑하러 가기
      </div>
    </Link>
  );
}

export default ShoppingLink;
