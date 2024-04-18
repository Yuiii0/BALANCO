"use client";

import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
function SearchBar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleInput = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="flex gap-x-2 mr-14 relative  transition duration-500">
      {isVisible && (
        <input
          placeholder="샤넬"
          className="border rounded-sm  focus:border-black transition-all duration-500 ease-in-out outline-none  cursor-pointer text-gray-500 font-light placeholder:text-gray-400 text-xs px-2 py-1"
        />
      )}
      <IoIosSearch
        onClick={toggleInput}
        className="cursor-pointer w-full text-base mt-1 -translate-x-8"
      />
    </div>
  );
}

export default SearchBar;
