import React, { useContext } from "react";
import ProductContext from "../Context/ProductContext";
import PageSeq from "../components/PageSeq";
import Button from "../components/Button";
import ButtonAlt from "../components/ButtonAlt";
import CartItem from "../components/CartItem";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart } = useContext(ProductContext);
const navigate = useNavigate();

  // حساب الإجمالي
  const subtotal = cart.reduce((acc, item) => {
    const price = Number(item.NewPrice?.replace("$", "")) || 0;
    const quantity = item.quantity || 0;
    return acc + price * quantity;
  }, 0);
 const goToCheck =()=>{
  navigate('/cart/checkout')
 }
  return (
    <div className="w-full px-3 sm:px-6 lg:px-[135px] py-[40px] font-poppins">
      <PageSeq />

      {cart.length === 0 ? (
        // 🔹 في حالة السلة فارغة
        <div className="w-full h-[300px] flex flex-col justify-center items-center text-gray-500 text-center">
          <span className="text-xl font-medium">Your cart is empty 🛒</span>
          <span className="mt-2 text-sm">Start adding products you love!</span>
        </div>
      ) : (
        <>
          {/* ====== جدول المنتجات ====== */}
{/* ====== عناوين الأعمدة ====== */}
<div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md gap-4">
  <div className="flex items-center gap-4 min-w-[240px]">
    Product
  </div>
  <div className="w-[80px] text-center">Price</div>
  <div className="w-[120px] text-center">Quantity</div>
  <div className="w-[100px] text-center">Total Price</div>
  <div className="w-[80px] text-center">Remove</div>
</div>

          <div className="w-full mt-6 space-y-4">
            {cart.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div>

          {/* ====== أزرار تحت الجدول ====== */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
            <ButtonAlt name="Return To Shop" />
            <ButtonAlt name="Update Cart" />
          </div>

          {/* ====== كوبون و الإجمالي ====== */}
          <div className="flex flex-col lg:flex-row justify-between items-start mt-12 gap-8">
            <div className="flex w-full lg:w-[45%] items-center gap-4">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border border-gray-300 rounded-[4px] h-[50px] w-full px-4 focus:outline-none focus:border-[#DB4444]"
              />
              <Button name="Apply Coupon" />
            </div>

            <div className="border border-gray-700 rounded-[4px] p-5 w-full sm:w-[400px]">
              <h3 className="text-lg font-medium mb-4">Cart Total</h3>
              <div className="flex justify-between border-b border-b-gray-300 py-2">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b border-b-gray-300  py-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between py-2 font-semibold">
                <span>Total:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="mt-5 flex justify-center">

                <Button event={goToCheck} name="Proceed to Checkout"  />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
