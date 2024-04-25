import Button from "@/components/Button";
import formatPrice from "@/utils/formatPrice.utils";

interface TotalPriceProps {
  totalPrice: number;
}

//10만원 이상 무료 배송
function TotalPrice({ totalPrice }: TotalPriceProps) {
  const shippingCost = totalPrice >= 100000 ? 0 : 2500;
  const totalAmount = totalPrice + shippingCost;

  const handleClickOrder = () => {
    alert("준비중입니다🙂");
  };

  return (
    <div>
      <div className=" px-12 py-8 sm-max:px-6 w-4/6 sm-max:w-full mx-auto bg-bg-lightgray flex flex-col gap-y-3 mt-10">
        <span className="text-xs font-extralight text-end pb-2 border-b text-slate-700 rounded-sm">
          10만원 이상 무료배송
        </span>
        <div className="flex justify-between pt-1">
          <div className="w-40 text-custom-gray font-extralight text-[15px] sm-max:text-sm">
            총 상품금액
          </div>
          <div className="text-gray-700 sm-max:text-[15px]">{`${formatPrice(
            totalPrice
          )}원`}</div>
        </div>
        <div className="flex justify-between">
          <div className="w-40 text-custom-gray font-extralight text-[15px] sm-max:text-sm">
            배송비
          </div>
          <div className="text-gray-700 sm-max:text-[15px]">{`${formatPrice(
            shippingCost
          )}원`}</div>
        </div>
        <div className="flex justify-between font-semibold sm-max:text-[15px]">
          <div className="w-40 text-slate-700  text-[15px] sm-max:text-sm">
            총 결제금액
          </div>
          <div className="text-gray-700">{`${formatPrice(totalAmount)}원`}</div>
        </div>
      </div>
      <div className="mt-8 mb-6 w-1/4 sm-max:w-1/2 mx-auto">
        <Button color="black" onClick={handleClickOrder}>
          주문하기
        </Button>
      </div>
    </div>
  );
}

export default TotalPrice;
