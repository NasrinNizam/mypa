import React, { useEffect, useState } from 'react';
import { FaHeart, FaHome, FaBuilding, FaRulerCombined } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const WishListCompo = () => {
  // ============= get data from redux
  const wishSlice = useSelector((state)=>state.counterWishList)
  console.log(wishSlice)

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-roboto mt-[100px] mb-[22px] text-center text-gray-800">
          My <span className='text-[#F6B400] '>Wishlist</span>
        </h1>
        <p className='font-roboto text-[20px] text-center mb-[80px] '>Short Description for Wishlist</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="div">
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListCompo;
