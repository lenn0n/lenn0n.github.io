import React from 'react'
import Logo from "@assets/images/icons/logo.jpg"
import GitHubIcon from "@assets/images/icons/github.png"
import FacebookIcon from "@assets/images/icons/facebook.png"
import InstagramIcon from "@assets/images/icons/ig.png"
type Props = {}

function Navbar({ }: Props) {
  return (
    <div className='p-4'>
      <div className="mx-auto container">
        <div className="flex justify-between">
          <div className="flex gap-4 justify-center items-center">
            <div className="grid grid-cols-2">

              <div className="flex gap-4 justify-center items-center text-[20px]">
                <div role="button"
                  className='hover:scale-[1.1] transition-all' >About</div>
                <div role="button"
                  className='hover:scale-[1.1] transition-all'>Portfolio</div>
                <div role="button"
                  className='hover:scale-[1.1] transition-all'>Contact</div>
              </div>
            </div>
          </div>
          <div className="flex  gap-4">
            <img
              role="button"
              className='hover:scale-[1.1] transition-all'
              src={GitHubIcon} style={{ width: '30px', height: '30px' }} alt="" />
            <img
              role="button"
              className='hover:scale-[1.1] transition-all'
              src={InstagramIcon} style={{ width: '30px', height: '30px' }} alt="" />
            <img
              role="button"
              className='hover:scale-[1.1] transition-all'
              src={FacebookIcon} style={{ width: '30px', height: '30px' }} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar