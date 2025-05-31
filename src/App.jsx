import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import FloatFooter from "./Components/Home/FloatFooter";
import Search from "./Pages/Search";
import MoreAbout from "./Components/Home/MoreAbout";
import Experience from "./Components/Home/Experience";
import CollectionsOmnichannel from "./Components/Home/CollectionsOmnichannel";
import WhyShop from "./Components/Home/WhyShop";
import Footer from "./Components/Home/Footer";
import New from "./Pages/New";
import Cart from "./Pages/Cart";

const App = () => (
  <Router>
      <div className="bg-[#F3F4F6] mx-auto font-hero relative pb-16">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/new" element={<New />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <div className="bg-[#F7EEE8] sm:max-w-lg w-full mx-auto">
        <MoreAbout />
        <Experience />
        <CollectionsOmnichannel />
        <WhyShop />
        <Footer />
      </div>
      <FloatFooter />
      </div>
  </Router>
);

export default App;
