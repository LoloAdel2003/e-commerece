import React from 'react';
import Head from './components/Head.jsx'
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Flash from './components/Flash.jsx';
import BrowseCategories from './components/BrowseCategories.jsx';
import BestSelling from './components/BestSelling.jsx';
import ExploreProduct from './components/ExploreProduct.jsx'
import Music from './components/music.jsx';
const App = () => {
  return (
   <>
   <Head />
   <Header />
   <Hero />
   
   <Flash />
   <BrowseCategories />
   <BestSelling />
   <Music />
   <ExploreProduct />
   <Footer />

   </>
  )
}

export default App
