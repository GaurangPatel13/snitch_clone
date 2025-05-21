import FeaturedImageCard from "./FeaturedImageCard";

import img1 from "/assets/Category/img1.jpeg";
import img2 from "/assets/Category/img2.jpeg";
import img3 from "/assets/Category/img3.jpeg";
import img4 from "/assets/Category/img4.jpeg";
import img5 from "/assets/Category/img5.jpeg";
import img6 from "/assets/Category/img6.jpeg";
import img7 from "/assets/Category/img7.jpeg";
import img8 from "/assets/Category/img8.jpeg";
import img9 from "/assets/Category/img9.jpeg";
import img10 from "/assets/Category/img10.jpeg";
import img11 from "/assets/Category/img11.jpeg";
import img12 from "/assets/Category/img12.jpeg";
// import the rest accordingly

const featuredItems = [
  { image: img1, label: "" },
  { image: img2, label: "BESTSELLERS" },
  { image: img3, label: "SHIRTS" },
  { image: img4, label: "TROUSERS" },
  { image: img5, label: "CARGO PANTS" },
  { image: img6, label: "POLO T-SHIRTS" },
  { image: img7, label: "TEXTURED SHIRTS" },
  { image: img8, label: "BAGGY JEANS" },
  { image: img9, label: "ESSENTIALS" },
  { image: img10, label: "PLUS SIZE" },
  { image: img11, label: "SNITCH LUXE" },
  { image: img12, label: "" },
];

const FeaturedCategory = () => {
  return (
    <div className="py-4">
      <h2 className="text-lg font-bold mb-4 text-center">FEATURED CATEGORIES</h2>
      <div className="grid grid-cols-3 gap-2">
        {featuredItems.map((item, index) => (
          <FeaturedImageCard key={index} image={item.image} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;
