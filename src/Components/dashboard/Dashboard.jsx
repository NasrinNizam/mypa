import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome, FaList, FaStar, FaHeart, FaCogs, FaSignOutAlt } from 'react-icons/fa';
import { LuBadgeDollarSign } from "react-icons/lu";
import { useSelector } from 'react-redux';

export const Dashboard = () => {
  const data =  useSelector((state)=>(state.counter.value))
  console.log(data)
  return (
    <>
       <div className="flex h-screen bg-transparent">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg p-4">
        <div className="flex items-center bg-[#C8F0E2] bg-opacity-40 border-[1px] border-[#C8F0E2] rounded-lg p-2 mb-8">
          <img
            src={data.photoURL}
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-3">
            <h4 className="text-xl font-semibold">{data.displayName} </h4>
            <p className="text-sm text-gray-500">User Role</p>
          </div>
        </div>

        <nav className="space-y-4">
          <Link to="#" className="flex items-center text-gray-600 hover:text-orange-500">
            <FaHome className="mr-3" /> Dashboard
          </Link>
         
          <div>
            <p className="flex items-center text-gray-600">
              <FaCogs className="mr-3" /> Appointments
            </p>
          </div>
          <Link to="/wishlist" className="flex items-center text-gray-600 hover:text-orange-500">
            <FaHeart className="mr-3" /> Wishlist
          </Link>
          <Link to="/settings" className="flex items-center text-gray-600 hover:text-orange-500">
            <FaCogs className="mr-3" /> Settings
          </Link>
          <Link to="/logout" className="flex items-center text-gray-600 hover:text-red-500">
            <FaSignOutAlt className="mr-3" /> Logout
          </Link>
        </nav>
      </div>

      {/* Main Dashboard Content */}
      <div className="w-4/5 p-8">
        <h1 className="text-3xl font-semibold mb-6">My Account</h1>

        {/* Smaller Statistics Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white py-4 px-9 rounded-lg shadow-md">
            <h4 className="text-sm font-semibold flex justify-start gap-2 items-center"><FaHome color='orange' size={20} /> Number of Listings</h4>
            <p className="text-2xl font-bold text-orange-500">26</p>
          </div>
          <div className="bg-white py-4 px-9 rounded-lg shadow-md">
            <h4 className="text-sm font-semibold flex justify-start items-center gap-2"><FaStar color='orange' size={20}  />Number of Reviews</h4>
            <p className="text-2xl font-bold text-orange-500">08</p>
          </div>
          <div className="bg-white py-4 px-9 rounded-lg shadow-md">
            <h4 className="text-sm font-semibold flex justify-start items-center gap-2"><FaHeart color='orange' size={20} /> Number of Bookmarked</h4>
            <p className="text-2xl font-bold text-orange-500">57</p>
          </div>
        </div>

        {/* Graph Section */}
        <div className="grid grid-cols-2 gap-9 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h4 className="text-lg font-semibold mb-4">Total Views</h4>
          <div className="h-40 bg-gray-100 flex items-center justify-center rounded-lg">
            {/* Placeholder for chart */}
            <p className="text-gray-500">Graph goes here</p>
          </div>
        </div>

        {/* Subscription Plan */}
        <div className="bg-white p-3 w-[300px] rounded-lg shadow-md flex justify-center items-center">
            <div className='flex flex-col justify-center items-center gap-9'>
              <h4 className="text-lg font-bold text-black flex items-center gap-2"><LuBadgeDollarSign color='orange' /> Starter Plan</h4>
              <div className="flex items-center space-x-8">
                <div className="flex flex-col items-center">
                  <p className="text-2xl font-bold text-gray-800">01</p>
                  <p className="text-xs text-gray-500">Publish Ads</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-2xl font-bold text-gray-800">04</p>
                  <p className="text-xs text-gray-500">Ads Remaining</p>
                </div>
              </div>
            <button className=" px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md text-sm font-semibold">
              Upgrade
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
