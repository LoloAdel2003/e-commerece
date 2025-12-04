import React, { useContext, useState } from "react";
import { FaStar, FaPlus, FaMinus, FaHeart, FaTruck, FaRedo } from "react-icons/fa";
import ProductContext from "../Context/ProductContext";
import PageSeq from '../components/PageSeq';
import Title from '../components/Title';
import Cards from '../components/Cards';

const ProductDetails = () => {
  const { selected, addToCart, products, addToWishlist } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const someProduct = products ? products.slice(0, 4) : [];

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

  const images = Array(4).fill(selected.image); // كل الصور نفس الصورة

  return (
    <div className="w-full px-3 sm:px-4 lg:px-[135px] pt-[40px] lg:pt-[80px] font-poppins">
      {/* Breadcrumb */}
      <PageSeq />

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col sm:flex-row lg:flex-row gap-4 lg:w-2/3">
          {/* Thumbnails */}
          <div className="flex flex-row sm:flex-col gap-3 overflow-x-auto sm:overflow-x-hidden p-2">
            {images.map((img, index) => (
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
          <div className="flex-grow bg-gray-100 flex items-center justify-center p-8 rounded-lg h-[300px] lg:min-h-[400px]">
            <img
              src={images[activeImage]}
              alt={selected.title}
              className="w-full lg:max-w-md h-[300px] object-cover rounded-lg"
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
                  <FaStar key={i} className={i <= Math.round(selected.rating?.rate || 0) ? "" : "text-gray-300"} />
                ))}
              </div>
              <span className="text-sm text-gray-500">({selected.rating?.count || 0} Reviews)</span>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <p className="text-4xl font-bold text-gray-900">${selected.price}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 border-b pb-4">{selected.description}</p>

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

      {/* Related Items */}
      <div className="my-[80px] md:my-[140px]">
        <Title type="Related Items" />
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-[40px] lg:py-[60px] lg:pb-[140px]">
          {someProduct.map((card, index) => (
            <Cards inWish={true} key={index} product={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
