import React from 'react';

const CategoryCard = ({ name, children, isActive = false }) => {
  const baseStyle = "w-[170px] h-[145px] rounded-[4px] border border-gray-300 flex flex-col justify-center items-center gap-3 transition-all duration-300 cursor-pointer font-poppins";
  
  const activeStyle = isActive 
    ? "bg-[#DB4444] text-white border-[#DB4444]" 
    : "hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]";
    
  
  const iconColor = isActive ? "text-white" : "text-black group-hover:text-white";

  return (
    <div className={`${baseStyle} ${activeStyle} group`}>
      <div className={`text-4xl ${iconColor} transition-colors duration-300`}>
        {children} 
      </div>
      <span className="text-base font-normal">{name}</span>
    </div>
  );
};

export default CategoryCard;