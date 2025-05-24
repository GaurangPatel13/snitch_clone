import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdFiberNew } from "react-icons/md";
import { RiMenuSearchLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";

const FloatFooter = () => {
  return (
    <div className="max-w-lg mx-auto fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md z-50 flex justify-around items-center py-5">
      <Link to="/" className="flex flex-col items-center text-black text-xs">
        <FaHome className="text-2xl" />
      </Link>
      <Link to="/search" className="flex flex-col items-center text-black text-xs">
        <RiMenuSearchLine className="text-2xl" />
      </Link>
      <Link to="/new" className="flex flex-col items-center text-black text-sm font-bold">
        <span>NEW</span>
      </Link>
      <Link to="/cart" className="flex flex-col items-center text-black text-xs relative">
        <FaShoppingCart className="text-2xl" />
      </Link>
      <Link to="/profile" className="flex flex-col items-center text-black text-xs">
        <BsPerson className="text-2xl" />
      </Link>
    </div>
  );
};

export default FloatFooter;
