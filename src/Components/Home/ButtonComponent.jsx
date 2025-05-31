import React from 'react'

const ButtonComponent = ({ text, isActive, onClick }) => {
  return (
      <button
      onClick={onClick}
      className={isActive
        ? `border text-white bg-black px-3 cursor-pointer py-1 uppercase text-xs font-semibold text-center`
        : `border text-black px-3 cursor-pointer py-1 uppercase text-xs font-semibold text-center`}
    >
      {text}
    </button>
  )
}

export default ButtonComponent