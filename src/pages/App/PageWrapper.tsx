import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from 'src/components/Footer/Footer';
import Navbar from 'src/components/Navbar/Navbar';

type Props = {}

function PageWrapper({ }: Props) {
  return (
    <>
      <div className="overflow-hidden h-[90vh] w-[100vw] absolute z-[-2]">
        <div className="relative">
          {Array.from(Array(100).keys()).map((i) => (
            <div className="circle-container absolute">
              <div className="circle" key={i}></div>
            </div>
          ))}
        </div>
      </div>
      <div className='p-4 h-[100vh]'>
        <Navbar />
        <div className='container mx-auto'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default PageWrapper