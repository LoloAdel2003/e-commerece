import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  const navLinks = ["Home", "Contact", "About", "Sign Up"];
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-white shadow">
<div className="w-full px-6 lg:px-[135px] flex items-center justify-between py-4">
        {/* الاسم */}
        <span className="font-bold text-[24px] font-700 text-black">Exclusive</span>

        {/* Navbar - يظهر فقط على الشاشات الكبيرة */}
        <nav className="hidden lg:flex justify-center items-center gap-[48px]">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="font-poppins font-normal text-[16px] leading-[24px] text-center text-black hover:underline"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* أيقونات البحث والقلب والسلة + menu icon للشاشات الصغيرة */}
        <div className="flex items-center gap-4">
          {/* أيقونة البحث */}
          <button
            className="lg:hidden p-2"
            onClick={() => setShowSearch(!showSearch)}
          >
            <BiSearch className="w-6 h-6 text-black" />
          </button>

          {/* البحث input على الشاشات الكبيرة */}
          <div className="hidden lg:block relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-[243px] h-[38px] bg-[#F5F5F5] rounded-[4px] pl-[20px] pr-[40px] pt-[7px] pb-[7px] font-poppins font-normal text-[12px] leading-[18px] placeholder:text-gray-400 outline-none"
            />
            <BiSearch className="absolute right-[16px] top-1/2 transform -translate-y-1/2 text-gray-600 w-4 h-4" />
          </div>

          {/* أيقونات القلب والسلة على الشاشات الكبيرة فقط */}
          <div className="hidden lg:flex items-center gap-4">
            <AiOutlineHeart className="w-6 h-6 text-black cursor-pointer" />
            <AiOutlineShopping className="w-6 h-6 text-black cursor-pointer" />
          </div>

          {/* أيقونة menu للشاشات الصغيرة والمتوسطة */}
          <button
            className="lg:hidden p-2"
            onClick={() => setShowMenu(!showMenu)}
          >
            <HiOutlineMenu className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>

      {/* البحث يظهر على الشاشات الصغيرة عند الضغط */}
      {showSearch && (
        <div className="px-6 lg:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full h-[38px] bg-[#F5F5F5] rounded-[4px] pl-[20px] pr-[40px] pt-[7px] pb-[7px] font-poppins font-normal text-[12px] leading-[18px] placeholder:text-gray-400 outline-none"
            />
            <BiSearch className="absolute right-[16px] top-1/2 transform -translate-y-1/2 text-gray-600 w-4 h-4" />
          </div>
        </div>
      )}

      {/* القائمة تظهر على الشاشات الصغيرة والمتوسطة عند الضغط */}
      {showMenu && (
        <div className="px-6 lg:hidden pb-4 flex flex-col gap-4 border-t border-gray-200">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="font-poppins font-normal text-[16px] leading-[24px] text-black hover:underline"
            >
              {link}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <AiOutlineHeart className="w-6 h-6 text-black cursor-pointer" />
            <AiOutlineShopping className="w-6 h-6 text-black cursor-pointer" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
