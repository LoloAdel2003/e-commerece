import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Hero = () => {
  useEffect(() => {
    // حركة النصوص (من الشمال)
    ScrollReveal().reveal(".hero-text", {
      duration: 1200,
      origin: "left",
      distance: "50px",
      easing: "ease-in-out",
      opacity: 0,
      reset: true,
      delay: 200,
    });

    // حركة الصورة (تكبر تدريجيًا)
    ScrollReveal().reveal(".hero-img", {
      duration: 1300,
      scale: 0.6,
      opacity: 0,
      easing: "ease-in-out",
      reset: true,
      delay: 400,
    });
  }, []);

  const categories = [
    "Woman's Fashion",
    "Men Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sport & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-[100px] font-poppins pt-4 lg:pt-10">
      {/* Sidebar على الشاشات الصغيرة */}
      <div className="lg:hidden mb-4">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 py-2 bg-gray-200 rounded font-poppins text-sm whitespace-nowrap"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-[61px] items-start">
        {/* Sidebar على الشاشات الكبيرة */}
        <div className="hidden lg:block lg:w-64 bg-white rounded shadow-md flex-shrink-0">
          <div className="p-4 flex flex-col gap-2">
            {categories.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between font-poppins text-base text-gray-800 cursor-pointer p-2 rounded transition-colors duration-200 hover:bg-red-500 hover:text-white group"
              >
                <span className="truncate">{item}</span>
                {index < 2 && (
                  <span className="text-lg leading-none transform translate-y-[-1px] text-gray-500 group-hover:text-white">
                    &#9654;
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Hero Banner */}
        <div className="flex-grow w-full bg-black rounded shadow-md relative overflow-hidden">
          <BannerContent />
        </div>
      </div>
    </div>
  );
};

export default Hero;

// ---------- BannerContent ----------
const BannerContent = () => (
  <div className="relative w-full h-full bg-black rounded-r-md">
    <div className="flex justify-between items-center h-full py-[40px] px-[40px] md:p-14 lg:p-16">
      {/* النص الترويجي */}
      <div className="text-white hero-text">
        <div className="flex items-center mb-4">
          <svg
            className="w-8 h-8 mr-3 fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.77 8.35c.16-.16.35-.3.51-.43..." />
          </svg>
          <span className="text-sm md:text-base font-poppins">
            iPhone 14 Series
          </span>
        </div>

        <h1 className="text-[22px] lg:text-[40px] font-semibold font-600 mb-4 lg:mb-6 leading-tight">
          Up to 10% <br /> off Voucher
        </h1>

        <a
          href="#"
          className="text-white text-base font-medium border-b border-white 
          pb-1 hover:border-red-500 transition duration-200 inline-flex items-center"
        >
          Shop Now <span className="ml-2">&#8594;</span>
        </a>
      </div>

      {/* صورة المنتج */}
      <div className="hero-img lg:w-[350px] lg:h-[332px] relative top-[16px] lg:left-[50px]">
        <img
          src="/imges/phone.jpg"
          alt="phone"
          className="w-full h-full object-contain"
        />
      </div>
    </div>

    {/* مؤشرات الشرائح */}
    <div className="absolute bottom-6 right-1/2 transform translate-x-1/2 flex gap-2">
      <span className="w-3 h-3 bg-gray-600 rounded-full cursor-pointer"></span>
      <span className="w-3 h-3 bg-gray-600 rounded-full cursor-pointer"></span>
      <span className="w-3 h-3 bg-white rounded-full cursor-pointer border border-red-500"></span>
      <span className="w-3 h-3 bg-gray-600 rounded-full cursor-pointer"></span>
      <span className="w-3 h-3 bg-gray-600 rounded-full cursor-pointer"></span>
    </div>
  </div>
);
