import React from 'react'
import LoginComp from '../components/LoginComp'
import { Link } from "react-router-dom"; // ✅ تم إضافته

  

// صفحة تسجيل الدخول
const Login = () => {
  const inputs = [
    // { name: "Name", placeholder: "Name" },
    { name: "email", placeholder: "Email or Phone Number" },
    { name: "password", placeholder: "Password" }
  ]

  return (
    <div className="flex items-center  my-[60px]">
      <LoginComp
        name="Log in to Exclusive"
        subName="Enter your details below"
        inputs={inputs}
      >
        <div>
       <div className="flex justify-between items-center">
        <Link to="/" className="w-[143px] justify-center mt-[30px] flex items-center h-[56px] rounded-[4px] bg-[#DB4444] text-white">
        Log in
        </Link>
         <Link to="/forget" className="w-[143px] justify-center mt-[30px] flex items-center h-[56px] rounded-[4px] bg-white text-[#DB4444]">
        Forget Password?
        </Link>
        </div>
 <div  className="w-full justify-center mt-[30px] flex items-center h-[56px] rounded-[4px]  text-black">
        Dont Have Account?
        <Link to="/register" className="ml-[16px] underline" >Register</Link>
        </div>
       </div>

      </LoginComp>
    </div>
  )
}

export default Login
