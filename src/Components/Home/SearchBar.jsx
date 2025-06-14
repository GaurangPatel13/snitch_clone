import { CiSearch } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onClick, selectedArea }) => {
  const navigate = useNavigate();

  const pin = localStorage.getItem("pin");

  const reset = () => {
    localStorage.removeItem("pin");
    localStorage.removeItem("selectedArea");
    window.location.reload();
  }

  return (
    <div className="absolute top-4 text-white left-1/2 transform -translate-x-1/2 w-full max-w-lg px-4">
      <div className="p-3 rounded flex flex-col space-y-2">
        <div className="font-medium text-lg" onClick={onClick}>
          <p>{selectedArea || "Enter Pincode"}</p>
          <div className="flex items-center">
            <p className="text-xs">
              {selectedArea ? `Delivery in 5 days Delivery available in ${selectedArea} ${pin}` : "Use your pincode to find delivery estimate"}
            </p>
            <IoChevronDown />
          </div>
        </div>
        {pin && (
          <span className="text-xs" onClick={() => reset()}>reset</span>
        )}
        <div className="flex items-center gap-2 text-4xl border p-2">
          <CiSearch />
          <input
            type="text"
            placeholder="Search products"
            className=" rounded w-full text-xs placeholder:text-white"
            onClick={() => navigate("/search")}
          />
        </div>
      </div>
    </div>
  );
};


export default SearchBar;
