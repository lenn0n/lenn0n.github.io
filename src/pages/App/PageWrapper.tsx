import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from 'src/components/Footer/Footer';
import Navbar from 'src/components/Navbar/Navbar';

type Props = {}

function PageWrapper({ }: Props) {
  return (
    <div className='p-4 relative overflow-hidden'>
      {Array.from(Array(200).keys()).map((i) => (<div className="circle-container absolute">
        <div className="circle" key={i}></div>
      </div>))}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default PageWrapper