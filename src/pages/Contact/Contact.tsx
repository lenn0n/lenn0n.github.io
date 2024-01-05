import React from 'react'
import FBIcon from "@assets/images/social/fb.svg"
import DiscordIcon from "@assets/images/social/discord.svg"
import LinkedInIcon from "@assets/images/social/linkedin.svg"
import TwitterIcon from "@assets/images/social/twitter.svg"
import GithubIcon from "@assets/images/social/github.svg"
import TelegramIcon from "@assets/images/social/telegram.svg"
type Props = {}

function Contact({ }: Props) {
  return (
    <div className="mt-[50px]">
      <div className="text-[25px] lg:text-[40px] text-cyan-400 font-medium">Keep In Touch</div>

      <div className="h-[70px] w-[70px]">
        <img src={FBIcon} alt="" style={{ width: '100%'}}/>
      </div>
      <div className="h-[70px] w-[70px]">
        <img src={DiscordIcon} alt="" style={{ width: '100%'}}/>
      </div>
      <div className="h-[70px] w-[70px]">
        <img src={LinkedInIcon} alt="" style={{ width: '100%'}}/>
      </div>
      <div className="h-[70px] w-[70px]">
        <img src={TwitterIcon} alt="" style={{ width: '100%'}}/>
      </div>
      <div className="h-[70px] w-[70px]">
        <img src={GithubIcon} alt="" style={{ width: '100%'}}/>
      </div>
      <div className="h-[70px] w-[70px]">
        <img src={TelegramIcon} alt="" style={{ width: '100%'}}/>
      </div>
      <div className="h-[70px] w-[70px]">
        <img src={FBIcon} alt="" style={{ width: '100%'}}/>
      </div>
    </div>
  )
}

export default Contact