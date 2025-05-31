import React, { useState } from 'react'
import ButtonComponent from '../Home/ButtonComponent';
import img1 from '/assets/Products/img1.jpg'
import img3 from '/assets/Products/img2.jpg'
import img2 from '/assets/Products/img3.jpg'
import img4 from '/assets/Products/img4.jpg'
import img5 from '/assets/Products/img5.webp'
import img6 from '/assets/Products/img6.jpg'

const SearchCats = () => {
    const [active, setActive] = useState(0);

    const handleActive = (index) => {
    setActive(index);
    setSelectedCategory(btnText[index]);
  };

    const btnText = ["all", "sale", "trending", "plussize", "top", "bottom", "luxe", "accessories"];

    const categories = [
        {
            name: "new",
            image: img1,
        },
        {
            name: "Best sellers",
            image: img2,
        },
        {
            name: "Shirts",
            image: img3,
        },
        {
            name: "Trousers",
            image: img4,
        },
        {
            name: "Cargo Pants",
            image: img5,
        },
        {
            name: "Polo T-shirts",
            image: img6,
        },
        {
            name: "Textured Shirts",
            image: img1,
        },
        {
            name: "Baggy Jeans",
            image: img2,
        },
    ];

  return (
      <div className='space-y-5'>
          <div className="flex items-center md:gap-3 gap-2 justify-between overflow-auto">
        {btnText.map((item, index) => (
          <ButtonComponent
            key={index}
            text={item}
            onClick={() => handleActive(index)}
            isActive={active === index}
          />
        ))}
          </div>
          
          <div className='grid grid-cols-1 gap-2'>
              {categories.map((item, index) => (
                  <div key={index} className='flex items-center gap-4 hover:cursor-pointer hover:bg-gray-50'>
                      <img src={item.image} className='w-24 h-24 object-cover object-top' alt="" />
                      <p className='text-lg font-bold uppercase'>{item.name}</p>
                  </div>
              ))}
          </div>
          
    </div>
  )
}

export default SearchCats