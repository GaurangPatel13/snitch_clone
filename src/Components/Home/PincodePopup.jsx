import { useEffect, useRef, useState } from "react";

const PincodePopup = ({ onSubmit }) => {
  const ref = useRef();
  const [pin, setPin] = useState("");
  const [Hide, setHide] = useState(false);

  useEffect(() => {
    const closeOnOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onSubmit(null, []); // Close with no data
      }
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, [onSubmit]);

  const handleApply = async () => {
    try {
      const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
      const data = await res.json();
      const areaList = data[0]?.PostOffice || [];
      onSubmit(pin, areaList); // Send pin + area list to parent
      setHide(true);
    } catch (err) {
      onSubmit(pin, []);
    }
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 max-w-lg mx-auto rounded-md w-[95%] z-50 overflow-hidden text-center ${Hide ? "hidden transition duration-500" : ""}`}>
      <div className="bg-white p-4 shadow-2xl space-y-5 pb-16" ref={ref}>
        <div className="flex items-center justify-center w-full">
          <p className="h-1 w-14 bg-black rounded-full"></p>
        </div>
        <p className="text-xl uppercase">Check Delivery Time</p>
        <p>Enter pincode and see when you'll receive your order</p>
        <div className="flex items-center justify-between border border-gray-300 p-2">
          <input
            type="number"
            maxLength={6}
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Enter Pincode"
            className="w-full focus:outline-none"
          />
          <button onClick={handleApply} className="cursor-pointer ml-2 text-blue-600 font-semibold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PincodePopup;
