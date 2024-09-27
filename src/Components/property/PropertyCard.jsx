import React, { useState } from 'react'
import { FaBed, FaBath, FaRulerCombined, FaRegHeart, FaCheck  } from 'react-icons/fa';
import { RiNewsLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { IoGrid } from "react-icons/io5";
import PropertyData from '../../PropertyData';
import { useNavigate } from 'react-router-dom';
export const PropertyCard = () => {
  // ======= react variables =================================
  const [isResidential, setIsResidential]  = useState(false)
  const navigate = useNavigate()

  // ======== get data from API =================
  const [data , setData] =useState(PropertyData)
  const handleData =(allData)=>{
      const filterData = PropertyData.filter((filterProducts)=>{
          return filterProducts.type == allData

      })
      setData(filterData)
      console.log(allData)
  }
  // ========== function
  const handleNavigate =()=>{
    navigate('/commercial')
  }

  return (
    <> 
    <div className="container">
      <div className="mt-[80px] ">
          {/*===== Toggle between residential and commercial ======== */}
          <div className="flex">
              <button
              onClick={() => setIsResidential(false)}
              className={`px-5 py-3 rounded-tl-lg text-center font-semibold border-b-[1px] border-b-gray-100 ${
                !isResidential ? 'bg-[#C8F0E2] text-black' : 'bg-[#FCECBE] text-black'
              } rounded-tr-lg transition duration-300 ease-in-out`}>
              Residential
            </button>
              <button
                onClick={handleNavigate}
                className={`px-5 py-3 rounded-tr-xl text-center font-semibold font-roboto text-black border-b-[1px] border-b-gray-100 ${
                    isResidential ? 'bg-[#C8F0E2] text-black' : 'bg-[#FCECBE] text-black'
                } rounded-tl-lg transition duration-300 ease-in-out`}>
                Commercial
              </button>
          </div>
      </div>
      <div className="flex justify-start items-center gap-10 bg-[#C8F0E2] p-5 ">
        <button onClick={()=> setData(PropertyData)} className='text-md font-roboto font-medium'>All</button>
        <button onClick={()=>handleData('apartment')} className='text-md font-roboto font-medium'>Apartment</button>
        <button onClick={()=>handleData('duplex')} className='text-md font-roboto font-medium'>Duplex</button>
        <button onClick={()=>handleData('building')} className='text-md font-roboto font-medium'>Building</button>
        <button onClick={()=>handleData('penthouse')} className='text-md font-roboto font-medium'>Penthouse</button>
        <button onClick={()=>handleData('luxury')} className='text-md font-roboto font-medium'>Luxury</button>
      </div>
      <div className="flex justify-center items-center gap-10 flex-wrap">
          {
            data.map((item)=>(
              <div key={item.id} className="lg:w-[300px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out m-4">
      {/* Property Image */}
      <div className="relative">
        <img
          className="w-full h-56 object-cover"
          src="/images/imageOne.png"
          alt="Property"
          />
        {/* Badges */}
        <div className="absolute bottom-2 left-2 flex flex-col gap-2">
          
          <span className={`bg-white border-[1px] ${item.authority?'border-green-400 border-[1px] ':'border-red-500 border-[1px] '} flex items-center gap-1 text-black text-xs font-bold px-2 py-1 rounded`}><span className={`p-[3px] ${item.authority?'bg-[#00CB84]':'bg-red-500'} rounded-full `}>{item.authority?<FaCheck  color='white' />:<ImCross   color='white' />} </span> Governors Consent / C of O</span>
          <span className={`bg-white border-[1px] ${item.permission?'border-green-400 border-[1px] ':'border-red-500 border-[1px] '} flex items-center gap-1 text-black text-xs font-bold px-2 py-1 rounded`}><span className={`p-[3px] ${item.permission?'bg-[#00CB84]':'bg-red-500'} rounded-full `}>{item.permission?<FaCheck  color='white' />:<ImCross   color='white' />} </span> Original Property Owner Etc.</span>
        </div>
        {/* Favorite Icon */}
        <button className="absolute top-2 right-2 text-green-500 hover:text-green-700">
           <FaRegHeart />
        </button>
      </div>

      {/* Property Details */}
      <div className="px-3 py-4">
        {/* Title */}
        <h2 className="font-bold text-md mb-1">{item.description} </h2>

        {/* Price */}
        <div className="flex justify-between items-center">
          <span className=" flex items-center gap-1 text-green-600 text-xs font-bold px-2 py-1 rounded-full"><IoGrid /> {item.type}</span>
          <span className="font-bold text-xl">{item.rent_per_month}$ </span>
        </div>
      </div>

      {/* Property Features */}
      <div className="px-2 py-4 border-t flex justify-between">
        <div className="flex items-center gap-1 text-gray-600 text-sm">
          {/* Bedrooms */}
          <div className="flex items-center space-x-1">
            <FaBed className="text-md text-red-300 " />
            <span className='text-[13px]'>{item.bedroom} Bed </span>
          </div>
          {/* Bathrooms */}
          <div className="flex items-center space-x-1">
            <FaBath className="text-md text-red-300 " />
            <span className='text-[13px]'>{item.bathroom} Bath </span>
          </div>
          {/* Area */}
          <div className="flex items-center space-x-1">
            <RiNewsLine  className="text-md text-red-300 " />
            <span className='text-[13px]'>{item.square_fit} sqft </span>
          </div>
        </div>
        <button className="bg-[#F6B400] hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded"> Details</button>
      </div>
    </div>
            ))
          }
       </div>
     </div>  
    </>
  )
}
