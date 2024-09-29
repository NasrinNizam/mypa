import React, { useState } from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FcDocument } from "react-icons/fc";
import { FiHome } from "react-icons/fi";
import { FaHome, FaBed } from "react-icons/fa";
import { GiResize, GiLandMine } from "react-icons/gi";
import { RiFridgeLine } from "react-icons/ri";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { MdConnectedTv, MdMicrowave } from "react-icons/md";
import { GiGymBag, GiWaterFountain, GiBarbecue } from "react-icons/gi";
import { BiSolidWasher } from "react-icons/bi";
import { PiBathtubLight } from "react-icons/pi";
import { FaSwimmer, FaShower, FaTree } from "react-icons/fa";
import { useSelector } from 'react-redux';
export const PropertyDetails = () => {
  // ========== get data from redux =================
  const data = useSelector((state) =>state.products);
  console.log(data)

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
        <section className="container">
        <div className="w-full bg-[#FFF8E8] rounded-[10px] shadow-md m-3 p-8">
          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                A Luxurious Storey Building for Sale/Rent/Short Let
              </h1>
              <p className="text-2xl font-bold">6500 SQFT</p>
            </div>
            <div className=" items-center mt-4">
              <h6 className="text-3xl font-bold text-green-600">₦98,000</h6>
              <p className="text-sm flex justify-center text-gray-500">
                (Negotiable)
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <div className="bg-slate-200 flex gap-2 py-2 pl-2 pr-[915px] rounded-md">
              <span className="text-orange-500 pt-[3px]">
                <MdOutlineLocationOn />
              </span>
              52, C, Mohammadpur, Dhaka, Bd
            </div>
            <div className="bg-slate-200 flex gap-2 py-2 px-2 rounded-md">
              <span className="text-orange-500 pt-[3px]">
                <MdDateRange />
              </span>
              02 months ago
            </div>
            <div className="bg-slate-200 flex gap-2  py-2 px-2 rounded-md">
              <span className="pt-[3px]">
                <FcDocument />
              </span>
              152k <span className="text-blue-400">views</span>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="w-full bg-[#FFF8E8] rounded-[10px] shadow-md m-3 p-8">
          <div className="flex justify-between">
            <div>
              <h6>Property Overview</h6>
            </div>
            <div className="flex gap-5">
              <div>
                <p className="flex gap-2">
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
                <p className="flex gap-2">
                  <span className="pt-[3px] text-blue-400">
                    <FiHome />
                  </span>
                  Purpose:{"  "}
                  <span className="bg-yellow-400 p-1 rounded-[6px]">
                    For sell
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="div">
          <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div
            className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
          >
            {/* Flex container for icon and label aligned to the start */}
            <div className="flex items-start mb-2 space-x-4">
              <div></div>
              <div>
                <div className="text-lg font-semibold">abc</div>
                <div className="text-gray-600">5</div>
              </div>
            </div>

            {/* Rating Section */}
            <div className="w-full mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Rating</span>
                {/* <span>{item.rating.toFixed(1)}</span> */}
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div
                  className="h-full rounded-full"
                  style={{
                    // width: `${(item.rating / 5) * 100}%`,
                    background: `linear-gradient(to right, #f00, #ff0, #0f0)`,
                  }}
                ></div>
              </div>
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
          <p className=" mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p className=" mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="flex gap-4">
            <div className="w-[6px] bg-yellow-500">.</div>
            <div className="lorem250">
              <p
                className={`leading-relaxed ${
                  isExpanded ? "" : "line-clamp-5"
                } overflow-hidden`}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente facere provident, obcaecati consequatur deserunt
                asperiores! Nisi quas temporibus vel saepe tenetur voluptatibus
                aut, alias, nulla placeat minus nam, laudantium porro possimus
                fugit veritatis eum exercitationem. Modi cum esse fugit nobis
                iste fuga nihil ad mollitia ducimus, harum officia doloremque
                neque maiores alias fugiat quas incidunt aperiam at explicabo,
                rerum, minima accusamus. Minus distinctio voluptatibus non quos
                ipsa, rerum repudiandae fuga numquam nemo exercitationem quia
                dolorum maiores cupiditate alias, ullam nisi possimus,
                consequuntur illo enim. Quae incidunt architecto molestias magni
                voluptatibus corporis distinctio eum placeat amet natus,
                blanditiis ab molestiae necessitatibus assumenda at eos et.
                Minima saepe blanditiis, obcaecati ad incidunt itaque eligendi
                unde, laudantium ab consequuntur, fugit officia sunt nemo. Unde
                quibusdam suscipit magnam dignissimos. Porro aperiam iusto
                nobis. Esse molestiae, animi facilis ducimus, repudiandae nihil
                numquam pariatur nostrum veritatis magni accusamus consectetur
                quaerat inventore voluptatem id vel? Esse atque officiis natus
                quia magnam omnis cupiditate totam voluptates, expedita
                excepturi, praesentium explicabo est minima quisquam et porro
                saepe nisi. Fugiat eveniet earum, ipsam delectus, a, maxime
                libero dicta asperiores minima esse culpa. Molestiae deserunt
                quas quaerat, minus et repudiandae vero, doloremque eius
                nesciunt obcaecati quidem ex porro impedit magnam ipsum. Ea
                neque qui beatae illo quaerat impedit officia delectus quibusdam
                earum voluptatum ipsum dignissimos, facere reiciendis quisquam
                ratione necessitatibus repellat quos dicta accusantium non! Fuga
                iusto quasi, ratione, optio modi dignissimos assumenda ab
                officia odit libero praesentium laboriosam dolor nulla suscipit
                necessitatibus. Velit totam accusantium expedita corrupti
                sapiente impedit obcaecati.
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
