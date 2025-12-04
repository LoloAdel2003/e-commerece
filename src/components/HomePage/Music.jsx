import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const CircularCountdownSegment = ({ num, time }) => {
  return (
    <div className="w-[62px] h-[62px] rounded-full bg-white text-black flex flex-col justify-center items-center font-poppins shadow-md flex-shrink-0">
      <span className="text-xl font-bold leading-none">{num}</span>
      <div className="w-5 h-0.5 bg-black rounded-full my-0.5 opacity-50"></div>
      <span className="font-normal text-[10px]">{time}</span>
    </div>
  );
};

const timerData = [
  { time: 'Hours', num: '23' },
  { time: 'Days', num: '05' },
  { time: 'Minutes', num: '59' },
  { time: 'Seconds', num: '35' },
];

const MusicBanner = () => {
  useEffect(() => {
    // إعداد حركة ScrollReveal على صورة السماعة
    ScrollReveal().reveal('.speaker-img', {
      duration: 1500,       // مدة الحركة بالميلي ثانية
      scale: 0.6,           // تبدأ الصورة بنسبة 60% من حجمها
      easing: 'ease-in-out',
      reset: true,         // ما تتكرر الحركة عند كل تمرير
      delay: 200,           // تأخير بسيط قبل البدء
      opacity: 0,           // تبدأ الصورة بشفافية
    });
  }, []);

  return (
    <div className="px-10 mx-4 md:mx-8 lg:mx-[100px] mt-[140px] bg-black flex justify-center py-10 lg:py-[69px] text-white overflow-hidden">
      <div className="container flex flex-col lg:flex-row justify-between items-center">

        {/* النص والعداد */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg mb-10 lg:mb-0 lg:mr-20">
          <span className="font-semibold text-[#00FF66] text-sm mb-4">
            Categories
          </span>

          <span className="block text-3xl md:text-4xl lg:text-[48px] font-extrabold text-white leading-tight mb-8">
            Enhance Your Music Experience
          </span>

          <div className="flex gap-4 mb-10">
            {timerData.map((item, index) => (
              <CircularCountdownSegment
                key={index}
                num={item.num}
                time={item.time}
              />
            ))}
          </div>

          <button className="bg-[#00FF66] text-black font-medium py-3 px-8 rounded-sm hover:bg-green-400 transition-colors">
            Buy Now!
          </button>
        </div>

        {/* صورة المنتج */}
        <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0 flex justify-center items-center">
          {/* خلفية gradient */}
          <div className="absolute bottom-0 w-[90%] h-[80%] rounded-full bg-gradient-to-t from-white via-white/70 to-transparent opacity-20 blur-2xl"></div>

          {/* Glow أخضر */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-4/5 h-4/5 rounded-full bg-[#FFFFFF] opacity-10 blur-3xl transform scale-170"></div>
          </div>

          {/* الصورة */}
          <div className="relative z-10 px-6 lg:px-0 w-full max-w-lg">
            <img
              src="/imges/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"
              alt="JBL Speaker"
              className="speaker-img w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicBanner;
