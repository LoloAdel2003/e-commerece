import React from 'react';
import Home from './Home.jsx';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Head from './components/Head.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';

// Layout يحتوي على Header و Footer
const Layout = () => {
  return (
    <>
    <Head />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const LayoutLogin = () => {
  return (
    <>
    <Head />
      <Header isExist={false} />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
   
      <Routes>
        {/* كل المسارات داخل Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
           {/* <Route path="register" element={<Register />} />
           <Route path="login" element={<Login />} /> */}

        </Route>
         <Route path="/" element={<LayoutLogin />}>
          {/* <Route index element={<Home />} /> */}
          
           <Route path="register" element={<Register />} />
           <Route path="login" element={<Login />} />

        </Route>
       
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
