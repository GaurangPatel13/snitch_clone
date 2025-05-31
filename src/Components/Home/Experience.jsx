import React from "react";
import { IoCheckmarkDone } from "react-icons/io5";

const Experience = () => {
  return (
    <div className="p-5 bg-[#F7EEE8] space-y-6 text-[#444]">
          <h2 className="text-2xl font-bold text-black">
              The SNITCH Shopping Experience –<br/>
        Where Digital Meets Style
      </h2>

      <p>
        At SNITCH, we redefine the modern shopping experience, merging seamless
        digital convenience with engaging in-store interactions. Whether you're
        shopping online or visiting our immersive retail spaces, we ensure a
        smooth, stylish, and hassle-free journey that caters to today’s
        fashion-forward men.
      </p>

      <p>
        Our direct-to-consumer (D2C) approach eliminates traditional retail
        barriers, giving you complete control over how and where you engage with
        our trend-driven menswear collections. From effortless online browsing to
        hands-on in-store exploration, SNITCH lets you shop on your terms, at
        your pace.
      </p>

      <h3 className="text-xl font-semibold text-black">
        Shop Anytime, Anywhere – The Digital Shopping Experience
      </h3>

      <p>
        📱 <strong>24/7 Accessibility – Fashion at Your Fingertips:</strong> Gone
        are the days of restrictive store hours. SNITCH online shopping allows
        you to browse, select, and purchase from our curated menswear collections
        anytime, anywhere. Whether you’re searching for sharp formalwear,
        contemporary casual styles, or trend-forward accessories, our website
        provides an intuitive, fast, and stylish experience.
      </p>

      <h4 className="text-lg font-semibold text-black">
        Key Features of SNITCH Online Shopping:
      </h4>

      <ul className="list-disc pl-5 space-y-2">
        <li>
          <IoCheckmarkDone className="inline" /> <strong>User-Friendly Navigation</strong> – Explore categories
          effortlessly, from joggers and co-ords to sunglasses and accessories.
        </li>
        <li>
          <IoCheckmarkDone className="inline" /> <strong>AI-Powered Recommendations</strong> – Get personalized outfit
          suggestions based on your style preferences.
        </li>
        <li>
          <IoCheckmarkDone className="inline" /> <strong>Detailed Product Views</strong> – High-quality images,
          360-degree views, and fabric close-ups ensure zero guesswork when
          shopping online.
        </li>
        <li>
          <IoCheckmarkDone className="inline" /> <strong>Secure & Easy Checkout</strong> – Multiple payment options,
          fast processing, and seamless checkout make buying a breeze.
        </li>
        <li>
          <IoCheckmarkDone className="inline" /> <strong>Exclusive Online Drops</strong> – Stay ahead of the trends
          with limited-edition online-only collections.
        </li>
      </ul>

      <p>
        <strong>Style Tip:</strong> Need outfit inspiration? Our Lookbook and
        Shop the Look features help you discover effortless styling ideas in just
        a few clicks.
      </p>
    </div>
  );
};

export default Experience;
