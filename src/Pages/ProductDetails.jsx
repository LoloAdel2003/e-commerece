import React, { useContext, useState } from "react";
import { FaStar, FaPlus, FaMinus, FaHeart, FaTruck, FaRedo } from "react-icons/fa";
import ProductContext from "../Context/ProductContext";
import PageSeq from '../components/PageSeq';

const ProductDetails = () => {
  const { selected, addToCart, addToWishlist } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(1);
  const [selectedColour, setSelectedColour] = useState(selected?.availableColors?.[0] || "");
  const [activeImage, setActiveImage] = useState(0);

  if (!selected) {
    return (
      <div className="text-center py-20 text-gray-500 text-xl">
        No product selected.
      </div>
    );
  }

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
     <div className="w-full px-3 sm:px-4 lg:px-[135px] pt-[40px] lg:pt-[80px] font-poppins ">
      {/* مسار التنقل (Breadcrumb) */}
      <PageSeq />
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Images Section */}
        <div className="flex flex-col sm:flex-row lg:flex-row gap-4 lg:w-2/3">
          {/* Thumbnails */}
          <div className="flex flex-row sm:flex-col gap-3 overflow-x-auto sm:overflow-x-hidden p-2">
            {selected.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(index)}
                className={`bg-gray-100 flex items-center justify-center p-2 rounded-lg cursor-pointer ${
                  index === activeImage ? "border-2 border-blue-600" : "border border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt={`${selected.title} ${index}`}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-grow bg-gray-100 flex items-center justify-center p-8 rounded-lg min-h-[400px]">
            <img
              src={selected.images[activeImage]}
              alt={selected.title}
              className="w-full max-w-md h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="lg:w-1/3 space-y-6">
          {/* Title & Rating & Price */}
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-gray-900">{selected.title}</h1>

            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <FaStar key={i} className={i <= selected.rateNumber ? "" : "text-gray-300"} />
                ))}
              </div>
              <span className="text-sm text-gray-500">({selected.reviewNumber} Reviews)</span>
              <span className="text-sm font-medium text-green-600">| In Stock: {selected.inStock}</span>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <p className="text-4xl font-bold text-gray-900">{selected.NewPrice}</p>
              {selected.OldPrice && (
                <p className="text-gray-400 line-through text-lg">{selected.OldPrice}</p>
              )}
              {selected.price && (
                <span className="text-red-500 font-semibold">{selected.price}</span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 border-b pb-4">{selected.shortDescription}</p>

          {/* Colours Selector */}
          <div className="space-y-2">
            <p className="font-medium text-gray-700">Colours:</p>
            <div className="flex space-x-3">
              {selected.availableColors.map((colour) => (
                <button
                  key={colour}
                  onClick={() => setSelectedColour(colour)}
                  className={`px-3 py-1 border rounded-md text-sm font-medium transition-colors ${
                    selectedColour === colour
                      ? "bg-red-600 text-white border-red-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {colour}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Buy Now */}
          <div className="flex items-center space-x-3 pt-4">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="p-3 text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors"
              >
                <FaMinus className="w-3 h-3" />
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-10 text-center font-medium border-x border-gray-300 focus:outline-none"
              />
              <button
                onClick={() => handleQuantityChange(1)}
                className="p-3 text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors"
              >
                <FaPlus className="w-3 h-3" />
              </button>
            </div>

            <button
              onClick={() => addToCart(selected)}
              className="flex-1 px-8 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Buy Now</span>
            </button>

            <button
              onClick={() => addToWishlist(selected)}
              className="p-3 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaHeart className="w-5 h-5" />
            </button>
          </div>

          {/* Delivery & Returns */}
          <div className="pt-6 space-y-4">
            <div className="border border-gray-200 rounded-lg p-4 space-y-3">
              <div className="flex items-center space-x-3">
                <FaTruck className="w-5 h-5 text-gray-700" />
                <div>
                  <p className="font-semibold text-gray-800">Free Delivery</p>
                  <p className="text-sm text-gray-500">
                    Enter your postcode for Delivery Availability
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 space-y-3">
              <div className="flex items-center space-x-3">
                <FaRedo className="w-5 h-5 text-gray-700" />
                <div>
                  <p className="font-semibold text-gray-800">Return Delivery</p>
                  <p className="text-sm text-gray-500">
                    Free 30 Days Delivery Returns.{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
