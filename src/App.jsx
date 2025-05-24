import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import FloatFooter from "./Components/FloatFooter";

const App = () => (
  <Router>
      <div className="bg-[#F3F4F6] mx-auto font-hero relative pb-16">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<div>Search Page</div>} />
      </Routes>
      <FloatFooter />
      </div>
  </Router>
);

export default App;
