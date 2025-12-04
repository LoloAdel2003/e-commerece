

import React from 'react';
import FeaturesSection from './components/HomePage/FeaturesSection.jsx';
import Hero from './components/HomePage/Hero.jsx';
import Flash from './components/HomePage/Flash.jsx';
import BrowseCategories from './components/HomePage/BrowseCategories.jsx';
import BestSelling from './components/HomePage/BestSelling.jsx';
import ExploreProduct from './components/HomePage/ExploreProduct.jsx';
import Music from './components/HomePage/Music.jsx';
import PromotionalGrid from './components/HomePage/PromotionalGrid.jsx';
const Home = () => {
  return (
   <>
   
 
   <Hero />
   <Flash />
   <BrowseCategories />
   <BestSelling />
   <Music />
   <ExploreProduct />
   <PromotionalGrid />
   <FeaturesSection />
 

   </>
  )
}

export default Home
