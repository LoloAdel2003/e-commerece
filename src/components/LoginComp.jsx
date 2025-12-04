import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// import InputComp from './InputComp';
const InputComp = ({ placeholder, name, register, error, type = "text" }) => {
  return (
    <div className="flex flex-col">
      <input
        type={type}
        {...register(name)} // هنا نربط الـ input بـ react-hook-form
        placeholder={placeholder}
        className="w-[371px] placeholder:text-[16px] opacity-50 border-b border-gray-500 py-2 mb-1 outline-none"
      />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  )
}

const LoginComp = ({ name, subName, inputs, onSubmit ,children}) => {
  const schema = z.object({
     name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  return (
    <div className="flex gap-20 items-center flex-col lg:flex-row w-[1305px]">
      <div className="w-full lg:w-[650px] h-auto rounded-[4px] bg-[#CBE4E8] flex justify-center items-center">
        <img src="/imges/mobile.png" alt="mobile" />
      </div>

      <div className="w-[371px] flex flex-col gap-[24px]">
        <div className="name">
          <span className="font-medium text-[36px] block">{name}</span>
          <span className="pt-[8px] text-[16px] block opacity-70">{subName}</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[10px]">
          {inputs.map((input, index) => (
            <InputComp
              key={index}
              name={input.name}
              placeholder={input.placeholder}
              type={input.type}
              register={register}
              error={errors[input.name]}
            />
          ))}

          {/** children مثل أزرار */}
          {children}
        </form>
      </div>
    </div>
  )
}

export default LoginComp;
