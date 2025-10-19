import React, { useContext } from 'react';
import Title from './Title';
import Cards from './Cards';
import  ProductContext  from '../Context/ProductContext' ; // استيراد الـ context

// =========================================================
// مكوّن الهيدر مع العداد المتجاوب
const FlashSalesHeader = () => {
  const timeLeft = { Days: "03", Hours: "23", Minutes: "19", Seconds: "56" };
  
  const CountdownSegment = ({ label, value }) => (
    <div className="flex flex-col items-center min-w-[45px] sm:min-w-[60px] md:min-w-[80px]">
      <span className="text-[10px] sm:text-xs md:text-sm font-poppins text-gray-700 mb-0.5 sm:mb-1">{label}</span>
      <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold font-poppins text-black leading-none">{value}</span>
    </div>
  );

  const ProductSliderControls = () => {
    const ButtonStyle =
      "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center cursor-pointer shadow-sm";
    const IconStyle = "w-4 h-4 sm:w-5 sm:h-5 text-black";
  
    return (
      <div className="flex gap-1 sm:gap-2">
        <button className={ButtonStyle} aria-label="Previous">
          <svg xmlns="http://www.w3.org/2000/svg" className={IconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <button className={ButtonStyle} aria-label="Next">
          <svg xmlns="http://www.w3.org/2000/svg" className={IconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    );
  };

  const timerComponents = Object.keys(timeLeft).map((unit, index) => (
    <React.Fragment key={unit}>
      <CountdownSegment label={unit} value={timeLeft[unit]} />
      {index < Object.keys(timeLeft).length - 1 && (
        <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-red-500 mx-1 sm:mx-2 md:mx-4 leading-none self-end pb-1">
          :
        </span>
      )}
    </React.Fragment>
  ));

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between">
      <div className="flex md:flex-row md:items-end md:gap-10 lg:gap-20 mb-4 md:mb-0">
        <Title type="Today's" title="Flash Sales" className="flex-shrink-0" />
        <div className="flex items-center mt-3 md:mt-0 pt-1 sm:pt-2">
          {timerComponents}
        </div>
      </div>
      <div className="flex-shrink-0 md:self-end mt-3 md:mt-0">
        <ProductSliderControls />
      </div>
    </div>
  );
};

// =========================================================
// مكوّن الفلاش الكامل
const Flash = () => {
  const { products } = useContext(ProductContext);

  // فلترة المنتجات لعرض فقط نوع flash-sales
  const flashProducts = products.filter(product => product.type === 'flash-sales');

  return (
    <>
      <section className="w-full px-3 sm:px-4 lg:px-[135px] pt-[40px] lg:pt-[140px] font-poppins overflow-auto scrollbar-hide">
        {/* العنوان + العداد */}
        <div className="mb-8 md:mb-10">
          <FlashSalesHeader />
        </div>

        {/* الكروت */}
        <div className="flex gap-4 sm:gap-6 lg:gap-7 pb-4 overflow-auto scrollbar-hide">
          {flashProducts.map((card, index) => (
            <div key={index} className="flex-shrink-0">
              <Cards
                product={card}
              />
            </div>
          ))}
        </div>

        {/* زر عرض كل المنتجات */}
        <div className="flex justify-center mt-10 mb-14">
          <button className="bg-[#DB4444] text-white font-medium py-3 sm:py-4 px-10 sm:px-12 rounded-[4px] hover:bg-red-600 transition-colors text-sm sm:text-base">
            View All Products
          </button>
        </div>

        {/* خط فاصل */}
        <div className="w-full h-[1px] bg-gray-200"></div>
      </section>
    </>
  );
};

export default Flash;
