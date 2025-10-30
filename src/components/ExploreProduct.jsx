import React, { useContext } from 'react';
import Title from './Title';
import Cards from './Cards';
import  ProductContext  from '../Context/ProductContext' ; // استيراد الـ context

const ExploreProduct = () => {
  const { products } = useContext(ProductContext);

  // عرض أول 8 منتجات فقط
  const firstEightProducts = products.slice(0, 8);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-[100px] pt-[40px] lg:pt-[70px] font-poppins overflow-hidden">
      
      <Title 
        type="Our Product" 
        title="Explore Our Product" 
        slides="true" 
        className="flex-shrink-0" 
      />

      {/* كروت المنتجات */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 mt-8 sm:mt-12 lg:mt-[60px]">
        {firstEightProducts.map((card, index) => (
          <Cards 
            key={index}
            product={card}
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
  );
};

export default ExploreProduct;
