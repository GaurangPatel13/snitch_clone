import { useState } from "react";

const PincodeAreas = ({ pin, areas, onSelectArea }) => {
  const [selectedArea, setSelectedArea] = useState("");
  const [select, setSelect] = useState(false);

  const onSelectedArea = (areaName) => {
    setSelectedArea(areaName);
    setSelect(true);
  };

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-black/65 h-screen w-full z-50">
      <div className="p-4 max-w-lg w-120 mx-auto mt-5 border bg-white border-gray-300 rounded shadow">
        <h2 className="text-xl font-semibold">Select Your Area for Pincode: {pin}</h2>
        <div className="mt-4 space-y-2">
          {areas.map((area, i) => (
            <div key={i}>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="area"
                  value={area.Name}
                  onChange={() => onSelectedArea(area.Name)}
                />
                <span>{area.Name}</span>
              </label>
            </div>
          ))}
          {select && (
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
              onClick={() => onSelectArea(selectedArea)} // Send selected area back
            >
              Select
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PincodeAreas;
