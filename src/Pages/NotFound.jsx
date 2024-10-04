import React from 'react'
import Lottie from "lottie-react";
import notfound from '../assets/notfound.json';
export const NotFound = () => {
  return (
    <div className="w-full h-[100vh] bg-gray-400 flex justify-center items-center ">
      <div className="lg:w-[700px] w-[300px]">
        <Lottie animationData={notfound} loop={true} />;
      </div>
    </div>
  )
}
