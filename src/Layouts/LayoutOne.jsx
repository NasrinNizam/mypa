import React, { useEffect } from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { Footer } from '../Components/footer/Footer'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { NavbarTwo } from '../Components/Navbar/NavbarTwo'

export const LayoutOne = () => {
     const userSliceData = useSelector((state)=>state.counter.value)
     const [counter, setCounter] = useState(userSliceData)
     const [counterTwo, setCounterTwo] = useState(null)
     const navigate = useNavigate()

  // ========== login data =================
  useEffect(()=>{
      setCounterTwo(counter)
      if(userSliceData == null){
        navigate('/login')
      }
    }, [])
 

     

  return (
    <div>
     {counterTwo? <NavbarTwo />:  <Navbar />}
      <Outlet />
      <Footer />
    </div>
  )
}
