import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Header/Navbar'
import Hero from '../Components/Hero/Hero'
import Layout from './Layout'

const Home = () => {
  return (
   <>
 <Layout/>
<Hero/>
   </>
  )
}
export default Home ;