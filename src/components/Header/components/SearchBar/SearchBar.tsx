"use client";

import { useRouter } from "next/navigation";
import { KeyboardEventHandler, useState } from "react";
import { IoIosSearch } from "react-icons/io";

function SearchBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const placeholder = "버버리";
  const router = useRouter();

  const handleClickSearchBtn = () => {
    if (isVisible) {
      handleSearch();
    }
    setIsVisible((prev) => !prev);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (isVisible && e.key === "Enter" && !e.nativeEvent.isComposing) {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const term = searchTerm || placeholder;
    router.push(`/?search=${encodeURIComponent(term)}`);
    setSearchTerm("");
  };

  return (
    <>
      <div className="flex gap-x-2 relative pr-6 sm-max:pr-5 transition duration-500 sm-max:-translate-y-4 ">
        <input
          onInput={(e) => setSearchTerm(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          value={searchTerm}
          className={`border rounded-sm focus:border-black transition-all duration-500 ease-in-out outline-none cursor-pointer text-gray-500 font-light placeholder:text-gray-400 text-xs px-2 py-1 sm-max:py-0 ${
            isVisible ? "w-40 sm-max:w-20 opacity-100" : "w-0 opacity-0"
          }`}
        />
      </div>
      <IoIosSearch
        onClick={handleClickSearchBtn}
        className="cursor-pointer w-full text-lg mt-1 -translate-x-12 sm-max:-translate-x-4 sm-max:-translate-y-5 "
      />
    </>
  );
}
export default SearchBar;
