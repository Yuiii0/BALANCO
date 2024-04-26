import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        warning: "#BD081C",
        lightgray: "#cecece",
        salmon: "#f1736e",
        "bg-lightgray": "#f7f7f8",
        "hover-lightgray": "#f2f2f2",
        "custom-gray": "#999999",
        "bg-pink": "#e9c6d6",
      },
      boxShadow: {
        primary: "0 4px 16px 0 rgba(134, 104, 242, 0.14)",
      },
      fontFamily: {
        oswald: ["Oswald"],
        spoqa: ["SpoqaHanSansNeo", "sans-serif"],
        Montserrat: ["Montserrat", "serif"],
        notoSans: ["Noto Sans KR", "SpoqaHanSansNeo"],
      },
      screens: {
        "sm-max": { max: "639px" },
        "md-max": { max: "767px" },
        "lg-max": { max: "1023px" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

export default config;
