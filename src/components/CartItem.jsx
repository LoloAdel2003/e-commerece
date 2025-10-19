import React, { useContext } from "react";
import ProductContext from "../Context/ProductContext";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useContext(ProductContext);

  if (!item) return null;

  const price = Number(item.NewPrice?.replace("$", "")) || 0;

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md gap-4">
      
      
      <div className="flex items-center gap-4  ">
        <img
          src={item.img}
          alt={item.title}
          className="w-[70px] h-[70px] object-cover rounded-md"
        />
        <span className="font-medium text-gray-800">{item.title}</span>
      </div>

      
      <div className="w-[80px] text-center text-gray-800 font-semibold">
        ${price.toFixed(2)}
      </div>

      
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
