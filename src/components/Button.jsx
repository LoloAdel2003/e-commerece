import React from 'react'

const Button = ({name,event}) => {
  return (
    <div>
        <button onClick={event} className="w-[140px] md:w-[159px] h-[50px] mdh-[56px] rounded-[4px] bg-[#DB4444] text-white flex justify-center items-center text-[14px] md:text-[16px]">
            {name}
        </button>

     
    </div>
  )
}

export default Button
