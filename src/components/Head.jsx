import React from "react";
import { AiOutlineDown } from "react-icons/ai";

const Head = () => {
  return (
    <div className="h-[48px] bg-black flex items-center justify-center relative px-4 lg:px-[135px]">
      
      {/* النص الطويل للشاشات الكبيرة */}
      <div className="hidden lg:block text-white text-[14px] font-normal text-center">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span className="font-semibold text-[14px] underline ml-2">Shop Now</span>
      </div>

      {/* النص القصير للشاشات الصغيرة والمتوسطة */}
      <div className="block lg:hidden text-white text-[14px] font-normal text-center">
        Summer Sale - OFF 50%! <span className="font-semibold text-[14px] underline ml-2">Shop Now</span>
      </div>

      {/* English مع السهم */}
      <div className="absolute right-4 lg:right-[135px] flex items-center gap-2 text-white text-[14px] font-normal">
        English <AiOutlineDown />
      </div>
    </div>
  );
};

export default Head;
