import Link from "next/link";
import HeaderMenu from "./components/HeaderMenu";

function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-10 flex flex-col bg-white border-b-3 border-black h-52 border-b-4 ">
      <div className="flex justify-between items-center bg-black text-white px-14 py-1 text-sm">
        <p>력셔리 쇼핑은 Blan</p>
        <p>Online luxury boutique</p>
        <HeaderMenu />
      </div>
      <div className="flex justify-center items-center flex-grow pt-2.5">
        <div className="text-5xl">
          <Link href="/">Blan</Link>
        </div>
      </div>
      <nav className="mx-auto">
        <ul className="flex justify-center items-center gap-10 pb-3.5 max-w-screen-md font-medium ">
          <li className="hover:font-bold">
            <Link href="#">NEW IN</Link>
          </li>
          <li className="hover:font-bold">
            <Link href="#" className="text-red-700 font-bold">
              BRAND
            </Link>
          </li>
          <li>
            <Link href="#">의류</Link>
          </li>
          <li>
            <Link href="#">슈즈</Link>
          </li>
          <li>
            <Link href="#">가방</Link>
          </li>
          <li>
            <Link href="#">액세서리</Link>
          </li>
          <li>
            <Link href="#">주얼리</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
