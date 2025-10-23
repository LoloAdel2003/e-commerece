import React from 'react';
import Home from './Home.jsx';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Head from './components/Head.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import ProductProvider from './Context/ProductProvider.jsx';
import Cart from './Pages/Cart.jsx';
import Wishlist from './Pages/Wishlist.jsx';
import Contact from './pages/Contact'
import About from './pages/about'
import Profile from './pages/Profile'
import ErrorPage404 from './pages/ErrorPage404'
import ProductDetails from './pages/ProductDetails'

const Layout = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <Head />
        <Header />
      </div>

      
      <div className="mt-[120px] lg:mt[160px]"> 
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

const LayoutLogin = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <Head />
        <Header isExist={false} />
      </div>

      <div className="mt-[120px] lg:mt[160px]">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<ErrorPage404 />} /> 
            <Route path="profile" element={<Profile />} />
 <Route path="/product/:id" element={<ProductDetails />} />                        <Route path="wishlist" element={<Wishlist />} />

          </Route>

          <Route path="/" element={<LayoutLogin />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
