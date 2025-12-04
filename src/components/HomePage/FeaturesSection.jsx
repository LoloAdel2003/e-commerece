import React from 'react';

const featuresData = [
  {
    id: 1,
    icon: (
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 md:w-10 md:h-10 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.75 18.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12.75 10.5h.75A.75.75 0 0 1 14.25 11v.25M7.5 16.5h7.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.706 13.684L12.723 6.27l3.993 7.414A.75.75 0 0 1 16.273 15H8.727a.75.75 0 0 1-.021-1.316Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 10.5v-1.5a1.5 1.5 0 0 0-1.5-1.5H8.25A1.5 1.5 0 0 0 6.75 9v1.5m10.5 0h.75a1.5 1.5 0 0 1 1.5 1.5v3.75a1.5 1.5 0 0 1-1.5 1.5H8.25"
        />
      </svg>
    ),
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    id: 2,
    icon: (
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 md:w-10 md:h-10 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v2.25a1.5 1.5 0 0 0 1.5 1.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-2.25m-6 0h6m-6 0H6a2.25 2.25 0 0 1-2.25-2.25v-10.5a2.25 2.25 0 0 1 2.25-2.25h12a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-1.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5h3m-3 0V4.5m3-3V4.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        />
      </svg>
    ),
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    icon: (
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 md:w-10 md:h-10 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

// مكون البطاقة الفردية
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      {/* دائرة الأيقونة الخارجية */}
      <div className="flex items-center justify-center w-20 h-20 md:w-[80px] md:h-[80px] rounded-full bg-black mb-6 border-8 border-gray-300">
        {/* دائرة الأيقونة الداخلية */}
        <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-black">
          {icon}
        </div>
      </div>
      
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};


const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-4 lg:px-[100px]  pb-[50px] font-poppins">
      
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
        {/* استخدام .map للقيام بالـ Loop على البيانات */}
        {featuresData.map((feature) => (
          <FeatureCard 
            key={feature.id} 
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      
    </section>
  );
};

export default FeaturesSection;