"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
function SearchBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const placeholder = "버버리";

  const router = useRouter();

  const handleClickSearchBtn = () => {
    if (isVisible) {
      handleSearch();
    } else {
      setIsVisible((prev) => !prev);
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && isVisible) {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const term = searchTerm || placeholder;
    console.log("term", term);
    router.push(`/?search=${encodeURIComponent(term)}`);
    setSearchTerm("");
  };

  return (
    <div className="flex gap-x-2 relative pr-6  transition duration-500">
      {isVisible && (
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          value={searchTerm}
          className="border rounded-sm  focus:border-black transition-all duration-500 ease-in-out outline-none  cursor-pointer text-gray-500 font-light placeholder:text-gray-400 text-xs px-2 py-1"
        />
      )}

      <IoIosSearch
        onClick={handleClickSearchBtn}
        className="cursor-pointer w-full text-base mt-1 -translate-x-8"
      />
    </div>
  );
}

export default SearchBar;
