import React from 'react'
import img from "/assets/Shop/img1.jpg";

const ShopYourSize = () => {
  return (
      <div className='text-black text-lg font-bold mb-4 text-center space-y-6 py-4'>
          <p>SHOP YOUR SIZE</p>
          <div className='w-full'>
              <img src={img} alt="" />
          </div>
    </div>
  )
}

export default ShopYourSize