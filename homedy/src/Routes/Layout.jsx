import React from 'react'
import Footer from '../Layout/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../components/NavBar/Header'


export default function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    {/* <div style={{marginTop:"2rem"}}> */}
    <Footer />
    {/* </div> */}
    </>
  )
}
