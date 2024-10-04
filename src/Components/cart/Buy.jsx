import React from 'react'
import success from '../../assets/success.json'
import Lottie from 'lottie-react'
export const Buy = () => {
  return (
    <div className='container flex flex-col justify-center items-center w-full h-screen'>
        <div className="px-5 py-3 bg-[#C8F0E2] rounded-lg ">
            <h1 className='text-xl'>Order Successful</h1>
        </div>
        <Lottie className='w-[300px]' animationData={success} loop={true} />;
    </div>
  )
}
