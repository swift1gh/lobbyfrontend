import React from "react";
import searchBtn from "../assets/search.svg";

const SearchBox = () => {
  return (
    <div className="flex max-w-[230px] items-center justify-between gap-2  rounded-full relative px-2">
      <input
        type="text"
        placeholder="Search..."
        className="border text-gray-800 border-none rounded-full focus:outline-none bg-gray-700 focus:bg-gray-200 px-6 py-2 w-full transition-all duration-300 ease-in-out"
      />

      <button className="absolute right-2 w-[30px] h-[30px] rounded-full bg-gradient-to-r from-green-400 to-blue-500 border-0 transition-all duration-300 ease-in-out hover:bg-gray-900 hover:shadow-lg hover:-translate-y-1 active:shadow-none active:translate-y-0 mr-2">
        <img src={searchBtn} alt="search" className="m-auto h-6 " />
      </button>
    </div>
  );
};

export default SearchBox;
