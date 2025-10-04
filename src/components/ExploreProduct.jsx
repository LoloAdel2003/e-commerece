import React from 'react'
import Title from './Title'; 
import Cards from './Cards'; 

const ExploreProduct = () => {
  const cardsData = [
    {
      img: "/imges/71RdoeXxtrL 1.png", 
      price: "-40%", 
      title: "HAVIT HV-G92 Gamepad", 
      NewPrice: "$120", 
      OldPrice: "$160", 
      num: "88", 
      rating: 4.5
    },
    {
      img: "/imges/eos-250d-03-500x500 1.png", 
      price: "-25%", 
      title: "AK-900 Wired Keyboard", 
      NewPrice: "$960", 
      OldPrice: "$1160", 
      num: "75", 
      rating: 4.0
    },
    {
      img: "/imges/ideapad-gaming-3i-01-500x500 1.png", 
      price: "-30%", 
      title: "IPS LCD Gaming Monitor", 
      NewPrice: "$370", 
      OldPrice: "$400", 
      num: "99", 
      rating: 5.0
    },
    {
      img: "/imges/curology-j7pKVQrTUsM-unsplash 1.png", 
      price: "-25%", 
      title: "S-Series Comfort Chair", 
      NewPrice: "$375", 
      OldPrice: "$400", 
      num: "99", 
      rating: 4.5
    },
    {
      img: "/imges/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png", 
      price: "-25%", 
      title: "S-Series Comfort Chair", 
      NewPrice: "$375", 
      OldPrice: "$400", 
      num: "60", 
      rating: 4.0
    },
    {
      img: "/imges/Copa_Sense 1.png", 
      price: "-40%", 
      title: "HAVIT HV-G92 Gamepad", 
      NewPrice: "$120", 
      OldPrice: "$160", 
      num: "88", 
      rating: 4.5
    },
    {
      img: "/imges/GP11_PRD3 1.png", 
      price: "-25%", 
      title: "AK-900 Wired Keyboard", 
      NewPrice: "$960", 
      OldPrice: "$1160", 
      num: "75", 
      rating: 4.0
    },
    {
      img: "/imges/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png", 
      price: "-30%", 
      title: "IPS LCD Gaming Monitor", 
      NewPrice: "$370", 
      OldPrice: "$400", 
      num: "99", 
      rating: 5.0
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-[135px] pt-[40px] lg:pt-[70px] font-poppins overflow-hidden">
      
      <Title 
        type="Our Product" 
        title="Explore Our Product" 
        slides="true" 
        className="flex-shrink-0" 
      />

      {/* كروت المنتجات */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 mt-8 sm:mt-12 lg:mt-[60px]">
        {cardsData.map((card, index) => (
          <Cards 
            key={index}
            img={card.img} 
            price={card.price} 
            title={card.title} 
            NewPrice={card.NewPrice} 
            OldPrice={card.OldPrice} 
            num={card.num} 
            rating={card.rating} 
          />
        ))}
      </div>

      {/* زر عرض المزيد */}
      <div className="flex justify-center mt-8 sm:mt-12 mb-12 sm:mb-16">
        <button className="bg-[#DB4444] text-white text-sm sm:text-base font-medium py-3 sm:py-4 px-8 sm:px-12 rounded-[4px] hover:bg-red-600 transition-colors">
          View All Products
        </button>
      </div>

      {/* خط فاصل أسفل القسم */}
      <div className="w-full h-[1px] bg-gray-200"></div>
    </section>
  )
}

export default ExploreProduct
