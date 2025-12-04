import React, { useContext } from "react";
import ProductContext from "../Context/ProductContext";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useContext(ProductContext);

  if (!item) return null;

  const price = Number(item.price) || 0; // السعر من الـ API

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md gap-4 flex-wrap">
      {/* صورة واسم المنتج */}
      <div className="flex items-center gap-4 flex-1 min-w-[150px]">
        <img
          src={item.image} // تعديل الاسم ليطابق الـ API
          alt={item.title}
          className="w-[70px] h-[70px] object-cover rounded-md"
        />
        <span className="font-medium text-gray-800 truncate">{item.title}</span>
      </div>

      {/* السعر لكل وحدة */}
      <div className="w-[80px] text-center text-gray-800 font-semibold">
        ${price.toFixed(2)}
      </div>

      {/* التحكم بالكمية */}
      <div className="flex items-center border rounded-md px-2 py-1">
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="text-gray-600 hover:text-black"
        >
          <AiOutlineMinus />
        </button>
        <span className="px-3 text-gray-800">{item.quantity}</span>
        <button
          onClick={() => increaseQuantity(item.id)}
          className="text-gray-600 hover:text-black"
        >
          <AiOutlinePlus />
        </button>
      </div>

      {/* السعر الإجمالي */}
      <div className="w-[100px] text-center font-medium text-gray-800">
        ${(price * item.quantity).toFixed(2)}
      </div>

      {/* زر إزالة */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 hover:underline"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
