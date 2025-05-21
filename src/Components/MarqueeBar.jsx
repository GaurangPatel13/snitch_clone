import Marquee from "react-fast-marquee";

const MarqueeBar = () => {
  return (
    <div className="absolute bottom-0 w-full bg-black/65 text-white py-1 max-w-lg text-xs">
      <Marquee speed={60} gradient={false}>
        &nbsp;FREE 7 DAY RETURNS&nbsp;&nbsp;|&nbsp;&nbsp;<span className="text-[#E58E6F]">MADE IN INDIA</span>&nbsp; FOR THE WORLD&nbsp;&nbsp;|&nbsp;&nbsp;FLAT 20% OFF ON PURCHASE
      </Marquee>
    </div>
  );
};

export default MarqueeBar;
