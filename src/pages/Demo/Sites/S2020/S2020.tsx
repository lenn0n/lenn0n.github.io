import React from 'react'
import Item from '../../Item/Item'

import SSYZ1 from "@assets/images/screenshots/yazsee/yz-1.jpeg"
import SSYZ2 from "@assets/images/screenshots/yazsee/yz-2.png"
import SSYZ3 from "@assets/images/screenshots/yazsee/yz-3.png"
import SSYZ4 from "@assets/images/screenshots/yazsee/yz-4.png"
import SSYZ5 from "@assets/images/screenshots/yazsee/yz-5.png"
import SSYZ6 from "@assets/images/screenshots/yazsee/yz-6.jpeg"
import SSYZ7 from "@assets/images/screenshots/yazsee/yz-7.jpeg"
import SSYZ8 from "@assets/images/screenshots/yazsee/yz-8.png"
import SSYZ9 from "@assets/images/screenshots/yazsee/yz-9.png"

type Props = {}

function S2020({ }: Props) {
  return (
    <div className="">
      <div className="text-[25px] lg:text-[40px] font-bold">First Project</div>
      <div className="text-[22px] text-[#ccc] mb-4">My first task as a Front-End developer was to develop 
      an online streaming site that involves upload videos, go live, interactions, comments and more. 
      It was fun and finally met Docker containers.
      <span className='text-yellow-500 ms-3'>#ReactJS #Bootstrap #Docker</span>
      </div>
      <div className="grid grid-cols-5 gap-3">
        <Item preview={SSYZ1} />
        <Item preview={SSYZ2} />
        <Item preview={SSYZ3} />
        <Item preview={SSYZ4} />
        <Item preview={SSYZ5} />
        <Item preview={SSYZ6} />
        <Item preview={SSYZ7} />
        <Item preview={SSYZ8} />
        <Item preview={SSYZ9} />
      </div>
    </div>
  )
}

export default S2020