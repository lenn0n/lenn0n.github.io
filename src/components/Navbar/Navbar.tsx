import React from 'react'

type Props = {}

function Navbar({}: Props) {
  return (
    <div className='bg-red-500 p-4'>
      <div className="mx-auto container">
        <div className="flex justify-between">
          <div className="">
            <div className="grid grid-cols-2">
              <div className="hidden md:block">LARGE LOGO</div>
              <div className="flex gap-4">
                <div className="">About</div>
                <div className="">Portfolio</div>
                <div className="">Contact</div>
              </div>
            </div>
          </div>
          <div className="">SOCIAL MEDIA ACCOUNTS</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar