import React from 'react'

export const CommonHeading = ({icon , title , detail}) => {
  return (
    <>
            <div className="flex items-center justify-center">
               <div className='w-9 h-9 text-yellow-500'>{icon} </div>
               <h2 className="text-3xl font-bold font-roboto mb-4 inline-block">{title} </h2>
            </div>
            <div className="flex items-center justify-center mb-5 gap-2">
               <div className="w-[60px] h-1 bg-[#F6B400] rounded-lg "></div>
               <div className="w-[20px] h-1 bg-[#F6B400] rounded-lg "></div>
               <div className="w-[8px] h-1 bg-[#F6B400] rounded-lg "></div>
            </div>
            <p className="text-gray-500 text-[20px] font-roboto mb-6 w-[690px] mx-auto text-center ">{detail}
            </p>
    </>
  )
}
