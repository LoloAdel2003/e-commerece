import React,{useEffect,useRef} from 'react'
import Button from './Button'
import ScrollReveal from 'scrollreveal';

const Title = ({type,title,slides,button}) => {
const TitleRef = useRef(null);

  useEffect(() => {
    if (TitleRef.current) {
      ScrollReveal().reveal(TitleRef.current, {
        distance: '80px',
        origin: 'left',
        duration: 800,
        delay: 300,
        easing: 'ease-out',
        reset: true, // لو بدك تعيد الحركة كل مرة ترجع تسكرول فعلها بـ true
        opacity: 0,
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-between">
    <div ref={TitleRef}>
      <div className="flex items-center gap-[10px] text-[#DB4444]">
        <span className="w-[20px] h-[40px] rounded-[4px] bg-[#DB4444]"></span>
        <span className="font-semibold font-600 text-sm ">{type}</span>
      </div>
      <div className="font-600 font-semibold text-[25px]  lg:text-[36px] mt-[18px] lg:mt-[24px]">{title}</div>
    </div>
{slides && <ProductSliderControls /> }
{button && <Button name="View All Products" />}
    </div>
  )
}

export default Title




const CountdownSegment = ({ label, value }) => {
  return (
    <div className="flex flex-col items-start min-w-[60px] md:min-w-[80px]">
      <span className="text-xs md:text-sm font-poppins text-gray-700 mb-1">
        {label}
      </span>
      <span className="text-xl md:text-3xl font-bold font-poppins text-black leading-none">
        {value}
      </span>
    </div>
  );
};


// أزرار التنقل بين شرائح المنتج (السهمين)
const ProductSliderControls = () => {
  const handlePrev = () => console.log('Previous button clicked');
  const handleNext = () => console.log('Next button clicked');

  const ButtonStyle = "w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center cursor-pointer shadow-sm";
  const IconStyle = "w-5 h-5 text-black";

  return (
    <div className="flex gap-2">
      <button 
        onClick={handlePrev}
        className={ButtonStyle}
        aria-label="Previous"
      >
        {/* أيقونة السهم الأيسر */}
        <svg xmlns="http://www.w3.org/2000/svg" className={IconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>

      <button 
        onClick={handleNext}
        className={ButtonStyle}
        aria-label="Next"
      >
        {/* أيقونة السهم الأيمن */}
        <svg xmlns="http://www.w3.org/2000/svg" className={IconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );
};

