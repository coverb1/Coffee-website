import React from 'react';
import { assets } from '../assets/assets';
import { FaSearch } from "react-icons/fa";
const Navbars = () => {
  return (
    <div className="font-poppins">
      <div className='relative w-full'>
        <div className='absolute my-5 top-4 flex gap-8 mx-7'>
          <h1 className='text-white text-xl font-semibold'>WAGUAN <br /> COFFEE</h1>
          <div className='relative mx-5'>
            <input type="text" placeholder='Search here.....'
              className=' outline-none bg-transparent border w-full rounded-xl text-white placeholder-white px-10 py-1 font-semibold' />
            <FaSearch className='absolute right-3 top-1/3 -translate-y-2/4 text-white' />
          </div>

        </div>
        <img src={assets.download} alt="" className='w-full object-cover h-96 object-top' />
        <ul className='flex justify-center gap-6 my-5 absolute right-32 top-4 text-white  text-[14px] cursor-pointer'>
          <li className='relative group'>HOME
            <span className='absolute left-0 w-0 -bottom-2 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
          </li>
          <li className='relative group'>COFFEE
            <span className='absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
          </li>

          <li className='relative group'>BACKERY
            <span className='absolute w-0 h-[2px] left-0 -bottom-2 bg-white transition-all duration-300 group-hover:w-full'></span>
          </li>

          <li className='relative group'>SHOP
            <span className='absolute w-0 left-0 -bottom-2 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
          </li>

          <li className='relative group'>ABOUT
            <span className='absolute left-0 w-0 -bottom-2 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
          </li>
          <li className='relative'>LOGIN</li>
        </ul>

        <div className='absolute top-72 mx-28'>
          <h4 className='text-white '>Welcome!</h4>
          <h2 className='text-white text-2xl font-bold my-3'>We serve the richest coffe <br /> in the city</h2>
          <button className='bg-white p-2 my-4 px-9 text-lg rounded-xl'>Order Now</button>
        </div>

      </div>
    </div>
  );
};

export default Navbars;
