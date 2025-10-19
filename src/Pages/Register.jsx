import React from 'react'
import LoginComp from '../components/LoginComp'
import { Link } from "react-router-dom"; // ✅ تم إضافته
import { FaGoogle } from "react-icons/fa6";

  

// صفحة تسجيل الدخول
const Login = () => {
  const inputs = [
    { name: "Name", placeholder: "Name" },
    { name: "email", placeholder: "Email or Phone Number" },
    { name: "password", placeholder: "Password" }
  ]

  return (
    <div className="flex items-center  my-[60px]">
      <LoginComp
        name="Create an account"
        subName="Enter your details below"
        inputs={inputs}
      >
       <div className="">
        <Link to="/" className="w-full justify-center mt-[30px] flex items-center h-[56px] rounded-[4px] bg-[#DB4444] text-white">
        Create Account
        </Link>
         <Link to="/" className="w-full justify-center mt-[30px] flex items-center h-[56px] rounded-[4px] bg-white border border-gray-500 ">
      <FaGoogle className="mr-2"/>
 Sign up with Google
        </Link>
         <div  className="w-full justify-center mt-[30px] flex items-center h-[56px] rounded-[4px]  text-black">
        Already have account?
        <Link to="/login" className="ml-[16px] underline" >Log in</Link>
        </div>
        

       </div>
      </LoginComp>
    </div>
  )
}

export default Login
