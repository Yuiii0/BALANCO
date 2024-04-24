import Image from "next/image";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-black h-48 sm-max:h-52 px-16 pt-10 pb-8 sm-max:px-6 sm-max:py-6">
      <div className="flex justify-between ">
        <ul className="text-white flex sm-max:flex-col gap-x-4 sm-max:gap-y-1 text-sm sm-max:text-[8px] sm-max:font-light sm-max:text-xs  transition mb-2">
          <li className="hover:text-gray-300">
            <Link href={"#"}>회사소개</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href={"#"}>이용약관</Link>
          </li>
          <li className="hover:text-gray-300 ">
            <Link href={"#"}>고객센터</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href={"#"}>회사소개</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href={"#"}>개인정보처리방침</Link>
          </li>
        </ul>
        <Link href={"#"} className="-translate-y-2 group " target="_blank">
          <span className="text-gray-100 text-xs sm-max:text-xs font-light opacity-0 group-hover:opacity-100 underline">
            portfolio
          </span>
          <Image
            src={"/utils/images/Yuiii.png"}
            alt="portfolio"
            width={45}
            height={45}
            className="hover:scale-105"
          />
        </Link>
      </div>
      <div className="text-sm font-light sm-max:text-[11px]  text-gray-400">
        <p>Web Balanco</p>
        <p className="sm-max:-translate-y-1">
          ©2024 Yuiii0 All rights reserved.
        </p>
      </div>
      <ul className="flex justify-end items-center gap-x-3 -translate-y-1 ">
        <li className="flex flex-col items-center justify-center">
          <Link href={"https://github.com/Yuiii0"} target="_blank">
            <svg height="24" width="24" viewBox="0 0 16 16" fill="gray">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.15 0 3.07-1.87 3.74-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </Link>
        </li>
        <li>
          <Link
            href={
              "https://yuuxi.tistory.com/category/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8"
            }
            target="_blank"
          >
            <Image
              src={"/utils/images/tistory.svg"}
              alt="tistory"
              width={32}
              height={32}
            />
          </Link>
        </li>
        {/* <li>
          <Link
            href={
              "https://yuuxi.tistory.com/category/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8"
            }
          >
            <Image
              src={"/utils/images/surfit.jpeg"}
              alt="tistory"
              width={32}
              height={32}
            />
          </Link>
        </li> */}
        <li>
          <Link href="mailto:yuji918@naver.com" className="text-gray-400">
            <MdOutlineEmail className="text-[26px]" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
