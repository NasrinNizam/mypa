import React from 'react'
import '../Home/home.css'
import { ButtonOne } from './homeCompo/ButtonOne'
import { FaSearch } from "react-icons/fa";
import { SliderImage } from './homeCompo/SliderImage';
import PricingPlan from './homeCompo/PricingPlan';
import { Advertise } from './homeCompo/Advertise';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CommonHeading } from './homeCompo/CommonHeading';
import { IoLocationOutline } from "react-icons/io5";
import { PiHandHeartFill  } from "react-icons/pi";
import { LocationImage } from './homeCompo/LocationImage';

export const Home = () => {

  // ========== slider variables
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

 
  return (
    <>
    <section className="relative w-full min-h-[100vh]">
      {/* ===== water mark ====== */}
        <div className="one ">
          <img src="images/Group58.svg" alt="watermark" />
        </div>
        <div className=" two ">
          <img className="" src="images/Group26.svg" alt="watermark" />
        </div>
        <div className=" three ">
          <img className="" src="images/Group26.svg" alt="watermark" />
        </div>
      {/* ===== banner part start ======= */}
      <div className="container">
        <div className="w-full h-full flex flex-col items-center justify-center ">
          {/* ===== buttons part ========== */}
          <div className="flex items-center gap-10 mt-[100px] ">
            <ButtonOne icon={<img src='images/online-advertising.png' />} text='15,80,859 Active Ads' bg='bg-[#FDF5DE]' />
            <ButtonOne icon={<img src='images/affiliate-marketing.png' />} text='89,10,902 Active Users' bg='bg-[#E3F7F0]' />
          </div>
          {/* ====== Introduction part ========= */}
          <div className="text-center ">
            <h1 className="text-[56px] mt-[30px] mb-6 font-bold font-roboto text-black leading-[74px] ">World Classified Web is <span className="text-[#F6B400]">MyPA</span> </h1>
            <p className="text-[20px] w-[766px] font-normal font-roboto leading-6 ">Mypa 7 in 1 Classified marketplace in the world, RealEstate, Restaurant, Grocery, Pharmacy, Car Deals, Post Man and Ads.</p>
          </div>
          {/* ======== search part ====== */}
          <div className="px-5 py-[19px] bg-[#C8F0E2] rounded-[10px] mt-[36px] mb-[81px] flex gap-0 items-center ">
            <input className="py-[12px] px-5 " type="text" 
            placeholder='search your preferable property'
             />
            {/* ====== button part ========= */}
            <button className="px-5 py-[12px] bg-[#00CB84] rounded-[10px] flex items-center gap-2 text-white "> 
              <div className=''><FaSearch /></div>
              <p className="text-[18px] font-roboto font-bold ">Search Ads</p>
            </button>
          </div>
          {/* ========== slider part========= */}
          <div className="container mx-auto mt-8 mb-[120px] ">
             <Slider {...settings}>
               <div> <SliderImage image={<img src='images/assets.png' />} bg='bg-[#FCECBE]' title='Real Estae' text='Find your Dreal Properlty from mypa' /></div>
               <div> <SliderImage image={<img src='images/restaurant.png' />} bg='bg-[#CEDEFB]' title='Restaurant' text='Find your Favourite Restaurant from mypa' /></div>
               <div> <SliderImage image={<img src='images/assets.png' />} bg='bg-[#C8F0E2]' title='Grocery' text='Take your Daily Grocery form mypa' /></div>
               <div> <SliderImage image={<img src='images/drugstore.png' />} bg='bg-[#FCECBE]' title='Pharmacy' text='Easy to find pharmacy store near you to mypa' /></div>
               <div> <SliderImage image={<img src='images/dealership.png' />} bg='bg-[#FCDAD7]' title='Car Deals' text='Easy to Find dream car form mypa' /></div>
               <div> <SliderImage image={<img src='images/postman.png' />} bg='bg-[#C8F0E2]' title='Post Man' text='24 hours post man contact to mypa' /></div>
             </Slider>
           </div>
          {/* ========= advertising ========= */}
          <div className="mb-[119px]">
           <CommonHeading icon={<PiHandHeartFill   size='30px' />} title='Featured Advertising' detail='Ecommerce and Classified marketplace in the world, RealEstate, Restaurant, Grocery, Pharmacy, Car Deals, Post Man and Ads.' />
          </div>
          <Advertise />
          {/* ====== top location ===== */}
          <div className="mb-[119px]">
            <div className="mb-[119px]">
              <CommonHeading title='Top Locations' icon={<IoLocationOutline size='30px' />} />
            </div>
            <div className="flex items-center justify-center gap-5">
              <LocationImage image={<img className="w-full h-full rounded-lg " src="images/building.jpg" alt="building" />} flag={ <img src='images/usa.png' alt='flag' />} place='United State' far='950m' />
              <LocationImage image={<img className="w-full h-full rounded-lg " src="images/buildingTwo.jpg" alt="building" />} flag={ <img src='images/bangladesh.png' alt='flag' />} place='Bangladesh' far='953m' />
              <LocationImage image={<img className="w-full h-full rounded-lg " src="images/buildingThree.jpg" alt="building" />} flag={ <img src='images/nigeria.png' alt='flag' />} place='Nigeria' far='950m' />
              <LocationImage image={<img className="w-full h-full rounded-lg " src="images/buildingFour.jpg" alt="building" />} flag={ <img src='images/canada.png' alt='flag' />} place='Canada' far='520m' />
            </div>
          </div>
          {/* ====== pricing plan ===== */}
          <PricingPlan />
        </div>
      </div>
    </section>
    {/* ========= footer part ======= */}
    {/* <Footer /> */}
    </>
  )
}
