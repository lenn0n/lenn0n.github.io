import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from "@assets/images/icons/logo.jpg"
import GitHubIcon from "@assets/images/icons/github.png"
import FacebookIcon from "@assets/images/icons/facebook.png"
import InstagramIcon from "@assets/images/icons/ig.png"
type Props = {}

function Navbar({ }: Props) {
  const navigate = useNavigate()
  return (
    <div className='xs:p-2 sm:p-4'>
      <div className="mx-auto container">
        <div className="flex justify-between">
          <div className="flex gap-4 justify-center items-center">
              <div className="flex gap-4 justify-center items-center lg:text-[20px]">
                <div role="button" 
                  onClick={()=> { navigate("/") }}
                  className='hover:scale-[1.1] transition-all' >About</div>
                <div role="button"
                   onClick={()=> { navigate("/demo") }}
                  className='hover:scale-[1.1] transition-all'>Journey</div>
                <div role="button"
                   onClick={()=> { navigate("/contact") }}
                  className='hover:scale-[1.1] transition-all'>Contact</div>
              </div>
          </div>
          <div className="hidden  gap-4 sm:flex">
            <a href="https://github.com/lenn0n" target='_blank'>
              <img
                role="button"
                className='hover:scale-[1.1] transition-all'
                src={GitHubIcon} style={{ width: '30px', height: '30px' }} alt="" />
            </a>

            <a href="https://www.instagram.com/lennon_benedict" target='_blank'>
              <img
                role="button"
                className='hover:scale-[1.1] transition-all'
                src={InstagramIcon} style={{ width: '30px', height: '30px' }} alt="" />
            </a>
            {/* <img
              role="button"
              className='hover:scale-[1.1] transition-all'
              src={FacebookIcon} style={{ width: '30px', height: '30px' }} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar