import React from 'react'

type Props = {}

function Landing({}: Props) {
  return (
    <div className="container mx-auto">
      <div className="mt-10">
        <div className="text-[30px] mb-[-10px]">Hi,</div>
        <div className="text-[80px] flex gap-5">
          <div className="">I'm</div>
          <div className="text-danger-600 font-bold">Lennon</div>
        </div>
        <div className="text-[30px] text-gray-400 mt-[-20px] ">Front-End Developer</div>
        <div className="text-[20px] text-white-400 mt-[50px] ">
          We're a brand and digital design agency building brands that matter in culture.
        </div>
      
        <div className="rounded-[10px] p-4 bg-orange-600 w-[100px] text-center mt-[60px] font-bold">Call Me</div>
      </div>
    </div>
  )
}

export default Landing