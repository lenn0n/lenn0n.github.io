import React from 'react'
import Item from '../../Item/Item'

import SSBA1 from "@assets/images/screenshots/btcagrix/agrix-1.jpeg"
import SSBA2 from "@assets/images/screenshots/btcagrix/agrix-2.png"
import SSBA3 from "@assets/images/screenshots/btcagrix/agrix-3.png"
import SSBA4 from "@assets/images/screenshots/btcagrIX/btc-1.png"
import SSBA5 from "@assets/images/screenshots/btcagrIX/btc-2.png"
import SSBA6 from "@assets/images/screenshots/btcagrIX/btc-3.png"

type Props = {}

function S2022({ }: Props) {
  return (
    <div className="">
      <div className="text-[25px] lg:text-[40px] font-bold">May 2022</div>
      <div className="text-[22px] text-[#ccc] mb-4">
       MLM sites again and nothing much.
      <span className='text-yellow-500 ms-3'>#VueJS #Bootstrap #VisJS</span>
      </div>
      <div className="grid grid-cols-5 gap-3">
        <Item preview={SSBA1} />
        <Item preview={SSBA2} />
        <Item preview={SSBA3} />
        <Item preview={SSBA4} />
        <Item preview={SSBA5} />
        <Item preview={SSBA6} />
      </div>
    </div>
  )
}

export default S2022