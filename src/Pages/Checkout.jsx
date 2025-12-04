import React, { useContext, useState } from 'react';
import { FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa';
import ProductContext from '../Context/ProductContext';
import PageSeq from '../components/PageSeq';
import ProductItem from '../components/ProductItem';

const Checkout = () => {
  const { cart } = useContext(ProductContext);
  const [paymentMethod, setPaymentMethod] = useState('cod');

  // حساب المجموع
  const subtotal =
    cart?.reduce(
      (sum, item) =>
        sum + (Number(item.NewPrice?.replace('$', '')) || 0) * (item.num || 1),
      0
    ) || 0;

  const shippingFee = 0;
  const total = subtotal + shippingFee;

  // ===== Input Field Component =====
  const InputField = ({ label, id, placeholder = '', required = false, type = 'text' }) => (
    <div className="mb-4">
      <label htmlFor={id} className="sr-only">{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder || (required ? `${label} *` : label)}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 placeholder-gray-500 bg-gray-50 text-sm"
      />
    </div>
  );

  // ===== Payment Option Component =====
  const PaymentOption = ({ value, label, icons }) => (
    <label
      className={`flex items-center justify-between p-4 mb-4 border rounded-md cursor-pointer transition-all ${
        paymentMethod === value ? 'border-red-500 bg-red-50' : 'border-gray-300'
      }`}
    >
      <div className="flex items-center">
        <input
          type="radio"
          name="payment"
          value={value}
          checked={paymentMethod === value}
          onChange={() => setPaymentMethod(value)}
          className="form-radio h-4 w-4 text-red-600 focus:ring-red-500"
        />
        <span className="ml-3 text-sm font-medium text-gray-700">{label}</span>
      </div>
      {icons && <div className="flex space-x-1 text-gray-500 text-xl">{icons}</div>}
    </label>
  );

  // ===== Handle Place Order =====
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty 🛒</h2>
        <p>Add some products to proceed to checkout.</p>
      </div>
    );
  }

  return (
    <div className="w-full px-3 sm:px-6 lg:px-[135px] py-[40px] font-poppins">
      <PageSeq />

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* ===== Left Side: Billing Details ===== */}
        <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Billing Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="First Name" id="firstName" required />
            <InputField label="Company Name" id="companyName" />
          </div>

          <InputField label="Street Address" id="streetAddress" required />
          <InputField label="Apartment, floor, etc. (optional)" id="apartment" />
          <InputField label="Town/City" id="townCity" required />
          <InputField label="Phone Number" id="phoneNumber" type="tel" required />
          <InputField label="Email Address" id="emailAddress" type="email" required />

          <div className="flex items-center mt-4">
            <input
              id="saveInfo"
              name="saveInfo"
              type="checkbox"
              defaultChecked
              className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
            />
            <label htmlFor="saveInfo" className="ml-2 text-sm text-gray-900">
              Save this information for faster check-out next time
            </label>
          </div>
        </div>

        {/* ===== Right Side: Order Summary ===== */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6 flex flex-col">
          {/* Product List */}
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <ProductItem
                key={item.id}
                item={item}
              />
            ))}
          </div>

          {/* Subtotal and Shipping */}
          <div className="space-y-3 py-3 border-t border-b border-gray-200 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-700">Subtotal:</span>
              <span className="text-gray-900 font-medium">${subtotal.toLocaleString('en-US')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Shipping:</span>
              <span className="text-gray-900 font-medium">Free</span>
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between pt-4 pb-6 text-base font-bold">
            <span className="text-gray-900">Total:</span>
            <span className="text-gray-900">${total.toLocaleString('en-US')}</span>
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <PaymentOption
              value="bank"
              label="Bank"
              icons={
                <>
                  <FaCcVisa />
                  <FaCcMastercard />
                  <FaCcAmex />
                </>
              }
            />
            <PaymentOption value="cod" label="Cash on delivery" />
          </div>

          {/* Coupon Code */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
            <button
              type="button"
              className="px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition duration-150 shadow-sm"
            >
              Apply Coupon
            </button>
          </div>

          {/* Place Order */}
          <button
            type="submit"
            className="w-full px-6 py-4 bg-red-500 text-white text-lg font-medium rounded-md hover:bg-red-600 transition duration-150 shadow-lg"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
