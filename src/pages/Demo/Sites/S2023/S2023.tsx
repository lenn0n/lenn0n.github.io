import React from 'react'
import Item from '../../Item/Item'

import SSOLE1 from "@assets/images/screenshots/ole/ole-1.png"
import SSOLE2 from "@assets/images/screenshots/ole/ole-2.png"
import SSOLE3 from "@assets/images/screenshots/ole/ole-3.png"
import SSOLE4 from "@assets/images/screenshots/ole/ole-4.png"
import SSVB1 from "@assets/images/screenshots/vacaybucks/vb-1.png"
import SSVB2 from "@assets/images/screenshots/vacaybucks/vb-2.png"

type Props = {}

function S2023({ }: Props) {
  return (
    <div className="">
      <div className="text-[25px] lg:text-[40px] font-bold">January 2023</div>
      <div className="text-[22px] text-[#ccc] mb-4">
       
      <span className='text-yellow-500 ms-3'>#ReactJS #Bootstrap #Tailwind</span>
      </div>
      <div className="grid grid-cols-5 gap-3">
        <Item preview={SSOLE1} />
        <Item preview={SSOLE2} />
        <Item preview={SSOLE3} />
        <Item preview={SSOLE4} />
        <Item preview={SSVB1} />
        <Item preview={SSVB2} />
      </div>
    </div>
  )
}

export default S2023