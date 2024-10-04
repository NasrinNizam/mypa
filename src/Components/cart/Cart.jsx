import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getDatabase, ref, onValue, set, remove } from "firebase/database";

export const Cart = () => {
  // ===== React state variables
  const [addCart, setAddCart] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ====== Get data from Redux
  const cartSlice = useSelector((state) => state.cartData.value);

  // ====== Firebase variables
  const db = getDatabase();

  // ===== Realtime database listener
  useEffect(() => {
    const cartRef = ref(db, 'cart/');
    const unsubscribe = onValue(cartRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        // Ensure quantity is fetched correctly from Firebase
        const itemData = item.val();
        arr.push({
          ...itemData,
          key: item.key, // Use item.key instead of item.id
          quantity: itemData.quantity || 1 // Default to 1 if quantity is not set
        });
      });
      setAddCart(arr);
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, [cartSlice.id, db]);

  // ====== Functions

  // Function to handle adding quantity
  const handleAdd = (id) => {
    // Find the item to update
    const updatedCart = addCart.map(item => {
      if (item.key === id) {
        const updatedQuantity = item.quantity + 1;
        // Update Firebase
        set(ref(db, `cart/${id}/quantity`), updatedQuantity);
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });
    setAddCart(updatedCart);
  };

  // Function to handle removing quantity or removing item
  const handleRemove = (id) => {
    const itemToRemove = addCart.find(item => item.key === id);
    if (itemToRemove) {
      if (itemToRemove.quantity > 1) {
        const updatedQuantity = itemToRemove.quantity - 1;
        // Update Firebase
        set(ref(db, `cart/${id}/quantity`), updatedQuantity);
        setAddCart(prevCart =>
          prevCart.map(item =>
            item.key === id ? { ...item, quantity: updatedQuantity } : item
          )
        );
      } else {
        // Remove item from Firebase
        remove(ref(db, `cart/${id}`))
          .then(() => {
            // Update local state
            setAddCart(prevCart =>
              prevCart.filter(item => item.key !== id)
            );
          })
          .catch(error => {
            console.error("Error removing item: ", error);
          });
      }
    }
  };

  // ====== Total price calculation
  const totalPrice = addCart.reduce(
    (acc, item) => acc + (item.productPrice * item.quantity),
    0
  );

  // ===== Handle Buy Now
  const handleBuy = () => {
    // Optionally dispatch the total price or cart data to Redux
  //  dispatch(totalPrice);
    navigate('/buyProduct');
    handleRemove()
  };

  return (
    <section className='container w-full min-h-screen relative flex flex-col gap-8 p-4'>
      {addCart.length === 0 ? (
        <div className="flex justify-center items-center h-full">
          <h2 className='text-2xl font-semibold'>Your cart is empty</h2>
        </div>
      ) : (
        <>
          {addCart.map((item) => (
            <div key={item.key} className="flex md:justify-between flex-col md:flex-row gap-5 items-center mt-10 bg-transparent mb-5">
              <div className="w-[300px] lg:w-[370px] flex justify-between items-center border-2 border-[#C8F0E2] p-4 rounded-md">
                <div className='lg:w-[180px] w-[100px] h-[100px] lg:h-[180px]  overflow-hidden'>
                  <img className='w-full h-full object-cover' src={item.productImage} alt={item.productDetails} />
                </div>
                <div className="w-[120px] ml-4">
                  <h1 className='lg:text-xl  mb-2 font-normal text-black'>{item.productDetails}</h1>
                  <p className='lg:text-sm  text-gray-500'>{item.productPrice}$</p>
                </div>
              </div>
              <div className='flex lg:gap-7 gap-2'>
                <button
                  onClick={() => handleRemove(item.key)}
                  className='text-lg lg:px-4 px-1 py-1 border-2 border-black rounded-sm text-black hover:bg-red-800 transition-all'
                >
                  <FaMinus />
                </button>
                <h1 className='text-2xl font-bold text-black'>{item.quantity}</h1>
                <button
                  onClick={() => handleAdd(item.key)}
                  className='text-lg lg:px-4 px-1 py-1 border-2 border-black rounded-sm text-black hover:bg-green-800 transition-all'
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          ))}

          <div className="fixed bottom-0 left-0 w-full bg-pink-200 py-5 px-10 flex items-center justify-between">
            <h1 className='text-lg font-roboto font-semibold'>Total: {totalPrice} $</h1>
            <button
              onClick={handleBuy}
              className='px-8 py-3 bg-[#C8F0E2] rounded-md text-center cursor-pointer'
            >
              Buy Now
            </button>
          </div>
        </>
      )}
    </section>
  );
};
