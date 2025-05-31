import { useEffect, useState, useRef } from "react";
import img1 from "/assets/Hero/img1.jpeg";
import img2 from "/assets/Hero/img2.jpeg";
import img3 from "/assets/Hero/img3.jpeg";
import img4 from "/assets/Hero/img4.jpeg";
import img5 from "/assets/Hero/img5.jpeg";

const images = [img1, img2, img3, img4, img5];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    startSlider();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
  };

  const goTo = (i) => {
    clearInterval(intervalRef.current);
    setIndex(i);
    startSlider();
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img key={i} src={img} alt={`Slide ${i}`} className="w-full object-cover object-top flex-shrink-0" />
        ))}
      </div>
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 text-white text-3xl">
        <button className="cursor-pointer" onClick={() => goTo((index - 1 + images.length) % images.length)}><svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="black" fill-opacity="0.45"></circle><path d="M17.8385 19.7857L23.9051 13.719L22.9859 12.7998L16 19.7857L22.9859 26.7716L23.9051 25.8524L17.8385 19.7857Z" fill="white"></path></svg></button>
        <button className="cursor-pointer" onClick={() => goTo((index + 1) % images.length)}><svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" transform="matrix(-1 0 0 1 40 0)" fill="black" fill-opacity="0.25"></circle><path d="M22.1615 19.7857L16.0949 13.719L17.0141 12.7998L24 19.7857L17.0141 26.7716L16.0949 25.8524L22.1615 19.7857Z" fill="white"></path></svg></button>
      </div>
    </div>
  );
};

export default ImageSlider;
