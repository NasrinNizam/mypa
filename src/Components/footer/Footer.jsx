import React from 'react'
import { FaAppStoreIos, FaGooglePlay  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FooterItems } from './FooterItems';

export const Footer = () => {
  return (
    <section className="bg-[#C8F0E2] pt-[100px] pb-[28px] relative overflow-hidden ">
        {/* ========== water mark ====== */}
        <div className="absolute top-1/2 left-0 w-[700px] z-[-1] ">
          <img src="images/Group58.svg" alt="watermark" />
        </div>
        <div className="absolute right-0 top-0 w-[300px] z-[-1] overflow-hidden ">
          <img className="" src="images/Group26.svg" alt="watermark" />
        </div>
        {/* =========== footer part ========= */}
        <div className="container">
          <div className="flex items-start  mb-[50px] ">
            <div className="w-[362px] mr-[56px] ">
                <div className="flex items-center gap-[50px] mb-5 ">
                    <Link to="#" className="flex items-center gap-[3px] bg-[#FCECBE] rounded-[5px] p-2 ">
                        <div className="text-[36px] text-blue-500 "><FaAppStoreIos /></div>
                        <div className="div">
                            <h3 className="text-[16px] font-roboto font-bold ">IOS APP</h3>
                            <p className="text-[14px] font-roboto font-normal text-[#707070] ">Download</p>
                        </div>
                    </Link>
                    <div className="two">
                      <Link to="#" className="flex items-center gap-[3px] bg-[#FCECBE] rounded-[5px] p-2 ">
                        <div className="text-[36px] text-sky-400 "><FaGooglePlay  /></div>
                        <div className="div">
                            <h3 className="text-[16px] font-roboto font-bold ">Android</h3>
                            <p className="text-[14px] font-roboto font-normal text-[#707070] ">Download</p>
                        </div>
                      </Link>
                    </div>
                </div>
                <p className="text-[16px] w-[370px] font-roboto font-normal text-[#707070] mt-5 ">E-commerce and Classified marketplace in the world, RealEstate, Restaurant, Grocery, Pharmacy, Car Deals, Post Man and Ads.</p>
            </div>
            <div className="w-[330px] ">
                <FooterItems heading='More from mypa' one='Sell Fast' two='Staffing solutions' three='Ad Promotions' four='Membership' />
            </div>
            <div className="w-[330px]">
                <FooterItems heading='Help & Support' one='Contact Us' two='Stay safe' three='FAQ' four='Support Ticket' />
            </div>
            <div className="w-[330px]">
                <FooterItems heading='About mypa' one='About Us' two='Careers' three='Terms and Conditions' four='Privacy policy' />
            </div>
         </div>
         {/* ============ icon part =========== */}
         <div className="w-full px-10 bg-white flex justify-between items-center ">
            <div className="text-[29px] "><img src="images/Logo.svg" alt="logo" /></div>
            <div className="flex items-center gap-[30px] ">
              <Link to="#">  <img src="images/instagram.png" alt="icon" /></Link>
              <Link to="#"> <img src="images/twitter.png" alt="icon" /></Link>
              <Link to="#">  <img src="images/linkedin.png" alt="icon" /></Link>
              <Link to="#">   <img src="images/facebook.png" alt="icon" /></Link>
              <Link to="#">   <img src="images/youtube.png" alt="icon" /></Link>
            </div>
            <div className="flex items-center gap-5 ">
               <div className=""><Link to="#"><img className='w-full ' src="images/paypal.png" alt="" /></Link></div>
               <div className=""><Link to="#"><img className='w-full ' src="images/visa.png" alt="" /></Link></div>
               <div className=""><Link to="#"><img className='w-full ' src="images/credit-card.png" alt="" /></Link></div>
               <div className=""><Link to="#"><img className='w-full ' src="images/Paystack_Logo.png" alt="" /></Link></div>
               <div className=""><Link to="#"><img className='w-full ' src="images/Remita-Logo.png" alt="" /></Link></div>
               </div>
         </div>
         {/* ======= copyright part ===== */}
         <div className="mt-6 text-[16px] font-normal font-roboto text-[#707070] text-center ">Copyright © Winstar IT & Technologies</div>
      </div>
    </section>
  )
}
