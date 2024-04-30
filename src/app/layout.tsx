import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "명품 쇼핑은 Balanco",
  description: "력셔리 쇼핑몰 Balanco입니다",
};

export default function HTMLLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="명품 쇼핑은 Balanco"></meta>
        <meta
          property="og:description"
          content="력셔리 쇼핑몰 Balanco입니다"
        ></meta>
        <meta property="og:locale" content="ko_KR"></meta>
      </Head>
      <body>{children}</body>
    </html>
  );
}
