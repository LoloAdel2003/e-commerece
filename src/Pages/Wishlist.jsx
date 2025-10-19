import React, { useContext, useState } from 'react';
import ProductContext from '../Context/ProductContext';
import ButtonAlt from '../components/ButtonAlt';
import Cards from '../components/Cards';
import Title from "../components/Title";

const Wishlist = () => {
  const { wishlist, setWishlist, addToCart, products } = useContext(ProductContext);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const count = wishlist.length;
  const someProduct = products ? products.slice(0, 4) : [];

  // دالة تحويل كل العناصر للسلة مع تأكيد
  const moveAllToBag = () => {
    if (wishlist.length === 0) return;

    const confirmMove = window.confirm("Are you sure you want to move all items to the cart?");
    if (!confirmMove) return;

    wishlist.forEach(product => addToCart(product)); // إضافة كل منتج للسلة
    setWishlist([]); // تفريغ الـ wishlist
    setPopupMessage("All items moved to cart ✅");
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1500);
  };

  return (
    <div className="w-full px-3 sm:px-4 lg:px-[135px] pt-[40px] lg:pt-[80px] font-poppins">
      {/* العنوان + الزر */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-semibold">Wishlist ({count})</span>
        {count > 0 && <ButtonAlt name="Move All To Bag" onClick={moveAllToBag} />}
      </div>

      {count === 0 ? (
        <div className="w-full h-[300px] flex flex-col justify-center items-center text-gray-500 text-center">
          <span className="text-xl font-medium">Your Wishlist is empty</span>
          <span className="mt-2 text-sm">Start adding products you love!</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {wishlist.map((card, index) => (
            <Cards key={index} product={card} isWish={true} />
          ))}
        </div>
      )}

      {/* // just for you  */}
      <div>
        <div className="flex justify-between items-center">
          <Title type="Just For You" />
          <ButtonAlt name="See All" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-[40px] lg:py-[60px] lg:pb-[140px]">
          {someProduct.map((card, index) => (
            <Cards inWish={true} key={index} product={card} />
          ))}
        </div>
      </div>

      {/* 🔔 Popup */}
      {showPopup && (
        <div className="fixed bottom-[40px] left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md text-sm shadow-md z-50 animate-fadeIn">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
