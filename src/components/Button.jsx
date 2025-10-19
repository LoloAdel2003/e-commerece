import React from 'react';

const Button = ({ name, event = () => {}, padding = '0' }) => {
  return (
    <div>
      <button
        onClick={event}
        className={`w-[140px] md:w-[190px] h-[50px] md:h-[56px]  rounded-[4px] bg-[#DB4444] text-white flex justify-center items-center text-[14px] md:text-[16px] px-[${padding}] 
        transition-all duration-300 ease-in-out hover:bg-[#e85c5c] hover:-translate-y-1 hover:shadow-lg active:scale-95`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
