import React from 'react'
import FirstCart from '../Components/Cart/FirstCart'
import Header from '../Components/New/Header'
import { CiHeart } from 'react-icons/ci'

const Cart = () => {
  return (
      <div className="sm:max-w-lg w-full mx-auto font-hero bg-white">
          <Header headerTitle='cart' icon={<CiHeart />} />
          <FirstCart />
    </div>
  )
}

export default Cart