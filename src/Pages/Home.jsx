import { useEffect, useState } from "react";
import FeaturedCategory from "../Components/Home/FeaturedCategory";
import Hero from "../Components/Home/Hero";
import HomePopup from "../Components/Home/HomePopup";
import PincodePopup from "../Components/Home/PincodePopup";
import PincodeAreas from "../Components/Home/PincodeAreas";
import ShopYourSize from "../Components/Home/ShopYourSize";
import SearchBar from "../Components/Home/SearchBar";
import ImageSlider from "../Components/Home/ImageSlider";
import MarqueeBar from "../Components/Home/MarqueeBar";
import NewAndPopular from "../Components/Home/NewAndPopular";
import MoreAbout from "../Components/Home/MoreAbout";
import Experience from "../Components/Home/Experience";
import CollectionsOmnichannel from "../Components/Home/CollectionsOmnichannel";
import WhyShop from "../Components/Home/WhyShop";
import Footer from "../Components/Home/Footer";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [pin, setPin] = useState("");
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");

  // Load from localStorage on first load
  useEffect(() => {
    const savedPin = localStorage.getItem("pin");
    const savedArea = localStorage.getItem("selectedArea");

    if (savedPin) setPin(savedPin);
    if (savedArea) setSelectedArea(savedArea);
  }, []);

  // Save pin and area to localStorage
  useEffect(() => {
    if (pin) localStorage.setItem("pin", pin);
    if (selectedArea) localStorage.setItem("selectedArea", selectedArea);
  }, [pin, selectedArea]);

  const handlePincodeSubmit = (enteredPin, areaList) => {
    if (enteredPin) {
      setPin(enteredPin);
      setAreas(areaList);
    }
    setShowPopup(false);
  };

  const handleAreaSelect = (areaName) => {
    setSelectedArea(areaName);
    setAreas([]);
  };

  return (
    <div className="sm:max-w-lg w-full mx-auto font-hero bg-white">
      <HomePopup />

      <div className="relative">
        <ImageSlider />
        <SearchBar
          onClick={() => setShowPopup(true)}
          selectedArea={selectedArea}
        />
        <MarqueeBar />
      </div>

      {showPopup && <PincodePopup onSubmit={handlePincodeSubmit} />}

      {!showPopup && areas.length > 0 && !selectedArea && (
        <PincodeAreas
          pin={pin}
          areas={areas}
          onSelectArea={handleAreaSelect}
        />
      )}

      <FeaturedCategory />
      <ShopYourSize />
      <NewAndPopular title="New and popular" />
      
    </div>
  );
};

export default Home;
