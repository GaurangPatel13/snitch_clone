import React from 'react'
import { GoChevronLeft } from 'react-icons/go';
import { IoIosSearch } from 'react-icons/io';
import { useNavigate } from 'react-router-dom'

const Header = ({headerTitle='new arrivals', icon=<IoIosSearch />}) => {

    const navigate = useNavigate();

  return (
      <div className='flex items-center justify-between shadow py-2 px-2 sticky top-0 z-50 bg-white'>
          <button onClick={() => navigate(-1)} className='cursor-pointer text-4xl'>
              <GoChevronLeft />
          </button>
          <p className='font-bold text-xl uppercase'>{headerTitle}</p>
          <button className='cursor-pointer text-4xl'>
              {icon}
          </button>
    </div>
  )
}

export default Header