import React from 'react'

type Props = {
  children: React.ReactNode
}

function Frame({ children }: Props) {
  return (
    <div className="h-[190px] border-[8px] 
    rounded-[5px] border-cyan-600 drop-shadow-xl relative bg-[rgba(255,255,255,0.3)] p-10">
      <div className="absolute h-[30px] w-[30px] rounded-md border-dashed border-[6px] border-white-900 opacity-50 top-[-19px] right-[-19px]"></div>
      <div className="absolute h-[30px] w-[30px] rounded-md border-dashed border-[6px] border-white-900 opacity-50 top-[-19px] left-[-19px]"></div>
      <div className="absolute h-[30px] w-[30px] rounded-md border-dashed border-[6px] border-white-900 opacity-50 bottom-[-19px] right-[-19px]"></div>
      <div className="absolute h-[30px] w-[30px] rounded-md border-dashed border-[6px] border-white-900 opacity-50 bottom-[-19px] left-[-19px]"></div>
      { children }
    </div>
  )
}

export default Frame