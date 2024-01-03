import React from 'react'
import Item from '../../Item/Item'

import SSOLE1 from "@assets/images/screenshots/ole/ole-1.png"
import SSOLE2 from "@assets/images/screenshots/ole/ole-2.png"
import SSOLE3 from "@assets/images/screenshots/ole/ole-3.png"
import SSOLE4 from "@assets/images/screenshots/ole/ole-4.png"
import SSVB1 from "@assets/images/screenshots/vacaybucks/vb-1.png"
import SSVB2 from "@assets/images/screenshots/vacaybucks/vb-2.png"
import SSVB3 from "@assets/images/screenshots/vacaybucks/vb-3.png"
import SSVB4 from "@assets/images/screenshots/vacaybucks/vb-4.png"

type Props = {}

function S2023({ }: Props) {
  return (
    <div className="">
      <div className="text-[25px] lg:text-[40px] font-bold">Building, re-creating and improving</div>
      <div className="text-[22px] text-[#ccc] mb-4">
        These are my biggest project that has many features 
        such as deposit/withdrawal, P2P transactions, payment thru plaid and elavon, account management and statistics.
      <span className='text-yellow-500 ms-3'>#ReactJS #VueJS #Bootstrap #Tailwind</span>
      </div>
      <div className="grid grid-cols-5 gap-3">
        <Item preview={SSOLE1} />
        <Item preview={SSOLE2} />
        <Item preview={SSOLE3} />
        <Item preview={SSOLE4} />
        <Item preview={SSVB1} />
        <Item preview={SSVB2} />
        <Item preview={SSVB3} />
        <Item preview={SSVB4} />
      </div>
    </div>
  )
}

export default S2023