import React from 'react'
import Header from '../Components/New/Header'
import NewAndPopular from '../Components/Home/NewAndPopular'

const New = () => {
  return (
      <div className='sm:max-w-lg w-full mx-auto font-hero bg-white pb-5 relative'>
          <Header />
          <NewAndPopular />
    </div>
  )
}

export default New