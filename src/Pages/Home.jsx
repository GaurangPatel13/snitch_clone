import { useEffect, useState } from "react";
import FeaturedCategory from "../Components/FeaturedCategory";
import Hero from "../Components/Hero";
import HomePopup from "../Components/HomePopup";
import PincodePopup from "../Components/PincodePopup";
import PincodeAreas from "../Components/PincodeAreas";
import ShopYourSize from "../Components/ShopYourSize";
import SearchBar from "../Components/SearchBar";
import ImageSlider from "../Components/ImageSlider";
import MarqueeBar from "../Components/MarqueeBar";
import NewAndPopular from "../Components/NewAndPopular";
import MoreAbout from "../Components/MoreAbout";
import Experience from "../Components/Experience";
import CollectionsOmnichannel from "../Components/CollectionsOmnichannel";
import WhyShop from "../Components/WhyShop";
import Footer from "../Components/Footer";

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
      <NewAndPopular />
      <div className="bg-[#F7EEE8]">
        <MoreAbout />
        <Experience />
        <CollectionsOmnichannel />
        <WhyShop />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
