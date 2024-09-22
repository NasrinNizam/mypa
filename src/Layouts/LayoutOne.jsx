import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Components/footer/Footer'

export const LayoutOne = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
