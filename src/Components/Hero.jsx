import { useState } from "react";
import ImageSlider from "./ImageSlider";
import PincodePopup from "./PincodePopup";
import SearchBar from "./SearchBar";
import MarqueeBar from "./MarqueeBar";

const Hero = ({ onClick }) => {
  

  return (
    <div className="relative">
      <ImageSlider />
      <SearchBar onClick={onClick} />
      
      <MarqueeBar />
    </div>
  );
};

export default Hero;
