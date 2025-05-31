import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

    const [fav, setFav] = useState(false)

    const handleClick = () => {
        setFav(!fav);
    };
    
  return (
    <Link to={'/search'}>
      <div className="max-h-[30rem] max-w-[300px] h-full shadow relative cursor-pointer">
      <div className="flex items-center justify-center w-full">
        <img src={product.image} className="h-full object-cover" alt="" />
      </div>
      <div className=" p-2">
        <p>{product.name}</p>
        <p>₹{product.price}</p>
        <div className="flex products-center gap-1 mt-1">
          {product.colorOptions?.slice(0, 3).map((color, index) => (
            <span
              key={index}
              className="w-2.5 h-2.5"
              style={{ backgroundColor: color }}
            ></span>
          ))}
          {product.colorOptions?.length > 3 && (
            <span className="text-xs text-gray-600">
              +{product.colorOptions.length - 3}
            </span>
          )}
        </div>
          </div>
          <button className="absolute top-2 right-2 text-2xl transition-all duration-300 cursor-pointer" onClick={()=> handleClick()}>
              {fav === true ? <FaHeart className="text-red-600" /> : <CiHeart className="text-red-500" />}
          </button>
    </div>
    </Link>
  );
};

export default ProductCard;
