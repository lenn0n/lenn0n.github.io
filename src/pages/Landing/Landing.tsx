import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from "@hooks/useRedux"

import Skills from '@components/Skills/Skills'
import Frame from '@components/Frame/Frame'
import Button from '@components/Button/Button'
import Avatar from "@assets/images/avatar.png"


type Props = {}

function Landing({ }: Props) {
  const navigate = useNavigate()
  const selectedPL = useAppSelector((state) => state.system.selectedPL)
  const [showTransition, setShowTransition] = useState<boolean>(true)

  return (
    <div className="xs:mt-[10px] sm:mt-[20px] xl:mt-[100px] grid xl:grid-cols-2 place-content-between">
      <div className="">
        <div className="text-[30px] mb-[-10px] hidden sm:block">Hi,</div>
        <div className="text-[40px] sm:text-[80px] flex gap-2 sm:gap-5">
          <div className="">I'm</div>
          <div className="text-cyan-300 transition-all hover:text-cyan-500 " role='button'>Lennon</div>
        </div>
        <div className="text-[20px] sm:text-[35px] text-gray-400 sm:mt-[-20px] flex md:items-center flex-col md:flex-row ">
          <span>Web Developer</span>
          <span className='md:ms-4 text-[16px] text-yellow-500 drop-shadow-xl'>3 yrs work exp.</span>
        </div>
        <div className="text-[14px] sm:text-[20px] text-white-400 mt-[20px] sm:mt-[50px] ">
          Been working in web development since 2015. If you are looking for someone who has experience with following:
        </div>
        <Skills />
        <div className="mt-[20px] text-[14px]  xs:text-[14px] sm:text-[16px] block xl:hidden">
          <span className='text-yellow-400 me-2'>{selectedPL?.name}</span>
          <span className='text-[#fff] '>- {selectedPL?.desc}</span>
        </div>
        <div className="mt-[20px] sm:mt-[50px] "></div>
        <div className="mb-[10px] sm:text-[20px] text-white-400 hidden xl:block">Then you are in a good place.</div>

        <Button label="Hire Me" onClick={() => { navigate("/contact") }} />
        <div className="inline-block xl:hidden ms-4">
          <Button label="My Journey" onClick={() => { navigate("/demo") }} />
        </div>


      </div>
      <div className=" justify-end flex-col hidden xl:flex ms-[20px] me-[10px] xl:ms-[100px]">
        {/* <div className="flex justify-center ">
          <div className="border-x-[8px] relative border-t-[8px] border-cyan-600 bg-[rgba(255,255,255,0.14)] ">
            <img src={Avatar} alt="" style={{ width: '180px' }} />
            <div className="absolute h-[30px] w-[30px] rounded-md border-dashed border-[6px] border-white-900 opacity-50 bottom-[-19px] right-[-19px]"></div>
            <div className="absolute h-[30px] w-[30px] rounded-md border-dashed border-[6px] border-white-900 opacity-50 bottom-[-19px] left-[-19px]"></div>
            <div className="absolute h-[30px] w-[30px] rounded-md border-dashed border-[6px] border-white-900 opacity-50 top-[-19px] right-[-19px]"></div>
            <div className="absolute h-[30px] w-[30px] rounded-md border-dashed border-[6px] border-white-900 opacity-50 top-[-19px] left-[-19px]"></div>
          </div>
        </div> */}
        <Frame>
          {selectedPL &&
            <div key={selectedPL.name}>
              <div className={`text-[40px] text-cyan-300 text-start ${showTransition ? 'text_1' : ''}`}
                onTransitionEnd={() => { setShowTransition(false) }}>
                {selectedPL?.name}
              </div>
              <div className="text-[20px]">
                {selectedPL?.desc}
                <span className='text-yellow-300 ms-2'>{selectedPL?.exp}</span>
              </div>
            </div>
          }
        </Frame>
        <div className="mt-[40px]">
          <div className="flex justify-center">
            <div className="mb-[10px] sm:text-[20px] text-white-400">Here are some of my frontend development journey.</div></div>

          <div className="flex justify-center"><Button label="My Journey" className='' onClick={() => { navigate("/demo") }} /></div>
        </div>
      </div>

    </div>
  )
}

export default Landing