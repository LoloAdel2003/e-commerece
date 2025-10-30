import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ButtonAlt = ({ name, onClick }) => {
  useEffect(() => {
    // تطبيق حركة ScrollReveal على الزر
    ScrollReveal().reveal('.animated-btn-alt', {
      duration: 1200,     // مدة الحركة
      scale: 0.6,         // يبدأ الزر صغير بنسبة 60%
      opacity: 0,         // يبدأ بشفافية
      easing: 'ease-in-out',
      delay: 200,         // تأخير بسيط قبل الحركة
      reset: false,       // يظهر مرة واحدة فقط (يمكن تغييره)
    });
  }, []);

  return (
    <div
      onClick={onClick}
      className="animated-btn-alt font-500 font-medium text-sm py-[16px] px-[48px] border border-gray-300 rounded-[4px] cursor-pointer 
      hover:bg-black hover:text-white transition-all duration-300"
    >
      {name}
    </div>
  );
};

export default ButtonAlt;
