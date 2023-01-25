import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Header/Navbar'
import Hero from '../Components/Hero/Hero'

const Layout = () => {
  return ( 
  <>
  <Navbar/>
  <Outlet/>
  </> ) 
}

export default Layout