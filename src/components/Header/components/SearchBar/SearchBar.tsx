"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
function SearchBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleClickSearchBtn = () => {
    if (isVisible && searchTerm) {
      router.push(`/?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    } else {
      setIsVisible((prev) => !prev);
    }
  };

  return (
    <div className="flex gap-x-2 relative pr-6  transition duration-500">
      {isVisible && (
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="샤넬"
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
