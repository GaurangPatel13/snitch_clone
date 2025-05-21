import { CiSearch } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onClick }) => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-4 text-white left-1/2 transform -translate-x-1/2 w-full max-w-lg px-4">
      <div className="p-3 rounded flex flex-col space-y-2">
        <div className="font-medium text-lg" onClick={onClick}>
                  <p>Enter Pincode</p>
                  <div className="flex items-center">
                      <p className="text-xs">Use your pincode to find delivery estimate</p><IoChevronDown />
                  </div>
              </div>
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
