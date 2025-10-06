import React, { useState } from 'react';


const RatingStars = ({ rating = 0 }) => {
  const totalStars = 5;
  const filledStars = Math.round(rating); // تقريب لعدد النجوم الممتلئة

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < filledStars ? 'text-orange-400' : 'text-gray-300'} fill-current`}
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.207-6.002 5.856 1.416 8.284L12 18.283l-7.414 3.899 1.416-8.284-6.002-5.856 8.332-1.207L12 .587z" />
        </svg>
      ))}
    </div>
  );
};

// المكون الرئيسي لبطاقة المنتج
const Cards = ({ img, price, title, NewPrice, OldPrice, num, rating = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
        className="w-[270px] h-[350px] font-poppins relative" // Added relative for absolute positioning of Add To Cart
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[250px] rounded-[4px] bg-[#F5F5F5] flex justify-center items-center">
        {/* صورة المنتج */}
        <img src={img} alt={title} className="max-w-[80%] max-h-[80%] object-contain" />
        
        {price && (
          <div className="absolute text-[12px] top-[12px] left-[12px] bg-[#DB4444] text-white rounded-[4px] w-[55px] h-[26px] flex justify-center items-center">
            {price}
          </div>
        )}
        
        {/* أيقونات الأكشن (Heart و Eye) */}
        <div className="absolute top-[12px] right-[12px] flex flex-col gap-[8px]">
          {/* أيقونة القلب (المفضلة) */}
          <div className="w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center cursor-pointer shadow-sm hover:bg-gray-100 transition-colors">
            {/* أيقونة القلب SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </div>
          
          <div className="w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center cursor-pointer shadow-sm hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
        </div>

        {/* Add To Cart button - conditionally rendered based on hover */}
        {isHovered && (
          <div className="absolute bottom-0 w-full h-[48px] bg-black text-white flex justify-center items-center cursor-pointer text-base rounded-b-[4px]">
            Add To Cart
          </div>
        )}
      </div>
      
      {/* تفاصيل المنتج */}
      <div className="pt-[16px]">
        <span className="text-base font-medium font-poppins leading-normal">{title}</span> 
        <div className="py-[8px] flex items-center">
          <span className="text-[16px] font-medium font-poppins text-[#DB4444] pr-[12px]">{NewPrice}</span>
          {OldPrice && ( 
            <span className="text-[16px] font-medium font-poppins text-black opacity-50 line-through">
              {OldPrice}
            </span>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <RatingStars rating={rating} /> 
            <span className="text-sm text-gray-500 ml-2">({num})</span> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;