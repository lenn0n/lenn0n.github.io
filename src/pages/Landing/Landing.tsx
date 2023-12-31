import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from "@hooks/useRedux"

import Skills from '@components/Skills/Skills'
import Frame from '@components/Frame/Frame'
import Button from '@components/Button/Button'


type Props = {}

function Landing({ }: Props) {
  const selectedPL = useAppSelector((state) => state.system.selectedPL)
  const [showTransition, setShowTransition] = useState<boolean>(true)

  return (
    <div className="mt-[20px] md:mt-[100px] container mx-auto grid lg:grid-cols-2 place-content-between">
      <div className="">
        <div className="text-[30px] mb-[-10px] hidden sm:block">Hi,</div>
        <div className="text-[40px] sm:text-[80px] flex gap-2 sm:gap-5">
          <div className="">I'm</div>
          <div className="text-cyan-300 transition-all hover:text-cyan-500 " role='button'>Lennon</div>
        </div>
        <div className="text-[20px] sm:text-[35px] text-gray-400 sm:mt-[-20px] flex md:items-center flex-col md:flex-row ">
          <span>Web Developer</span>
          <span className='md:ms-4 text-[16px] text-yellow-300 drop-shadow-xl'>3 yrs work exp.</span>
        </div>
        <div className="text-[16px] sm:text-[20px] text-white-400 mt-[20px] sm:mt-[50px] ">
          Been working in web development since 2011. If you are looking for someone who has experience with following:
        </div>
        <Skills />

        <div className="mt-[20px] sm:mt-[50px] "></div>
        <div className="mb-[10px] sm:text-[20px] text-white-400">Then you are in a good place.</div>

        <Button label="Hire Me!"/>
      </div>
      <div className=" justify-between flex-col hidden lg:flex ms-[20px] me-[10px] xl:ms-[100px]">
        <div className=""></div>
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
        <div className="flex justify-center">
          {/* <div
            role='button'
            className="rounded-[10px] inline-block px-4 py-2 bg-cyan-600  border-cyan-500 border-[3px]
         text-center text-[20px] hover:bg-white hover:text-cyan-900 hover:scale-[1.1] transition-all drop-shadow-xl">
            VIEW GALLERY</div>
          <div
            role='button'
            className="ms-4 rounded-[10px] inline-block px-4 py-2 bg-cyan-600  border-cyan-500 border-[3px]
         text-center text-[20px] hover:bg-white hover:text-cyan-900 hover:scale-[1.1] transition-all drop-shadow-xl">
            SEMINARS ATTENDED</div> */}
        </div>
      </div>
    </div>
  )
}

export default Landing