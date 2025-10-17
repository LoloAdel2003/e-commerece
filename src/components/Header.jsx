import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom"; // ✅ بدل Link بـ NavLink

const Header = ({ isExist = true, isSign = false }) => {
  const navLinks = ["Home", "Contact", "About"];
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="w-full px-6 lg:px-[135px] flex items-center justify-between py-4">
        {/* الاسم */}
        <span className="font-bold text-[24px] text-black">Exclusive</span>

        {/* Navbar - يظهر فقط على الشاشات الكبيرة */}
        <nav className="hidden lg:flex justify-center items-center gap-[48px]">
          {navLinks.map((link, index) => {
            const to = link === "Home" ? "/" : `/${link.toLowerCase()}`;
            return (
              <NavLink
                key={index}
                to={to}
                end={link === "Home"} // ✅ حتى يفعّل الـ active فقط في المسار /
                className={({ isActive }) =>
                  `font-poppins font-normal text-[16px] leading-[24px] text-center ${
                    isActive
                      ? "text-black border-b-2 border-[#DB4444]"
                      : "text-black hover:underline"
                  }`
                }
              >
                {link}
              </NavLink>
            );
          })}

          {!isSign && (
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `font-poppins font-normal text-[16px] leading-[24px] text-center ${
                  isActive
                    ? "text-black border-b-2 border-[#DB4444]"
                    : "text-black hover:underline"
                }`
              }
            >
              Sign Up
            </NavLink>
          )}
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
              className="w-[243px] h-[38px] bg-[#F5F5F5] rounded-[4px] pl-[20px] pr-[40px] font-poppins text-[12px] leading-[18px] placeholder:text-gray-400 outline-none"
            />
            <BiSearch className="absolute right-[16px] top-1/2 transform -translate-y-1/2 text-gray-600 w-4 h-4" />
          </div>

          {/* أيقونات القلب والسلة على الشاشات الكبيرة فقط */}
          {isExist && (
            <div className="hidden lg:flex items-center gap-4">
              <AiOutlineHeart className="w-6 h-6 text-black cursor-pointer" />
              <MdOutlineShoppingCart className="w-6 h-6 text-black cursor-pointer" />
              {isSign && (
                <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-[#DB4444] border border-gray-300 cursor-pointer hover:opacity-90 transition">
                  <AiOutlineUser className="text-white w-5 h-5" />
                </div>
              )}
            </div>
          )}

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
              className="w-full h-[38px] bg-[#F5F5F5] rounded-[4px] pl-[20px] pr-[40px] font-poppins text-[12px] leading-[18px] placeholder:text-gray-400 outline-none"
            />
            <BiSearch className="absolute right-[16px] top-1/2 transform -translate-y-1/2 text-gray-600 w-4 h-4" />
          </div>
        </div>
      )}

      {/* القائمة تظهر على الشاشات الصغيرة والمتوسطة عند الضغط */}
      {showMenu && (
        <div className="px-6 lg:hidden pb-4 flex flex-col gap-4 border-t border-gray-200">
          {navLinks.map((link, index) => {
            const to = link === "Home" ? "/" : `/${link.toLowerCase()}`;
            return (
              <NavLink
                key={index}
                to={to}
                end={link === "Home"}
                className={({ isActive }) =>
                  `font-poppins font-normal text-[16px] leading-[24px] ${
                    isActive
                      ? "text-black border-b-2 border-[#DB4444]"
                      : "text-black hover:underline"
                  }`
                }
              >
                {link}
              </NavLink>
            );
          })}

          {!isSign && (
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `font-poppins font-normal text-[16px] leading-[24px] ${
                  isActive
                    ? "text-black border-b-2 border-[#DB4444]"
                    : "text-black hover:underline"
                }`
              }
            >
              Sign Up
            </NavLink>
          )}

          {isExist && (
            <div className="flex items-center gap-4 pt-2">
              <AiOutlineHeart className="w-6 h-6 text-black cursor-pointer" />
              <AiOutlineShopping className="w-6 h-6 text-black cursor-pointer" />
              {isSign && (
                <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-[#DB4444] border border-gray-300 cursor-pointer hover:opacity-90 transition">
                  <AiOutlineUser className="text-white w-5 h-5" />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
