import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-black px-6 py-10 space-y-6 text-sm">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h3 className="font-bold uppercase mb-2">Company</h3>
          <ul className="space-y-1">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/return-policy" className="hover:underline">Return/Exchange Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="invisible mb-2">.</h3>
          <ul className="space-y-1">
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="invisible mb-2">.</h3>
          <ul className="space-y-1">
            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/sitemap" className="hover:underline">Sitemap</Link></li>
          </ul>
        </div>
      </div>
        <div className="flex items-start justify-center gap-3 mt-2 md:mt-0">
          <a href="#" className="text-[#B55E34] text-lg"><FaFacebookF /></a>
          <a href="#" className="text-[#B55E34] text-lg"><FaInstagram /></a>
          <a href="#" className="text-[#B55E34] text-lg"><FaLinkedinIn /></a>
          <a href="#" className="text-[#B55E34] text-lg"><FaGoogle /></a>
        </div>

      <div className="text-center space-y-2">
        <h4 className="font-bold uppercase">Download App</h4>
        <div className="flex justify-center gap-4">
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_%28black%29_SVG.svg"
              alt="App Store"
              className="h-10"
            />
          </a>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
