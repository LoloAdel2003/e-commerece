import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductContext from '../Context/ProductContext';
import { AiOutlineHeart, AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { HiArchiveBoxXMark } from "react-icons/hi2";

// ========================
// RatingStars
const RatingStars = ({ rating = 0 }) => {
  const totalStars = 5;
  const filledStars = Math.round(rating);

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < filledStars ? 'text-orange-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.207-6.002 5.856 1.416 8.284L12 18.283l-7.414 3.899 1.416-8.284-6.002-5.856 8.332-1.207L12 .587z" />
        </svg>
      ))}
    </div>
  );
};

// ========================
// Cards Component
const Cards = ({ product, isWish = false, inWish = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  const { addToCart, addToWishlist, removeFromWishlist, setSelected, wishlist } = useContext(ProductContext);
  const { img, price, title, NewPrice, OldPrice, num, rating, id } = product || {};

  const isInWishlist = wishlist?.some(item => item.id === id);

  // دالة لإظهار الـ popup
  const triggerPopup = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1500);
  };

  // دالة للذهاب لصفحة تفاصيل المنتج
  const goToProduct = (product) => {
    setSelected(product);
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="w-[270px] h-[350px] font-poppins relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[250px] rounded-[4px] bg-[#F5F5F5] flex justify-center items-center">
        <img
          src={!imgError ? img : '/imges/fallback.png'}
          alt={title}
          className="max-w-[80%] max-h-[80%] object-contain"
          onError={() => setImgError(true)}
        />

        {price && (
          <div className="absolute text-[12px] top-[12px] left-[12px] bg-[#DB4444] text-white rounded-[4px] w-[55px] h-[26px] flex justify-center items-center">
            {price}
          </div>
        )}

        {/* Wishlist / Icons */}
        {isWish ? (
          <div
            onClick={() => {
              removeFromWishlist(id);
              triggerPopup("Removed from Wishlist 💔");
            }}
            className="absolute top-[12px] right-[12px] w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center cursor-pointer shadow-sm hover:bg-gray-100 transition-colors"
          >
            <HiArchiveBoxXMark className="text-gray-800 w-5 h-5" />
          </div>
        ) : (
          <div className="absolute top-[12px] right-[12px] flex flex-col gap-[8px]">
            {!inWish && (
              <div
                onClick={() => {
                  if (isInWishlist) {
                    removeFromWishlist(id);
                    triggerPopup("Removed from Wishlist 💔");
                  } else {
                    addToWishlist(product);
                    triggerPopup("Added to Wishlist 💖");
                  }
                }}
                className="w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center cursor-pointer shadow-sm hover:bg-gray-100 transition-all"
              >
                {isInWishlist ? (
                  <AiFillHeart className="text-red-500 w-5 h-5 transition-transform duration-200 transform scale-110" />
                ) : (
                  <AiOutlineHeart className="text-gray-800 w-5 h-5 transition-transform duration-200" />
                )}
              </div>
            )}

            {/* 👁️ العين */}
            <div
              onClick={() => goToProduct(product)}
              className="w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center cursor-pointer shadow-sm hover:bg-gray-100 transition-colors"
            >
              <AiOutlineEye className="text-gray-800 w-5 h-5" />
            </div>
          </div>
        )}

        {/* 🛒 Add To Cart */}
        {isHovered && (
          <div
            onClick={() => {
              addToCart(product);
              triggerPopup("Added to Cart ✅");
            }}
            className="absolute bottom-0 w-full h-[48px] bg-black text-white flex justify-center items-center cursor-pointer text-base rounded-b-[4px] z-10"
          >
            Add To Cart
          </div>
        )}
      </div>

      {/* Product details */}
      <div className="pt-[16px]">
        <span className="text-base font-medium font-poppins leading-normal">{title}</span>
        <div className="py-[8px] flex items-center">
          <span className="text-[16px] font-medium font-poppins text-[#DB4444] pr-[12px]">{NewPrice}</span>
          {OldPrice && (
            <span className="text-[16px] font-medium font-poppins text-black opacity-50 line-through">{OldPrice}</span>
          )}
        </div>
        {!isWish && (
          <div className="flex items-center">
            <RatingStars rating={rating} />
            <span className="text-sm text-gray-500 ml-2">({num})</span>
          </div>
        )}
      </div>

      {/* 🔔 Popup */}
      {showPopup && (
        <div className="absolute bottom-[200px] left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md text-sm shadow-md z-20 animate-fadeIn">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default Cards;
