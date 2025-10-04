import React from "react";

const Hero = () => {
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
    <div className="container mx-auto px-4 md:px-8 pt-4 lg:pt-10">
      {/* Sidebar على الشاشات الصغيرة - خط أفقي مع scroll مخفي */}
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

        {/* Hero content */}
        <div
          className="flex-grow w-full bg-black rounded shadow-md relative overflow-hidden"
          
        >
         <BannerContent />
        </div>
      </div>
    </div>
  );
};

export default Hero;

   

  const BannerContent = () => (
    <div className="relative w-full h-full bg-black rounded-r-md">
      
      
      <div className="flex justify-between items-center h-full p-8 md:p-14 lg:p-16">
        
        {/* النص الترويجي */}
        <div className="text-white">
          <div className="flex items-center mb-4">
            <svg className="w-8 h-8 mr-3 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.77 8.35c.16-.16.35-.3.51-.43 0-.01.01-.01.02-.02.32-.26.63-.56.92-.88-.23-.74-.75-1.52-1.39-2.2-.42-.44-.89-.85-1.42-1.22-.64-.44-1.3-.77-2.02-1.01-.7-.23-1.45-.35-2.22-.35-.78 0-1.53.12-2.22.35-.72.24-1.38.57-2.02 1.01-.53.37-1 .78-1.42 1.22-.64.68-1.16 1.46-1.39 2.2.29.32.6.62.92.88.13.11.27.2.4.29.17.13.36.27.52.42-.01 0-.01.01-.02.01-.55.51-1.04 1.1-1.43 1.77-.28.49-.49 1.02-.63 1.58.29.09.58.17.88.23.51.11 1.04.16 1.58.16.54 0 1.07-.05 1.58-.16.3-.06.59-.14.88-.23-.39-.67-.88-1.26-1.43-1.77-.16-.16-.35-.3-.51-.42-.14-.11-.28-.2-.41-.29-.32-.26-.63-.56-.92-.88.01 0 .01-.01.02-.01.16.15.35.29.51.42.02.01.03.02.04.03.32.26.63.56.92.88-.23.74-.75 1.52-1.39 2.2-.42.44-.89.85-1.42 1.22-.64.44-1.3.77-2.02 1.01-.7.23-1.45.35-2.22.35-.78 0-1.53-.12-2.22-.35-.72-.24-1.38-.57-2.02-1.01-.53-.37-1-.78-1.42-1.22-.64-.68-1.16-1.46-1.39 2.2.29.32.6.62.92.88.13.11.27.2.4.29.17.13.36.27.52.42-.01 0-.01.01-.02.01-.55.51-1.04 1.1-1.43 1.77-.28.49-.49 1.02-.63 1.58.29.09.58.17.88.23.51.11 1.04.16 1.58.16.54 0 1.07-.05 1.58-.16.3-.06.59-.14.88-.23-.39-.67-.88-1.26-1.43-1.77-.16-.16-.35-.3-.51-.42-.14-.11-.28-.2-.41-.29z" />
            </svg>
            <span className="text-sm md:text-base font-poppins">iPhone 14 Series</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-[48px] font-semibold font-600 mb-4 lg:mb-6 leading-tight">
            Up to 10% <br /> off Voucher
          </h1>
          
          <a 
            href="#"
            
            className="text-white text-base font-medium border-b border-white 
                       pb-1 hover:border-red-500 transition duration-200 inline-flex items-center"
          >
            Shop Now 
            <span className="ml-2">&#8594;</span> 
          </a>
        </div>
        
       <div className="md:block lg:w-[496px] lg:h-[332px] relative top-[16px]  lg:left-[50px] opacity-100">
  <img 
    src="/imges/phone.jpg" 
    alt="phone" 
    className="w-full h-full object-cover"
  />
</div>

      </div>

      {/* مؤشرات الشرائح (Slideshow Dots) */}
      <div className="absolute bottom-6 right-1/2 transform translate-x-1/2 flex gap-2">
              <span className="w-3 h-3 bg-gray-600 rounded-full cursor-pointer"></span>

        <span className="w-3 h-3 bg-gray-600 rounded-full cursor-pointer"></span>
        <span className="w-3 h-3 bg-white rounded-full cursor-pointer border border-red-500"></span>
        <span className="w-3 h-3 bg-gray-600 rounded-full cursor-pointer"></span>
        <span className="w-3 h-3 bg-gray-600 rounded-full cursor-pointer"></span>
      </div>
    </div>
  );