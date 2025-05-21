const FeaturedImageCard = ({ image, label }) => {
  return (
    <div className="relative w-full aspect-[3/4] overflow-hidden">
      <img src={image} alt={label} className="w-full h-full object-cover"/>
      <div className="absolute bottom-5 left-0 right-0 bg-opacity-60 text-white text-sm font-semibold text-center py-1 ">
        {label}
      </div>
    </div>
  );
};

export default FeaturedImageCard;
