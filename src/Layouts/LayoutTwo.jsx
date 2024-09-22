import React, { useEffect } from 'react'
import { NavbarTwo } from '../Components/Navbar/NavbarTwo'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const LayoutTwo = () => {
   // =========== get data from redux
   const sliceUser = useSelector((state)=>state.counter.value)
   const navigate = useNavigate()
 
   useEffect(()=>{
     if(sliceUser == null){
       navigate('/loginPage')
     }
 
   } ,[])
  return (
    <div>
      <NavbarTwo />
      <Outlet />
    </div>
  )
}
