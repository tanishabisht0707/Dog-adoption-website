import React from 'react'
import Footer from './compnents/Footer/Footer'
import Header from './compnents/Header/Header'
// import Home from './compnents/Home/Home'
import {Outlet} from 'react-router-dom'





const Layout = () => {
  return (
  <>
  <div className='layout'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  </>
     
  )
}

export default Layout