import React, { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductContext from '../Context/ProductContext';
import { AiOutlineHeart, AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollReveal from 'scrollreveal';

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
          className={`w-4 h-4 ${i < filledStars ? 'text-yellow-400' : 'text-gray-300'}`}
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
  const cardRef = useRef(null);

  const navigate = useNavigate();
  const { addToCart, addToWishlist, removeFromWishlist, setSelected, wishlist } = useContext(ProductContext);
  const { img, title, NewPrice, OldPrice, num, rating, id } = product || {};

  const isInWishlist = wishlist?.some(item => item.id === id);

  // ⚡ Scroll Reveal animation
  useEffect(() => {
    if (cardRef.current) {
      ScrollReveal().reveal(cardRef.current, {
        distance: '60px',
        duration: 1000,
        delay: 200,
        origin: 'top',
        easing: 'ease-out',
        opacity: 0,
        reset: true,
        cleanup: true,
      });
    }
  }, []);

  // ✅ Toast function
  const notify = (message, type = "success") => {
    if (type === "success") {
      toast.success(message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        icon: "✅",
        style: {
          borderRadius: '10px',
          background: '#4BB543',
          color: '#fff',
          fontWeight: '500',
          fontSize: '14px',
        },
      });
    } else {
      toast.error(message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        icon: "💔",
        style: {
          borderRadius: '10px',
          background: '#DB4444',
          color: '#fff',
          fontWeight: '500',
          fontSize: '14px',
        },
      });
    }
  };

  const goToProduct = (product) => {
    setSelected(product);
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      ref={cardRef}
      className="w-[270px] h-[350px] font-poppins relative transition-all duration-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* صورة المنتج */}
      <div className="relative w-full h-[250px] rounded-[4px] bg-[#F5F5F5] flex justify-center items-center">
        <img
          src={!imgError ? img : '/imges/fallback.png'}
          alt={title}
          className="max-w-[80%] max-h-[80%] object-contain"
          onError={() => setImgError(true)}
        />

        {/* السعر */}
        {NewPrice && (
          <div className="absolute text-[12px] top-[12px] left-[12px] bg-[#DB4444] text-white rounded-[4px] w-[55px] h-[26px] flex justify-center items-center">
            {NewPrice}
          </div>
        )}

        {/* Wishlist / Icons */}
        {isWish ? (
          <div
            onClick={() => {
              removeFromWishlist(id);
              notify("Removed from Wishlist 💔", "error");
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
                    notify("Removed from Wishlist 💔", "error");
                  } else {
                    addToWishlist(product);
                    notify("Added to Wishlist 💖", "success");
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
              notify("Added to Cart ✅", "success");
            }}
            className="absolute bottom-0 w-full h-[48px] bg-black text-white flex justify-center items-center cursor-pointer text-base rounded-b-[4px] z-10"
          >
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
    </div>
  );
};

export default Cards;
