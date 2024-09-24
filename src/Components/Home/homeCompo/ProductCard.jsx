import React from 'react';
import { FaHeart, FaPhoneAlt, FaEnvelope, FaStar } from 'react-icons/fa';
import { HiOutlineEye } from 'react-icons/hi';

const ProductCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg w-80 border border-gray-200 overflow-hidden">
      {/* Image and Heart Icon */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/400x300" // Replace with actual product image URL
          alt="Product"
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
          <FaHeart className="text-green-500" />
        </button>
        {/* Country and Views Section */}
      <div className=" absolute bottom-2 left-2 flex justify-between items-center text-sm text-black bg-white border-[1px] border-[#C8F0E2] rounded-[5px] p-2 w-[90%] ">
        <div className="flex items-center space-x-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg"
            alt="Bangladesh"
            className="w-4 h-4"
          />
          <span>Bangladesh</span>
        </div>
        <div className="flex items-center space-x-1">
          <HiOutlineEye className="text-gray-400" />
          <span className="ml-1">152k views</span>
        </div>
      </div>
      </div>

      

      {/* Content Section */}
      <div className="p-4 pt-0">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Natural Grocery Items for Your Daily
        </h3>

        {/* Category, Rating and Stars */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
              Grocery
            </span>
            <div className="flex items-center ml-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
              <span className="text-gray-500 text-sm ml-1">4.9</span>
            </div>
          </div>
        </div>

        {/* Price and Status Tag */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-bold text-gray-800">$520.00</div>
          <div className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded">
            Featured
          </div>
        </div>

        {/* Contact Icons */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-gray-500" />
            <FaEnvelope className="text-gray-500" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Call</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Message</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
