import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import CommercialProperty from '../../CommercialData';
import { useSelector } from 'react-redux';
export const Commercial = () => {
   // ======= react variables =================================
   const [isResidential, setIsResidential]  = useState(true)
   const navigate = useNavigate()

   const userSlice =useSelector((state)=>state.counter.value)
 
   // ======== get data from API =================
   const [data , setData] =useState(CommercialProperty)
   const handleData =(allData)=>{
       const filterData = CommercialProperty.filter((filterProducts)=>{
           return filterProducts.category == allData
 
       })
       setData(filterData)
       console.log(allData)
   }
   // ========== function
   const handleNavigate =()=>{
     navigate('/residential')
    // if(userSlice == null){
    // }else{
    //   navigate('/layoutTwo/residential')
    // }
   }
  //  ==========navigate
    const handleContact=()=>{
      if(userSlice == null){
        navigate('/contact')
      }else{
        navigate('/layoutTwo/contact')
      }
    }
  return (
    <>
    <div className="container">
      <div className="mt-[80px] ">
          {/*===== Toggle between residential and commercial ======== */}
          <div className="flex">
              <button
              onClick={()=> handleNavigate(false)}
              className={`px-5 py-3 rounded-tl-lg text-center font-semibold border-b-[1px] border-b-gray-100 ${
                !isResidential ? 'bg-[#C8F0E2] text-black' : 'bg-[#FCECBE] text-black'
              } rounded-tr-lg transition duration-300 ease-in-out`}>
              Residential
            </button>
              <button
                onClick={setIsResidential}
                className={`px-5 py-3 rounded-tr-xl text-center font-semibold font-roboto text-black border-b-[1px] border-b-gray-100 ${
                    isResidential ? 'bg-[#C8F0E2] text-black' : 'bg-[#FCECBE] text-black'
                } rounded-tl-lg transition duration-300 ease-in-out`}>
                Commercial
              </button>
          </div>
      </div>
      <div className="flex justify-start flex-wrap items-center gap-4 sm:gap-6 md:gap-10  bg-[#C8F0E2] p-5 ">
        <button onClick={()=> setData(CommercialProperty)} className='text-md font-roboto font-medium'>All</button>
        <button onClick={()=>handleData('exclusive')} className='text-md font-roboto font-medium'>exclusive</button>
        <button onClick={()=>handleData('expensive')} className='text-md font-roboto font-medium'>expensive</button>
        <button onClick={()=>handleData('medium')} className='text-md font-roboto font-medium'>medium</button>
        <button onClick={()=>handleData('normal')} className='text-md font-roboto font-medium'>normal</button>
        <button onClick={()=>handleData('small')} className='text-md font-roboto font-medium'>small</button>
      </div>
      <div className="flex justify-center items-center gap-10 flex-wrap mt-10 mb-10">
         {
          data.map((item)=>(
            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden lg:w-[320px] w-[270px] ">
            {/* Property Image */}
            <img
              className="w-full h-48 object-cover"
              src={item.image}
              alt="Commercial Property"
            />
      
            {/* Property Details */}
            <div className="p-6 space-y-4">
              {/* Location and Size */}
              <div className="flex justify-between items-center">
                <p className="md::text-lg text-sm font-semibold text-gray-800">📍 {item.location}</p>
                <p className="md:text-md text-sm text-gray-500">🏢 {item.property_size}</p>
              </div>
      
              {/* Property Description */}
              <p className="text-gray-600 h-[70px]">{item.description} </p>
      
              {/* Contact Button */}
              <button className="w-full bg-[#CA8A04] text-white py-3 px-4 rounded-lg shadow-md text-sm font-semibold hover:from-blue-600 hover:to-indigo-700">
                Contact Us
              </button>
            </div>
          </div>
      
          ))
         }
       </div>
     </div>  
    </>
  )
}
