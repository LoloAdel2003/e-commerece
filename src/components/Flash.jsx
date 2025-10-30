import React, { useContext, useState, useEffect } from 'react';
import Title from './Title';
import Cards from './Cards';
import ProductContext from '../Context/ProductContext';

const FlashSalesHeader = () => {
  // تحديد الوقت النهائي مرة واحدة فقط عند التحميل
  const endTime = new Date();
  endTime.setHours(endTime.getHours() + 24); // Flash sale لمدة 24 ساعة

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = endTime - now;

    if (diff <= 0) return { Days: "00", Hours: "00", Minutes: "00", Seconds: "00" };

    const Days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const Hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const Minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
    const Seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

    return { Days, Hours, Minutes, Seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const CountdownSegment = ({ label, value }) => (
    <div className="flex flex-col items-center min-w-[45px] sm:min-w-[55px]">
      <span className="text-[9px] sm:text-[11px] font-poppins text-gray-700 mb-0.5">{label}</span>
      <span className="text-xl sm:text-2xl md:text-3xl font-bold font-poppins text-black leading-none">{value}</span>
    </div>
  );

  const timerComponents = Object.keys(timeLeft).map((unit, index) => (
    <React.Fragment key={unit}>
      <CountdownSegment label={unit} value={timeLeft[unit]} />
      {index < Object.keys(timeLeft).length - 1 && (
        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-red-500 mx-1 sm:mx-2 leading-none self-end pb-1">:</span>
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
    </div>
  );
};

// مكون الفلاش الكامل
const Flash = () => {
  const { products } = useContext(ProductContext);

  const flashProducts = products.filter(product => product.type === 'flash-sales');

  return (
    <section className="w-full px-3 sm:px-4 lg:px-[100px] pt-[40px] lg:pt-[140px] font-poppins overflow-auto scrollbar-hide">
      <div className="mb-8 md:mb-10">
        <FlashSalesHeader />
      </div>

      <div className="flex gap-4 sm:gap-6 lg:gap-7 pb-4 overflow-auto scrollbar-hide">
        {flashProducts.map((card, index) => (
          <div key={index} className="flex-shrink-0">
            <Cards product={card} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 mb-14">
        <button className="bg-[#DB4444] text-white font-medium py-3 sm:py-4 px-10 sm:px-12 rounded-[4px] hover:bg-red-600 transition-colors text-sm sm:text-base">
          View All Products
        </button>
      </div>

      <div className="w-full h-[1px] bg-gray-200"></div>
    </section>
  );
};

export default Flash;
