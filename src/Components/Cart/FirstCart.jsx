import React from 'react'
import Header from '../New/Header'

const FirstCart = () => {
  return (
      <div className='px-5 pb-2 flex flex-col gap-13'>
          <div className='flex items-center justify-center w-full'>
              <img className='w-1/2' src="https://img.freepik.com/free-vector/doodle-shopping-bag_1034-533.jpg?ga=GA1.1.1864150380.1732104550&semt=ais_hybrid&w=740" alt="" />
          </div>
          <h1 className='text-xl font-bold text-center uppercase'>Your bag is empty</h1>
          <p className='px-8 text-center text-sm'>Your cart is ready to roll, but it's feeling a bit empty without some stylish finds.</p>
          <button className='bg-black text-white w-full py-4 uppercase font-semibold cursor-pointer'>start shopping</button>
    </div>
  )
}

export default FirstCart