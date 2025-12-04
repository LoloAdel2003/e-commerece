import React from 'react'
import LoginComp from '../components/LoginComp'
import { Link } from "react-router-dom"; 
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// تعريف Validation Schema
const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

const Login = () => {
  const inputs = [
    { name: "email", placeholder: "Email or Phone Number" },
    { name: "password", placeholder: "Password", type: "password" }
  ];

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="flex items-center my-[60px]">
      <LoginComp
        name="Log in to Exclusive"
        subName="Enter your details below"
        inputs={inputs.map(input => ({ ...input, register, error: errors[input.name] }))}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-[143px] justify-center mt-[30px] flex items-center h-[56px] rounded-[4px] bg-[#DB4444] text-white"
            >
              Log in
            </button>
            <Link
              to="/forget"
              className="w-[143px] justify-center mt-[30px] flex items-center h-[56px] rounded-[4px] bg-white text-[#DB4444]"
            >
              Forget Password?
            </Link>
          </div>

          <div className="w-full justify-center mt-[30px] flex items-center h-[56px] rounded-[4px] text-black">
            Dont Have Account?
            <Link to="/register" className="ml-[16px] underline">Register</Link>
          </div>
        </div>
      </LoginComp>
    </div>
  )
}

export default Login
