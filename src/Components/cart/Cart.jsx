import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getDatabase, ref, onValue } from "firebase/database";

export const Cart = () => {
  // ===== react variables
  const [addCart, setAddCart] = useState([]);
  const navigate = useNavigate()
  
  // ====== get data from redux
  const cartSlice = useSelector((state)=>state.cartData.value);
  
  // ====== firebase variables
  const db = getDatabase();
  
  // ===== realtime database
  useEffect(()=>{
    const starCountRef = ref(db, 'cart/');
    onValue(starCountRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item)=>{
        if(item.val().productId !== cartSlice.id){
          arr.push({...item.val(), key: item.key, quantity: 1 }); // Add quantity field here
        }
      });
      setAddCart(arr);
    });
  }, [cartSlice.id, db]);
  
  // ====== functions
  const handleAdd = (id) => {
    setAddCart(addCart.map(item => item.key === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const handleRemove = (id) => {
    setAddCart(addCart.map(item => item.key === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  // ====== total price calculation
  const totalPrice = addCart.reduce((acc, item) => acc + (item.productPrice * item.quantity), 0);
  // ====== navigate
  const handleBuy=()=>{
    localStorage.removeItem('cartSlice')

    navigate('/buyProduct')
  }

  return (
    <section className='container w-full h-full relative flex flex-col gap-8'>
      {
        addCart.map((item) => (
          <div key={item?.key} className="flex lg:justify-between flex-col lg:flex-row gap-5 items-center mt-10 bg-transparent mb-5">
            <div className="lg:w-[350px] w-[280px] lg:h-[230px] h-[200px] border-2 border-[#C8F0E2] p-4 flex justify-between items-center">
              <div className='lg:w-[180px] w-[120px] lg:h-[180px] h-[120px] overflow-hidden'>
                <img className='w-full h-full' src={item?.productImage} alt="img" />
              </div>
              <div className="lg:w-[120px] w-[100px] ">
                <h1 className='text-xl mb-2 font-normal text-black'>{item?.productDetails} </h1>
                <p className='text-sm text-gray-500'>{item?.productPrice}$ </p>
              </div>
            </div>
            <div className='flex gap-7'>
              <button onClick={() => handleRemove(item?.key)} className='text-lg px-4 py-1 border-2 border-black rounded-sm text-black hover:bg-red-800 transition-all'>
                <FaMinus />
              </button>
              <h1 className='text-2xl font-bold text-black'>{item?.quantity}</h1>
              <button onClick={() => handleAdd(item?.key)} className='text-lg px-4 py-1 border-2 border-black rounded-sm text-black hover:bg-green-800 transition-all'>
                <FaPlus />
              </button>
            </div>
          </div>
        ))
      }

      <div className="fixed bottom-0 left-0 w-full bg-pink-200 py-5 px-10 flex items-center justify-between">
        <h1 className='text-lg font-roboto font-semibold'>Total: {totalPrice} $</h1>
        <Link onClick={()=>handleBuy()} className='px-8 py-3 bg-[#C8F0E2]' to='/buyProduct'>Buy Now</Link>
      </div>
    </section>
  );
};
