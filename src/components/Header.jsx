import React, { useState, useContext } from 'react';
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import ProductContext from '../Context/ProductContext';

const Header = ({ isExist = true, isSign = true }) => {
  const navLinks = ["Home", "Contact", "About"];
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const { cart, wishlist } = useContext(ProductContext);

  return (
    <header className="bg-white shadow">
      <div className="w-full px-6 lg:px-[135px] flex items-center justify-between py-4">
        {/* الاسم */}
        <span className="font-bold text-[24px] text-black">Exclusive</span>

        {/* Navbar */}
        <nav className="hidden lg:flex justify-center items-center gap-[48px]">
          {navLinks.map((link, index) => {
            const to = link === "Home" ? "/" : `/${link.toLowerCase()}`;
            return (
              <NavLink
                key={index}
                to={to}
                end={link === "Home"}
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

        {/* أيقونات */}
        <div className="flex items-center gap-4">
          {/* 🔍 أيقونة البحث (للموبايل فقط) */}
          <button
            className="lg:hidden p-2"
            onClick={() => setShowSearch(!showSearch)}
          >
            <BiSearch className="w-6 h-6 text-black" />
          </button>

          {/* البحث للشاشات الكبيرة */}
          <div className="hidden lg:block relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-[243px] h-[38px] bg-[#F5F5F5] rounded-[4px] pl-[20px] pr-[40px] font-poppins text-[12px] leading-[18px] placeholder:text-gray-400 outline-none"
            />
            <BiSearch className="absolute right-[16px] top-1/2 transform -translate-y-1/2 text-gray-600 w-4 h-4" />
          </div>

         
          {isExist && (
            <div className="hidden lg:flex items-center gap-4 relative">
              
              <Link to="/wishlist" className="relative cursor-pointer">
                <AiOutlineHeart className="w-6 h-6 text-black" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/*  السلة */}
              <Link to="/cart" className="relative cursor-pointer">
                <MdOutlineShoppingCart className="w-6 h-6 text-black" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                    {cart.reduce((sum, item) => sum + (item.quantity || 1), 0)}
                  </span>
                )}
              </Link>

              {/*  المستخدم */}
              {isSign && (
                <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-[#DB4444] border border-gray-300 cursor-pointer hover:opacity-90 transition">
                 <Link to='/profile' > <AiOutlineUser className="text-white w-5 h-5" /> </Link>
                </div>
              )}
            </div>
          )}

          {/* أيقونة menu للموبايل */}
          <button
            className="lg:hidden p-2"
            onClick={() => setShowMenu(!showMenu)}
          >
            <HiOutlineMenu className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>

      {/* البحث للموبايل */}
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

      {/* القائمة الجانبية للموبايل */}
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
              <Link to="/wishlist">
                <AiOutlineHeart className="w-6 h-6 text-black cursor-pointer" />
              </Link>
              <Link to="/cart">
                <MdOutlineShoppingCart className="w-6 h-6 text-black cursor-pointer" />
              </Link>
              {isSign && (
                <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-[#DB4444] border border-gray-300 cursor-pointer hover:opacity-90 transition">
                <Link to="/profile" >  <AiOutlineUser className="text-white w-5 h-5" /></Link>
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
