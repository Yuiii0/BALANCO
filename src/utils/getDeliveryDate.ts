import { addDays, format } from "date-fns";

export function getDeliveryDate() {
  const today = new Date();
  const nextDay = addDays(today, 1); // 다음날 계산

  return format(nextDay, "MM/dd (iii) '도착예정'");
}
