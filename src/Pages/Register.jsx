import React from 'react'
import LoginComp from '../components/LoginComp'
import { Link } from "react-router-dom"; 
import { FaGoogle } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// تعريف Schema للتسجيل
const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema)
  });

  const inputs = [
    { name: "name", placeholder: "Name" },
    { name: "email", placeholder: "Email or Phone Number" },
    { name: "password", placeholder: "Password", type: "password" }
  ];

  const onSubmit = (data) => {
    console.log("Register Data:", data);
  };

  return (
    <div className="flex items-center my-[60px]">
      <LoginComp
        name="Create an account"
        subName="Enter your details below"
        inputs={inputs.map(input => ({ ...input, register, error: errors[input.name] }))}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <button
            type="submit"
            className="w-full justify-center mt-[30px] flex items-center h-[56px] rounded-[4px] bg-[#DB4444] text-white"
          >
            Create Account
          </button>

          <Link
            to="/"
            className="w-full justify-center mt-[30px] flex items-center h-[56px] rounded-[4px] bg-white border border-gray-500"
          >
            <FaGoogle className="mr-2"/>
            Sign up with Google
          </Link>

          <div className="w-full justify-center mt-[30px] flex items-center h-[56px] text-black">
            Already have account?
            <Link to="/login" className="ml-[16px] underline">Log in</Link>
          </div>
        </div>
      </LoginComp>
    </div>
  )
}

export default Register
