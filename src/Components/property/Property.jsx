import React from 'react'
import { FaBed, FaBath, FaRulerCombined, FaRegHeart, FaCheck  } from 'react-icons/fa';
import { IoGrid } from "react-icons/io5";

export const Property = () => {

      
      
  return (
    <>
     <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out m-4">
      {/* Property Image */}
      <div className="relative">
        <img
          className="w-full h-56 object-cover"
          src="/images/imageOne.png"
          alt="Property"
        />
        {/* Badges */}
        <div className="absolute bottom-2 left-2 flex flex-col gap-2">
          <span className="bg-white border-[1px] border-[#00CB84] flex items-center gap-1 text-black text-xs font-bold px-2 py-1 rounded"><span className='bg-[#00CB84] p-[2px] rounded-full '><FaCheck  color='white' /></span> Governors Consent / C of O</span>
          <span className="bg-white border-[1px] border-[#00CB84] flex items-center gap-1 text-black text-xs font-bold px-2 py-1 rounded"><span className='bg-[#00CB84] p-[2px] rounded-full '><FaCheck  color='white' /></span> Original Property Owner Etc.</span>
        </div>
        {/* Favorite Icon */}
        <button className="absolute top-2 right-2 text-green-500 hover:text-green-700">
           <FaRegHeart />
        </button>
      </div>

      {/* Property Details */}
      <div className="px-3 py-4">
        {/* Title */}
        <h2 className="font-bold text-lg mb-1"> Reasonably Priced Residential Flat</h2>
        <p className="text-gray-500 text-sm mb-5">9000 Sq Ft Ready For Track Down..</p>

        {/* Price */}
        <div className="flex justify-between items-center">
          <span className=" flex items-center gap-1 text-green-600 text-xs font-bold px-2 py-1 rounded-full"><IoGrid /> Apartment</span>
          <span className="font-bold text-xl">$1200/m</span>
        </div>
      </div>

      {/* Property Features */}
      <div className="px-6 py-4 border-t">
        <div className="flex justify-between text-gray-600 text-sm">
          {/* Bedrooms */}
          <div className="flex items-center space-x-1">
            <FaBed className="text-lg" />
            <span>5 Beds</span>
          </div>
          {/* Bathrooms */}
          <div className="flex items-center space-x-1">
            <FaBath className="text-lg" />
            <span>3 Baths</span>
          </div>
          {/* Area */}
          <div className="flex items-center space-x-1">
            <FaRulerCombined className="text-lg" />
            <span>5000 Sqft</span>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded"> Details</button>

        </div>
      </div>
    </div>
  </>
  )
}
