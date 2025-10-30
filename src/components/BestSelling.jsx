import React, { useContext } from 'react';
import Title from './Title';
import Cards from './Cards';
import  ProductContext  from '../Context/ProductContext' ; // استيراد الـ context

const BestSelling = () => {
  const { products } = useContext(ProductContext); // جلب المنتجات من context

const bestSellingProducts = products.filter(product => product.type?.toLowerCase().includes('best'));

  return (
    <>
      <section className="w-full px-4 lg:px-[100px] pt-[50px] lg:pt-[70px] font-poppins overflow-auto scrollbar-hide">
        <Title type="This Month" title="Best Selling Products" button="true" className="flex-shrink-0" />

        <div className="flex gap-7 pb-4 mt-[60px] overflow-auto scrollbar-hide">
          {bestSellingProducts.map((card, index) => (
            <div key={index} className="flex-shrink-0">
              <Cards
                 product={card}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BestSelling;
