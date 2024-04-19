"use client";

import { Product } from "@/types/Product.type";
import { calculateDiscountPercentage } from "@/utils/calculateDiscount";
import formatPrice from "@/utils/formatPrice.utils";
import Image from "next/image";
import Link from "next/link";
import ShoppingCart from "../ShoppingCart";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="relative">
      <Link href={`/products/${product.id}`} className="group">
        <div className=" mb-5 aspect-[3/4] relative overflow-hidden border-transparent border-b-[4px] group-hover:border-black transition-colors">
          <Image
            alt={product.name}
            src={product.imgSrc}
            className="object-cover"
            fill
            unoptimized
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="font-bold text-sm text-center">
            {product.brand.nameEn}
          </div>
          <h6 className="font text-[13px] font-extralight w-full h-5 overflow-hidden text-center">
            {product.name}
          </h6>
          <div className="flex gap-x-2 items-center justify-center">
            <span className="text-sm font-extralight text-gray-400">
              {formatPrice(product.originalPrice)}
            </span>
            <span className="text-sm font-bold">
              {`${formatPrice(product.price)}원`}
            </span>
            <span className="px-2 font-bold text-warning text-sm ">
              {calculateDiscountPercentage(
                product.originalPrice,
                product.price
              )}
            </span>
          </div>
        </div>
      </Link>
      <button className="mt-6 flex  hover:scale-110 transition absolute right-1">
        <ShoppingCart productId={product.id} iconType />
      </button>
    </div>
  );
}

export default ProductCard;
