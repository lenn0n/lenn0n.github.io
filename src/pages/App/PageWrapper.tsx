import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from 'src/components/Footer/Footer';
import Navbar from 'src/components/Navbar/Navbar';

type Props = {}

function PageWrapper({}: Props) {
  return (
    <div className=''>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default PageWrapper