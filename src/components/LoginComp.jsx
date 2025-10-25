import React from 'react'
const InputComp = ({ placeholder, name }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="w-[371px] placeholder:text-[16px] opacity-50 border-b border-gray-500 py-2 mb-4 outline-none"
    />
  )
}
const LoginComp = ({ children, name, subName, inputs }) => {
  return (
    <div className="flex gap-20 items-center flex-col lg:flex-row w-[1305px] ">
      <div className="w-full lg:w-[650px] h-auto rounded-[4px] bg-[#CBE4E8] flex justify-center items-center">
        <img src="/imges/mobile.png" alt="mobile" className="" />
      </div>

      <div className="w-[371px]  flex flex-col gap-[24px]">
        <div className="name">
          <span className="font-medium text-[36px] block">
            {name}
          </span>
          <span className="pt-[8px] text-[16px] block opacity-70">
            {subName}
          </span>
        </div>

        <form action="" method="POST" className="flex flex-col gap-[10px]">
          {inputs.map((e, index) => (
            <InputComp key={index} name={e.name} placeholder={e.placeholder} />
          ))}

          {children}
        </form>
      </div>
    </div>
  )
}

export default LoginComp
