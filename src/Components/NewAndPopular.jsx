import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import ProductCard from "./ProductCard";
import img1 from '/assets/Products/img1.jpg'
import img3 from '/assets/Products/img2.jpg'
import img2 from '/assets/Products/img3.jpg'
import img4 from '/assets/Products/img4.jpg'
import img5 from '/assets/Products/img5.webp'
import img6 from '/assets/Products/img6.jpg'

const NewAndPopular = () => {
  const [active, setActive] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleActive = (index) => {
    setActive(index);
    setSelectedCategory(btnText[index]);
  };

  

  const products = [
    // SHIRTS (img1)
    {
      id: 1,
      name: "Linen Shirt",
      category: "shirts",
      price: 1299,
      image: img1,
      colorOptions: ["#5C4033", "#66673E"],
    },
    {
      id: 2,
      name: "Formal Cotton Shirt",
      category: "shirts",
      price: 1499,
      image: img1,
    },
    {
      id: 3,
      name: "Slim Fit Shirt",
      category: "shirts",
      price: 1599,
      image: img1,
      colorOptions: ["#09286F"],
    },
    {
      id: 4,
      name: "Printed Casual Shirt",
      category: "shirts",
      price: 999,
      image: img1,
    },
    {
      id: 5,
      name: "Striped Shirt",
      category: "shirts",
      price: 1399,
      image: img1,
      colorOptions: ["#D62828", "#003049"],
    },
    {
      id: 6,
      name: "Classic Check Shirt",
      category: "shirts",
      price: 1099,
      image: img1,
    },
    {
      id: 7,
      name: "Solid Black Shirt",
      category: "shirts",
      price: 1699,
      image: img1,
    },
    {
      id: 8,
      name: "Mandarin Collar Shirt",
      category: "shirts",
      price: 1399,
      image: img1,
    },

    // T-SHIRTS (img2)
    {
      id: 9,
      name: "Graphic T-Shirt",
      category: "t-shirts",
      price: 799,
      image: img2,
      colorOptions: ["#F77F00", "#D62828"],
    },
    {
      id: 10,
      name: "Plain White T-Shirt",
      category: "t-shirts",
      price: 599,
      image: img2,
    },
    {
      id: 11,
      name: "Oversized Tee",
      category: "t-shirts",
      price: 899,
      image: img2,
    },
    {
      id: 12,
      name: "Muscle Fit T-Shirt",
      category: "t-shirts",
      price: 999,
      image: img2,
      colorOptions: ["#003049"],
    },
    {
      id: 13,
      name: "Color Block Tee",
      category: "t-shirts",
      price: 799,
      image: img2,
    },
    {
      id: 14,
      name: "Striped T-Shirt",
      category: "t-shirts",
      price: 699,
      image: img2,
    },
    {
      id: 15,
      name: "Round Neck Tee",
      category: "t-shirts",
      price: 749,
      image: img2,
      colorOptions: ["#09286F"],
    },
    {
      id: 16,
      name: "Printed Slogan Tee",
      category: "t-shirts",
      price: 899,
      image: img2,
    },

    // TROUSERS (img3)
    {
      id: 17,
      name: "Formal Trousers",
      category: "trousers",
      price: 1499,
      image: img3,
      colorOptions: ["#66673E", "#D62828"],
    },
    {
      id: 18,
      name: "Slim Fit Trousers",
      category: "trousers",
      price: 1599,
      image: img3,
    },
    {
      id: 19,
      name: "Casual Chinos",
      category: "trousers",
      price: 1399,
      image: img3,
    },
    {
      id: 20,
      name: "Stretch Cotton Trousers",
      category: "trousers",
      price: 1299,
      image: img3,
    },
    {
      id: 21,
      name: "Jogger Pants",
      category: "trousers",
      price: 1099,
      image: img3,
      colorOptions: ["#F77F00"],
    },
    {
      id: 22,
      name: "Straight Fit Trousers",
      category: "trousers",
      price: 1499,
      image: img3,
    },
    {
      id: 23,
      name: "Drawstring Trousers",
      category: "trousers",
      price: 999,
      image: img3,
    },
    {
      id: 24,
      name: "Cargo Trousers",
      category: "trousers",
      price: 1199,
      image: img3,
    },

    // JEANS (img4)
    {
      id: 25,
      name: "Regular Fit Jeans",
      category: "jeans",
      price: 1899,
      image: img4,
      colorOptions: ["#09286F"],
    },
    {
      id: 26,
      name: "Slim Fit Denim",
      category: "jeans",
      price: 1799,
      image: img4,
    },
    {
      id: 27,
      name: "Distressed Jeans",
      category: "jeans",
      price: 1999,
      image: img4,
      colorOptions: ["#003049"],
    },
    {
      id: 28,
      name: "Tapered Fit Jeans",
      category: "jeans",
      price: 1699,
      image: img4,
    },
    {
      id: 29,
      name: "Washed Blue Jeans",
      category: "jeans",
      price: 1899,
      image: img4,
    },
    {
      id: 30,
      name: "Black Skinny Jeans",
      category: "jeans",
      price: 1599,
      image: img4,
      colorOptions: ["#5C4033"],
    },
    {
      id: 31,
      name: "Straight Fit Jeans",
      category: "jeans",
      price: 1799,
      image: img4,
    },
    {
      id: 32,
      name: "Bootcut Jeans",
      category: "jeans",
      price: 1499,
      image: img4,
    },

    // SHOES (img5)
    {
      id: 33,
      name: "Running Sneakers",
      category: "shoes",
      price: 2499,
      image: img5,
      colorOptions: ["#003049", "#F77F00"],
    },
    {
      id: 34,
      name: "High-Top Trainers",
      category: "shoes",
      price: 2599,
      image: img5,
    },
    {
      id: 35,
      name: "Slip-On Loafers",
      category: "shoes",
      price: 2299,
      image: img5,
      colorOptions: ["#5C4033"],
    },
    {
      id: 36,
      name: "Canvas Shoes",
      category: "shoes",
      price: 1999,
      image: img5,
    },
    {
      id: 37,
      name: "Formal Leather Shoes",
      category: "shoes",
      price: 2899,
      image: img5,
      colorOptions: ["#D62828"],
    },
    {
      id: 38,
      name: "Ankle Boots",
      category: "shoes",
      price: 2699,
      image: img5,
    },
    {
      id: 39,
      name: "Espadrilles",
      category: "shoes",
      price: 1899,
      image: img5,
    },
    {
      id: 40,
      name: "Training Shoes",
      category: "shoes",
      price: 2599,
      image: img5,
    },

    // ALL (img6)
    { id: 41, name: "Polo Shirt", category: "all", price: 1399, image: img6 },
    {
      id: 42,
      name: "Bomber Jacket",
      category: "all",
      price: 2999,
      image: img6,
      colorOptions: ["#09286F", "#66673E"],
    },
    {
      id: 43,
      name: "Denim Jacket",
      category: "all",
      price: 2799,
      image: img6,
    },
    {
      id: 44,
      name: "Overshirt",
      category: "all",
      price: 2199,
      image: img6,
      colorOptions: ["#5C4033"],
    },
    {
      id: 45,
      name: "Graphic Hoodie",
      category: "all",
      price: 2499,
      image: img6,
    },
    {
      id: 46,
      name: "Puffer Vest",
      category: "all",
      price: 1999,
      image: img6,
    },
    {
      id: 47,
      name: "Athleisure Joggers",
      category: "all",
      price: 1599,
      image: img6,
    },
    {
      id: 48,
      name: "Track Jacket",
      category: "all",
      price: 2299,
      image: img6,
    },
    {
      id: 49,
      name: "Bucket Hat",
      category: "all",
      price: 999,
      image: img6,
      colorOptions: ["#F77F00"],
    },
    { id: 50, name: "Sling Bag", category: "all", price: 1199, image: img6 },
  ];

    const btnText = ["all", "shirts", "trousers", "t-shirts", "jeans", "shoes"];
    
    const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  return (
    <div className="py-10 space-y-5">
      <h1 className="uppercase text-xl text-black font-bold text-center">
        new and popular
      </h1>
      <div className="flex items-center md:gap-3 gap-2 justify-between md:px-4 px-2 overflow-auto">
        {btnText.map((item, index) => (
          <ButtonComponent
            key={index}
            text={item}
            onClick={() => handleActive(index)}
            isActive={active === index}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {filteredProducts.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default NewAndPopular;
