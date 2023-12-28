import React from 'react'
import { useAppSelector } from "@hooks/useRedux"
import JavascriptIcon from "@assets/images/icons/js.png"
import HTMLIcon from "@assets/images/icons/html-5.png"
import CSSIcon from "@assets/images/icons/css.png"
import BSIcon from "@assets/images/icons/bootstrap.png"
import ASIcon from "@assets/images/icons/as.png"
import DockerIcon from "@assets/images/icons/docker.png"
import GithubIcon from "@assets/images/icons/git.png"
import MySQLIcon from "@assets/images/icons/mysql.png"
import NGINXIcon from "@assets/images/icons/nginx.png"
import NodeJSIcon from "@assets/images/icons/nodejs.png"
import PHPIcon from "@assets/images/icons/php.png"
import ReactIcon from "@assets/images/icons/react.png"
import RestAPIIcon from "@assets/images/icons/rest.png"
import TWIcon from "@assets/images/icons/tailwind.svg"
import TSIcon from "@assets/images/icons/typescript.png"
import VueIcon from "@assets/images/icons/vue.svg"
import ExpressIcon from "@assets/images/icons/express-js.png"
import ReduxIcon from "@assets/images/icons/redux.png"

type Props = {}
const PLList = [
  {
    name: "Javascript",
    icon: JavascriptIcon
  },
  {
    name: "TypeScript",
    icon: TSIcon
  },
  {
    name: "HTML",
    icon: HTMLIcon
  },
  {
    name: "CSS",
    icon: CSSIcon
  },
  {
    name: "Boostrap",
    icon: BSIcon
  },

  {
    name: "Docker",
    icon: DockerIcon
  },
  {
    name: "Github",
    icon: GithubIcon
  },
  {
    name: "mySQL",
    icon: MySQLIcon
  },
  {
    name: "NGINX",
    icon: NGINXIcon
  },
  {
    name: "NodeJS",
    icon: NodeJSIcon
  },
  {
    name: "PHP",
    icon: PHPIcon
  },
  {
    name: "ReactJS",
    icon: ReactIcon
  },
  {
    name: "Restful API",
    icon: RestAPIIcon
  },
  {
    name: "Tailwind",
    icon: TWIcon
  },
  {
    name: "Redux",
    icon: ReduxIcon
  },
  {
    name: "VueJS",
    icon: VueIcon
  },
  {
    name: "Express",
    icon: ExpressIcon
  },
  {
    name: "Android Studio",
    icon: ASIcon
  },

]
function Landing({ }: Props) {
  const selectedPL = useAppSelector((state) => state.system.selectedPL)

  const ProgrammingIcon = ({ icon }: { icon: string }) => {
    return (
      <div className="flex justify-center w-[50px] h-[50px] rounded-[20px]">
        <img src={icon} alt=""
          className="rounded-[10px] hover:scale-[1.3] hover:animate-pulse hover:transition-all"
          role='button'
        />
      </div>
    )
  }

  return (
    <div className="mt-[130px] container mx-auto grid lg:grid-cols-2 place-content-between">
      <div className="">
        <div className="text-[30px] mb-[-10px]">Hi,</div>
        <div className="text-[80px] flex gap-5">
          <div className="">I'm</div>
          <div className="text-cyan-500 transition-all hover:text-cyan-300" role='button'>Lennon</div>
        </div>
        <div className="text-[35px] text-gray-400 mt-[-20px] flex items-center  ">
          <span>Web Developer</span>
          <span className='ms-4 text-[15px] text-yellow-300'>3 years actual exp.</span>
        </div>
        <div className="text-[20px] text-white-400 mt-[50px] ">
          Been working in web development since 2011. If you are looking for someone who has experience with following:
        </div>
        <div className="programming-icons mt-4 flex gap-3 flex-wrap">
          {PLList.map((data) => (
            <ProgrammingIcon icon={data?.icon} />
          ))}
        </div>

        <div className="mt-[30px] "></div>
        <div className="mb-[10px] text-[20px] text-white-400">Then you are in a good place.</div>

        <div
          role='button'
          className="rounded-[10px] px-4 py-2 bg-cyan-600 w-[120px] border-cyan-500 border-[3px]
         text-center text-[20px] hover:bg-white hover:text-cyan-900 hover:scale-[1.1] transition-all">
          Hire Me!</div>
      </div>
      <div className="">
        {/* { JSON.stringify(selectedPL)} */}
      </div>
    </div>
  )
}

export default Landing