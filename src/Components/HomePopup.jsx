import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const HomePopup = () => {

    const [hidePopup, setHidePopup] = useState(false);

    const handleClick = () => {
        setHidePopup(true);
    }
  return (
    <div className={`bg-[#F7EEE8] bg-opacity-50 flex items-center justify-between z-50 p-3 font-hero ${hidePopup ? "-translate-y-full transition ease-in-out duration-300 absolute" : ""}`}>
      <div className="flex items-center justify-center gap-5">
        <div>
          <img
            src="/assets/mainsvg.svg"
            alt="Main Icon"
          />
        </div>
        <div className="text-sm">
          <p>SNITCH is better on the app</p>
          <p>Extra 10% off | Code : APP10</p>
        </div>
      </div>
          <div className="flex items-center gap-3 text-sm">
              <div className="px-2 py-1 bg-black text-white">OPEN</div>
              <div className="text-sm cursor-pointer" onClick={() => handleClick()}><RxCross2 /></div>
      </div>
    </div>
  );
};

export default HomePopup;
