import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Button = ({ name, event = () => {}, padding = '0' }) => {
  useEffect(() => {
    // تطبيق حركة ScrollReveal على الزر
    ScrollReveal().reveal('.animated-btn', {
      duration: 1200,       // مدة الحركة
      scale: 0.6,           // يبدأ الزر صغير بنسبة 60%
      opacity: 0,           // يبدأ بشفافية
      easing: 'ease-in-out',
      reset: false,         // الحركة تحصل مرة واحدة فقط
      delay: 200,           // تأخير بسيط قبل الظهور
    });
  }, []);

  return (
    <div>
      <button
        onClick={event}
        style={{ padding }}
        className="animated-btn w-[140px] md:w-[190px] h-[50px] md:h-[56px] rounded-[4px] bg-[#DB4444] text-white flex justify-center items-center text-[14px] md:text-[16px]
        transition-all duration-300 ease-in-out hover:bg-[#e85c5c] hover:-translate-y-1 hover:shadow-lg active:scale-95"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
