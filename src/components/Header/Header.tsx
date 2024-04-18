import Link from "next/link";
import HeaderMenu from "./components/HeaderMenu";
import SearchBar from "./components/SearchBar";

function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-10 flex flex-col bg-white border-b ">
      <div className="flex justify-between items-center font-semibold border-t-[8px] border-black text-gray-900 px-14 pt-3 text-sm">
        <p className="">력셔리 쇼핑은 Balanco</p>
        <HeaderMenu />
      </div>

      <div className="flex justify-center py-3">
        <div className="text-5xl">
          <Link href="/" className="font-bold ">
            BALANCO
          </Link>
        </div>
      </div>
      <div className="flex justify-end absolute top-16 right-0">
        <SearchBar />
      </div>
      <div className="flex pt-4">
        <nav className="mx-auto">
          <ul className="flex justify-center items-center gap-10 pb-3.5 max-w-screen-md font-semibold text-[15px]">
            <li className="hover:text-gray-600">
              <Link href="#">NEW IN</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link href="#" className=" font-bold text-gray-400">
                BRAND
              </Link>
            </li>
            <li className="hover:text-gray-600">
              <Link href="#">의류</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link href="#">슈즈</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link href="#">가방</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link href="#">액세서리</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link href="#">주얼리</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
