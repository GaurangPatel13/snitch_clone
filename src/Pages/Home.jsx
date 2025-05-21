import { useState } from "react";
import FeaturedCategory from "../Components/FeaturedCategory";
import Hero from "../Components/Hero";
import HomePopup from "../Components/HomePopup";
import PincodePopup from "../Components/PincodePopup";
import PincodeAreas from "../Components/PincodeAreas"; // Import the new component
import ShopYourSize from "../Components/ShopYourSize";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [pin, setPin] = useState("");
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");

  const handlePincodeSubmit = (enteredPin, areaList) => {
    if (enteredPin) {
      setPin(enteredPin);
      setAreas(areaList);
    }
    setShowPopup(false); // Close popup after submit
  };

  const handleAreaSelect = (areaName) => {
    setSelectedArea(areaName);
  };

  return (
    <div className="max-w-lg mx-auto font-hero">
      <HomePopup />

      {showPopup && <PincodePopup onSubmit={handlePincodeSubmit} />}
      
      <Hero onClick={() => setShowPopup(true)} />

      {/* Show PincodeAreas if pincode is submitted and no area is selected yet */}
      {!showPopup && areas.length > 0 && !selectedArea && (
        <PincodeAreas pin={pin} areas={areas} onSelectArea={handleAreaSelect} />
      )}

      {/* Optionally show success message once area is selected */}
      {selectedArea && (
        <div className="p-4 bg-green-50 text-green-800 border border-green-300 rounded my-4">
          ✅ Delivery available in <strong>{selectedArea}</strong> ({pin})
        </div>
      )}

      <FeaturedCategory />
      <ShopYourSize />
    </div>
  );
};

export default Home;
