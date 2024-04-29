import { Noto_Sans_KR, Oswald } from "next/font/google";

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
export const notoSansKr = Noto_Sans_KR({
  preload: false,
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};
