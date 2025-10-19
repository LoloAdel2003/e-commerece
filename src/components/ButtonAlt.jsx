import React from 'react'

const ButtonAlt = ({name,onClick}) => {
  return (
    <div onClick={onClick} className="font-500 font-medium text-sm py-[16px] px-[48px] border border-gray-300 rounded-[4px] cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
      {name}
    </div>
  )
}

export default ButtonAlt
