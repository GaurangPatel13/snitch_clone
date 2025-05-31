import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 text-4xl border p-2">
      <CiSearch />
      <input
        type="text"
        placeholder="Search products"
        className=" rounded w-full text-xs placeholder:text-gray-400"
        // onClick={() => navigate("/search")}
      />
    </div>
  );
};

export default SearchBar;
