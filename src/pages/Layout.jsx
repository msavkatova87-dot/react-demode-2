import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavbarSimple } from '../components/Navbar'
import Logo from '../components/Logo'
// import CarouselCustomNavigation from './Corusel'

const Layout = () => {
  return (
    <div>
       <Logo/>
        <NavbarSimple/>
        {/* <CarouselCustomNavigation/> */}
        <Outlet/>
    </div>
  )
}

export default Layout