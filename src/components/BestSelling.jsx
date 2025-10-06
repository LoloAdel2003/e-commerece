import React from 'react'

import Title from './Title'; 
import Cards from './Cards'; 
const BestSelling = () => {
     const cardsData = [
    {
      img: "/imges/g92-2-500x500 1.png", 
      price: "-40%", 
      title: "HAVIT HV-G92 Gamepad", 
      NewPrice: "$120", 
      OldPrice: "$160", 
      num: "88", 
      rating: 4.5
    },
    {
      img: "/imges/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png", 
      price: "-25%", 
      title: "AK-900 Wired Keyboard", 
      NewPrice: "$960", 
      OldPrice: "$1160", 
      num: "75", 
      rating: 4.0
    },
    {
      img: "/imges/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png", 
      price: "-30%", 
      title: "IPS LCD Gaming Monitor", 
      NewPrice: "$370", 
      OldPrice: "$400", 
      num: "99", 
      rating: 5.0
    },
    {
      img: "/imges/gammaxx-l240-argb-1-500x500 1.png", 
      price: "-25%", 
      title: "S-Series Comfort Chair", 
      NewPrice: "$375", 
      OldPrice: "$400", 
      num: "99", 
      rating: 4.5
    },
    {
        img: "/imges/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png", // رابط وهمي للكرسي الثاني
        price: "-25%", 
        title: "S-Series Comfort Chair", 
        NewPrice: "$375", 
        OldPrice: "$400", 
        num: "60", 
        rating: 4.0
    },
  ];
  return (
    <>
      <section className="w-full px-4 lg:px-[135px] pt-[50px] lg:pt-[70px] font-poppins overflow-auto scrollbar-hide">
                <Title type="This Month" title="Best Selling Products" button="true" className="flex-shrink-0" />
               
                <div 
                  className="flex gap-7 pb-4 mt-[60px] overflow-auto scrollbar-hide "
                >
                  {cardsData.map((card, index) => (
                    <div key={index} className="flex-shrink-0">
                      <Cards 
                        img={card.img} 
                        price={card.price} 
                        title={card.title} 
                        NewPrice={card.NewPrice} 
                        OldPrice={card.OldPrice} 
                        num={card.num} 
                        rating={card.rating} 
                      />
                    </div>))}
                </div>
        

</section>
      
    </>
  )
}

export default BestSelling
