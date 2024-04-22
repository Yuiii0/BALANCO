"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderMenu from "./components/HeaderMenu";
import SearchBar from "./components/SearchBar";

function Header() {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY < 160);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showNav]);

  const handleClickNavItem = () => {
    alert("BRAND를 눌러보세요 😮");
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-10 flex flex-col bg-white border-b ">
      <div className="flex justify-between items-center font-semibold border-t-[8px] border-black text-gray-900 px-14 pt-3 text-sm">
        <p>력셔리 쇼핑은 Balanco</p>
        <HeaderMenu />
      </div>

      <div className="flex justify-center py-3">
        <div className="text-5xl pb-4">
          <Link href="/" className="font-bold font-oswald tracking-tighter">
            BALANCO
          </Link>
        </div>
      </div>
      <div className="flex justify-end absolute top-16 right-0">
        <SearchBar />
      </div>
      {showNav && (
        <div className="flex">
          <nav className="mx-auto">
            <ul className="flex justify-center items-center gap-10 pb-3.5 max-w-screen-md font-semibold text-[15px]">
              <li className="hover:text-gray-600">
                <Link href="#">NEW IN</Link>
              </li>
              <li className="text-custom-gray hover:text-warning">
                <Link href="/brands" className="font-bold ">
                  BRAND
                </Link>
              </li>
              <li className="hover:text-gray-600">
                <button onClick={handleClickNavItem}>의류</button>
              </li>
              <li className="hover:text-gray-600">
                <button onClick={handleClickNavItem}>슈즈</button>
              </li>
              <li className="hover:text-gray-600">
                <button onClick={handleClickNavItem}>가방</button>
              </li>
              <li className="hover:text-gray-600">
                <button onClick={handleClickNavItem}>악세서리</button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
