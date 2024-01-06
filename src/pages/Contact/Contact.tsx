import React from 'react'
import Lottie from "lottie-react";

import FBIcon from "@assets/images/social/fb.svg"
import DownloadIcon from "@assets/images/icons/download.png"
import LinkedInIcon from "@assets/images/social/linkedin.svg"
import TwitterIcon from "@assets/images/social/twitter.svg"
import GithubIcon from "@assets/images/social/github.svg"
import TelegramIcon from "@assets/images/social/telegram.svg"
import CheckIcon from "@assets/images/icons/check.png"
import Resume from "@assets/others/resume.pdf"
import DemoLink from "@assets/images/icons/demo-link.png"
import AnimationData from "@assets/others/Office.json"

type Props = {}

function Contact({ }: Props) {
  return (
    <div className="mt-[40px] md:mt-[80px]">
      <div className='grid md:grid-cols-2 mx-'>
        <div className="w-[40%] md:w-[80%] hidden md:flex items-center justify-center">
          <Lottie animationData={AnimationData} loop={true} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-10">
          <div className="">
            <div className="text-[25px] lg:text-[40px] text-cyan-400 font-medium">Connect With Me</div>
            <div className="mt-3 sm:mt-5 flex gap-4 items-center">
              <div className="h-[25px] w-[25px] sm:h-[40px] sm:w-[40px] ">
                <img src={FBIcon} alt="" style={{ width: '100%' }} />
              </div>
              <a href="https://m.me/lenn0n_13" target='_blank'>
                <span className='text-[15px] sm:text-[20px] hover:text-yellow-500'>Messenger</span>
              </a>
            </div>

            <div className="mt-3 sm:mt-5 flex gap-4 items-center">
              <div className="h-[25px] w-[25px] sm:h-[40px] sm:w-[40px] ">
                <img src={TwitterIcon} alt="" style={{ width: '100%' }} />
              </div>
              <a href="https://twitter.com/101394Lenn0n" target='_blank'>
                <span className='text-[15px] sm:text-[20px] hover:text-yellow-500'>Twitter</span>
              </a>
            </div>

            <div className="mt-3 sm:mt-5 flex gap-4 items-center">
              <div className="h-[25px] w-[25px] sm:h-[40px] sm:w-[40px] ">
                <img src={LinkedInIcon} alt="" style={{ width: '100%' }} />
              </div>
              <a href="https://www.linkedin.com/in/lennon-benedict-jansuy-4887a7279/" target='_blank'>
                <span className='text-[15px] sm:text-[20px] hover:text-yellow-500'>LinkedIn</span>
              </a>
            </div>

            <div className="mt-3 sm:mt-5 flex gap-4 items-center">
              <div className="h-[25px] w-[25px] sm:h-[40px] sm:w-[40px] ">
                <img src={GithubIcon} alt="" style={{ width: '100%' }} />
              </div>
              <a href="https://github.com/lenn0n" target='_blank'>
                <span className='text-[15px] sm:text-[20px] hover:text-yellow-500'>Github</span>
              </a>
            </div>

            <div className="mt-3 sm:mt-5 flex gap-4 items-center">
              <div className="h-[25px] w-[25px] sm:h-[40px] sm:w-[40px] ">
                <img src={TelegramIcon} alt="" style={{ width: '100%' }} />
              </div>
              <a href="https://t.me/get_in_touch_lennon" target='_blank'>
                <span className='text-[15px] sm:text-[20px] hover:text-yellow-500'>Telegram</span>
              </a>
            </div>
          </div>

          <div className="flex justify-start flex-col">
            <div className="text-[25px] lg:text-[40px] text-cyan-400 font-medium">Links</div>
            <div className="mt-3 sm:mt-5 flex gap-4 items-center">
              <div className="h-[25px] w-[25px] sm:h-[40px] sm:w-[40px] ">
                <img src={DownloadIcon} alt="" style={{ width: '100%' }} />
              </div>
              <a href={Resume} target='_blank'>
                <span className='text-[15px] sm:text-[20px] hover:text-yellow-500'>My Resume</span>
              </a>
            </div>
            <div className="mt-3 sm:mt-5 flex gap-4 items-center">
              <div className="h-[25px] w-[25px] sm:h-[40px] sm:w-[40px] ">
                <img src={DemoLink} alt="" style={{ width: '100%' }} />
              </div>
              <a href="https://fir-crud-8d71b.web.app" target='_blank'>
                <span className='text-[15px] sm:text-[20px] hover:text-yellow-500'>DevChallenges.io</span>
              </a>
            </div>

            <div className="mt-[50px] text-[14px] flex gap-2">
              <img src={CheckIcon} alt="" style={{ height: '20px', width: '20px'}} />
              This website was last updated in January 2024.</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact