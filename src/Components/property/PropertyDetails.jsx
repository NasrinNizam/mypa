import React, { useState } from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FcDocument } from "react-icons/fc";
import { FiHome } from "react-icons/fi";
import { FaHome, FaBed, FaBath } from "react-icons/fa";
import { GiResize, GiLandMine } from "react-icons/gi";
import { RiFridgeLine } from "react-icons/ri";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { MdConnectedTv, MdMicrowave } from "react-icons/md";
import { GiGymBag, GiWaterFountain, GiBarbecue } from "react-icons/gi";
import { BiSolidWasher } from "react-icons/bi";
import { PiBathtubLight } from "react-icons/pi";
import { FaSwimmer, FaShower, FaTree } from "react-icons/fa";
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const PropertyDetails = () => {
  // ========== get data from redux =================
  const dataSlice = useSelector((state) => state.counterProperty.value);
  console.log(dataSlice)

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  // ============== slider ===============
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
       <section className="container mb-6">
       <Slider {...settings}>
      <div className='w-[300px] h-[300px] '>
        <img className='w-full h-full' src={dataSlice.imageOne} alt="" />
      </div>
      <div className='w-[300px] h-[300px] '>
        <img className='w-full h-full' src={dataSlice.imageTwo} alt="" />
      </div>
      <div className='w-[300px] h-[300px] '>
         <img className='w-full h-full' src={dataSlice.imageThree} alt="" />
      </div>
      <div className='w-[300px] h-[300px] '>
         <img className='w-full h-full' src={dataSlice.imageFour} alt="" />
      </div>
    </Slider>

       </section>
        <section className="container">
        <div className="w-full bg-[#FFF] rounded-[10px] shadow-md m-3 p-8">
          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                {dataSlice.description}
              </h1>
              <p className="text-2xl font-bold">500 SQFT</p>
            </div>
            <div className=" items-center mt-4">
              <h6 className="text-3xl font-bold text-green-600">{dataSlice.price} $</h6>
              <p className="text-sm flex justify-center text-gray-500">
                (Negotiable)
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="bg-slate-200 flex gap-2 py-5 px-5 pl-2 rounded-md">
              <span className="text-orange-500 pt-[3px]">
                <MdOutlineLocationOn />
              </span>
              <h2 className='w-full '>{dataSlice.location}</h2>
            </div>
            <div className="lg:w-[200px]">
            {/* Rating Section */}
            <div className="w-full mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Rating</span>
                <span>{dataSlice.rating}</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div className="h-full rounded-full" style={{ width: `${(dataSlice.rating / 5) * 100}%`, background: `linear-gradient(to right, #f00, #ff0, #0f0)`, }}></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="w-full bg-[#FFF] rounded-[10px] shadow-md m-3 p-8">
          <div className="flex justify-between">
            <div>
              <h6>Property Overview</h6>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <p className="flex items-center gap-2">
                  <span className="pt-[3px] text-blue-400">
                    <FiHome />
                  </span>
                  Property type:{"  "}
                  <span className="bg-orange-300 p-1 rounded-[6px]">
                    Residential
                  </span>
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2">
                  <span className="pt-[3px] text-blue-400">
                    <FiHome />
                  </span>
                  Purpose:{"  "}
                  <span className="bg-yellow-400 p-1 rounded-[6px]">
                    {/* {dataSlice.purpose} */}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* =============== bedroom ======== */}
          <div className="bg-[#F2FBF8] shadow-md p-10  rounded-lg flex justify-between items-center">
            {/* Flex container for icon and label aligned to the start */}
            <div className="flex justify-center items-center gap-5">
              <div className='bg-white p-3 rounded-xl '><FaBed size={50} color='#00CB84'/></div>
              <div>
                <div className="text-lg font-semibold">Bedroom</div>
                <div className="text-black font-bold">{dataSlice.bedroom} </div>
              </div>
            </div>
           </div>
          {/* =================== bathroom ========== */}
          <div className="bg-[#F2FBF8] shadow-md p-10  rounded-lg flex justify-between items-center">
            {/* Flex container for icon and label aligned to the start */}
            <div className="flex justify-center items-center gap-5">
              <div className='bg-white p-3 rounded-xl '><FaBath size={50} color='#00CB84'/></div>
              <div>
                <div className="text-lg font-semibold">Bathroom</div>
                <div className="text-black font-bold">{dataSlice.bathroom} </div>
              </div>
            </div>
           </div>
          {/* ================= size ============= */}
          <div className="bg-[#F2FBF8] shadow-md p-10  rounded-lg flex justify-between items-center">
            {/* Flex container for icon and label aligned to the start */}
            <div className="flex justify-center items-center gap-5">
              <div className='bg-white p-3 rounded-xl '><GiResize size={50} color='#00CB84'/></div>
              <div>
                <div className="text-lg font-semibold">Property Size</div>
                <div className="text-black font-bold">{dataSlice.square_fit} </div>
              </div>
            </div>
           </div>
      </div>
    </div>
        </div>
      </section>
      {/* ============ */}
      <div className="container p-6 ">
        <div className=" mx-auto bg-white shadow-md rounded-lg p-8">
          {/* About This Property Section */}
          <h2 className="text-2xl font-bold mb-4">About This Property</h2>
          <div className="flex gap-4">
            <div className="w-[6px] bg-yellow-500">.</div>
            <div className="lorem250">
              <p
                className={`leading-relaxed ${
                  isExpanded ? "" : "line-clamp-5"
                } overflow-hidden`}>
                {dataSlice.about_property}
              </p>
              <div className="text-right">
                <button
                  onClick={toggleText}
                  className="text-yellow-500 underline mt-2 focus:outline-none"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features & Amenities Section */}
        <div className=" mx-auto bg-white mt-2 shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mt-3 mb-4">Features & Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
              <TbAirConditioningDisabled className="text-yellow-500" />
              <span>Air Conditioning</span>
            </div>
            <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
              <MdConnectedTv className="text-yellow-500" />
              <span>TV Cable</span>
            </div>
            <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
              <GiBarbecue className="text-yellow-500" />
              <span>Barbeque</span>
            </div>
            <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
              <GiGymBag className="text-yellow-500" />
              <span>Gymnasium</span>
            </div>
            <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
              <FaSwimmer className="text-yellow-500" />
              <span>Swimming Pool</span>
            </div>
            <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
              <MdMicrowave className="text-yellow-500" />
              <span>Microwave</span>
            </div>
            <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
              <FaShower className="text-yellow-500" />
              <span>Outdoor Shower</span>
            </div>
            <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
              <FaTree className="text-yellow-500" />
              <span>Lawn</span>
            </div>
            <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
              <RiFridgeLine className="text-yellow-500" />
              <span>Refrigerator</span>
            </div>
            <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
              <PiBathtubLight className="text-yellow-500" />
              <span>Sauna</span>
            </div>
            <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
              <BiSolidWasher className="text-yellow-500" />
              <span>Washer</span>
            </div>
            <div className="flex items-center bg-blue-100 p-3 rounded-lg space-x-2">
              <GiWaterFountain className="text-yellow-500" />
              <span>Water Fountain</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
