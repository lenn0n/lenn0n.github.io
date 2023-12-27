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
function Landing({}: Props) {
  const selectedPL = useAppSelector((state) => state.system.selectedPL )

  const ProgrammingIcon = ({ icon }: { icon: string }) => {
    return (
      <img src={icon} alt="" 
      className="rounded-[10px] hover:scale-[1.3] hover:animate-pulse hover:transition-all" 
      height={60} width={60}
      role='button'
      />
    )
  }

  return (
    <div className="mt-10 container mx-auto grid grid-cols-2 place-content-between">
      <div className="">
        <div className="text-[30px] mb-[-10px]">Hi,</div>
        <div className="text-[80px] flex gap-5">
          <div className="">I'm</div>
          <div className="text-danger-600 font-bold">Lennon</div>
        </div>
        <div className="text-[30px] text-gray-400 mt-[-20px] ">Front-End Developer</div>
        <div className="text-[20px] text-white-400 mt-[50px] ">
          We're a brand and digital design agency building brands that matter in culture.
        </div>
        <div className="programming-icons mt-4 flex gap-3 flex-wrap">
            { PLList.map((data) => (
              <ProgrammingIcon icon={data?.icon}/>
            ))}
        </div>
        <div className="rounded-[10px] p-4 bg-orange-600 w-[100px] text-center mt-[60px] font-bold">Hire Me</div>
      </div>
      <div className="">
      { JSON.stringify(selectedPL)}
      </div>
    </div>
  )
}

export default Landing