

import React from 'react';
import Head from './components/Head.jsx'
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Flash from './components/Flash.jsx';
import BrowseCategories from './components/BrowseCategories.jsx';
import BestSelling from './components/BestSelling.jsx';
import ExploreProduct from './components/ExploreProduct.jsx'
import Music from './components/Music.jsx';
import PromotionalGrid from './components/PromotionalGrid.jsx'
import FeaturesSection from './components/FeaturesSection.jsx'
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
