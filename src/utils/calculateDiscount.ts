export function calculateDiscountPercentage(
  originalPrice: number,
  price: number
): string {
  if (originalPrice === 0) {
    return "";
  }
  const discount = originalPrice - price;
  const discountPercentage = Math.floor((discount / originalPrice) * 100);
  return discountPercentage + "%";
}
