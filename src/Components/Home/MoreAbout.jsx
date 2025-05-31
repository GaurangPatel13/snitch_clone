import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "T-Shirts", "Shirts", "Joggers", "Shorts", "Trousers", "Sweatshirts & Hoodies",
  "Sweaters", "Bags", "Accessories", "Belts", "Blazers", "Boxers",
  "Cargo Pants", "Jackets", "Co-ords", "Hoodies", "Jeans", "Night Suit & Pyjamas",
  "Overshirt", "Perfumes", "Shoes", "Sunglasses"
];

const popularSearches = [
  "t-shirts for men", "jackets for men", "t-shirts for men", "cargo", "baggy jeans",
  "joggers for men", "bags men", "hoodie", "jeans mens", "sneakers for men", "varsity jacket",
  "formal pants for men", "printed shirts for men", "boxers men", "overshirt", "bracelet men",
  "belts for men", "men beach outfit", "caps for men", "trousers for men", "cargo pants",
  "co ord sets men", "sweatshirts for men", "denim jacket", "shorts for men", "shirts for men",
  "chinos for men", "black shirt for men", "solid shirt", "black t shirt men", "bracelet men",
  "sneakers", "stylish t-shirts", "printed t-shirts", "varsity jacket", "black shirt men",
  "shirt men", "stylish shirts for men", "bracelet for men", "accessories for men",
  "oversized shirts men", "white shirts for men", "co ord sets for men", "night suit for men",
  "pyjamas men", "overshirts for men", "black t-shirt men", "black t-shirt", "black shirt men",
  "black kurta for men"
];

const accessories = [
  "Rosewood Beaded Bracelet", "EternalWrap Black Bracelet", "Crisdan Blue Braided Bracelet",
  "Black Ravine Brown Bracelet", "Divine Skull Cross Chain", "Bird of Lore Chain",
  "Rogue Band Bracelet", "Alpha Threads SS Chain", "Bronze Lava Bracelet",
  "Bead of Karma Bracelet", "Matte Black Box Chain", "Bracelet Heavenwood Bracelet",
  "White Square Chain", "Attraction Two Metal Braided Bracelet", "Duo Gold & Silver SS Chain",
  "Nero Wavy Black Bracelet", "MadCo SS Chain", "Rogue Red Braided Bracelet",
  "Clear Coated SS Chain", "Midnight Eclipse Bead Bracelet", "Black Cuboid SS Chain",
  "Woewact Dollar Brown Bracelet"
];

const Section = ({ title, items, cols = 3 }) => {
  const gridColsClass = cols === 2 ? "grid-cols-2" : "grid-cols-3";

  return (
    <div className="space-y-2 text-sm text-gray-800">
      <h3 className="font-bold text-black uppercase">{title}</h3>
      <div className={`grid ${gridColsClass} gap-2`}>
        {items.map((item, index) => (
          <Link
            to={`/search?q=${encodeURIComponent(item)}`}
            key={index}
            className="hover:underline text-black text-xs"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};


const MoreAbout = () => {
  return (
    <div className="p-5 md:p-10 bg-[#F7EEE8] space-y-8">
      <h2 className="text-xl font-bold text-black">
        More about shopping At Snitch for men
      </h2>
      <Section title="Top Categories" items={categories} />
      <Section title="Popular Searches" items={popularSearches} />
      <Section title="Most Popular Accessories" items={accessories} cols={2} />
    </div>
  );
};

export default MoreAbout;
