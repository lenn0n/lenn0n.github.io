import React from 'react'

type Props = {
  children: React.ReactNode
}

function Frame({ children }: Props) {
  return (
    <div className="h-[220px] border-[20px] rounded-br-[100px] 
    rounded-tl-[100px] border-cyan-600 drop-shadow-xl relative bg-[rgba(255,255,255,0.14)] p-10">
      <div className="absolute h-[80px] rounded-full w-[80px] border-[15px] border-white-900 opacity-30 bottom-[-45px] left-[-45px]"></div>
      <div className="absolute h-[80px] rounded-full w-[80px] border-[15px] border-white-900 opacity-30 top-[-45px] right-[-45px]"></div>
      { children }
    </div>
  )
}

export default Frame