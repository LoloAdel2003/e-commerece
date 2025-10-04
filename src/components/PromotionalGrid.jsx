import React from 'react';
import Title from './Title.jsx'; 


const BannerCard = ({ title, subtitle, imgSrc, customStyles = '', isSpecial = false }) => {
  return (
    <div className={`relative rounded-md overflow-hidden text-white font-poppins ${customStyles}`}>
      
      {/* الصورة */}
      <img
        src={imgSrc}
        alt={title}
        className={` m-auto mt-auto  align-center object-cover ${isSpecial ? 'ms-auto' : ''}`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

      {isSpecial && (
        <div className="absolute top-0 left-0 w-full h-full border-4 border-[#FFAD33] rounded-md"></div>
      )}

      {/* النصوص */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <h3 className="text-xl md:text-2xl font-extrabold mb-2">{title}</h3>
        {subtitle && (
          <p className="text-xs md:text-sm text-gray-300 mb-2">{subtitle}</p>
        )}
        <a
          href="#"
          className="text-white text-sm md:text-base font-medium border-b border-white pb-1 hover:text-[#DB4444] hover:border-[#DB4444] transition duration-200 inline-flex items-center"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

const PromotionalGrid = () => {
  const bannersData = [
    {
      id: 1,
      title: "PlayStation 5",
      subtitle: "Black and White version of the PS5 coming out on sale.",
      imgSrc: "/imges/ps5-slim-goedkope-playstation_large 1.png",
    },
    {
      id: 2,
      title: "Women's Collections",
      subtitle: "Featured women collections that give you another vibe.",
      imgSrc: "/imges/attractive-woman-wearing-hat-posing-black-background 1.png",
      isSpecial: true, // علامة لتمييز هذه البطاقة بالإطار البرتقالي وتعتيم الصورة
    },
    {
      id: 3,
      title: "Speakers",
      subtitle: "Amazon wireless speakers",
      imgSrc: "/imges/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png",
    },
    {
      id: 4,
      title: "Perfume",
      subtitle: "GUCCI INTENSE OUD EDP",
      imgSrc: "/imges/652e82cd70aa6522dd785109a455904c.png",
    },
  ];

  return (
    <section className="container mx-auto px-4 lg:px-[135px] pt-[50px] lg:pt-[100px] pb-[140px] font-poppins">
      <Title type="Featured" title="New Arrival" />

      <div className="grid grid-cols-1 md:grid-cols-2 pt-[60px]  gap-4 md:gap-6">
        
                <BannerCard 
          {...bannersData[0]} 
          customStyles="min-h-[300px]  md:min-h-[600px] md:row-span-2 bg-black" 
        />

        <div className="md:col-span-1 flex flex-col gap-4 md:gap-6">
          
          <BannerCard 
            {...bannersData[1]} 
            customStyles="min-h-[284px] bg-black" 
            isSpecial={false} 
          />
          
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <BannerCard 
              {...bannersData[2]} 
              customStyles="min-h-[284px] bg-black" 
              isSpecial={false} 
            />
            <BannerCard 
              {...bannersData[3]} 
              customStyles="min-h-[284px] bg-black" 
              isSpecial={false} 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromotionalGrid;