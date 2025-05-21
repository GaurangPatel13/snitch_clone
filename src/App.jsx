import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => (
  <Router>
      <div className="max-w-lg mx-auto font-hero">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<div>Search Page</div>} />
    </Routes>
      </div>
  </Router>
);

export default App;
