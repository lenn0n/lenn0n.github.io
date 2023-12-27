import React from 'react'
import Logo from "@assets/images/icons/logo.jpg"
import GitHubIcon from "@assets/images/icons/github.png"
import FacebookIcon from "@assets/images/icons/facebook.png"
type Props = {}

function Navbar({}: Props) {
  return (
    <div className='p-4'>
      <div className="mx-auto container">
        <div className="flex justify-between">
          <div className="flex gap-4 justify-center items-center">
            <div className="grid grid-cols-2">
              <div className="hidden md:block"><img src={Logo} width="40" alt="" /></div>
              <div className="flex gap-4 justify-center items-center">
                <div className="">About</div>
                <div className="">Portfolio</div>
                <div className="">Contact</div>
              </div>
            </div>
          </div>
          <div className="flex  gap-4">
          <img src={GitHubIcon} width="40" alt="" />
          <img src={FacebookIcon} width="40" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar