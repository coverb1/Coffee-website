import React from 'react';
import { assets } from '../assets/assets';
import { FaSearch } from "react-icons/fa";
const Navbars = () => {
  return (
    <div className="font-poppins">
      <div className='relative w-full '>
        <div className='absolute my-5 top-4 flex gap-8 mx-7'>
          <h1 className='text-white text-xl font-semibold'>WAGUAN <br /> COFFEE</h1>
          <div className='relative mx-5'>
            <input type="text" placeholder='Search here.....'
              className=' outline-none bg-transparent border w-full rounded-xl text-white placeholder-white px-10 py-1 font-semibold' />
            <FaSearch className='absolute right-3 top-1/3 -translate-y-2/4 text-white' />
          </div>

        </div>
        <img src={assets.download} alt="" className='w-full object-cover h-96 object-top rounded-b-3xl' />
        <ul className='flex justify-center gap-6 my-5 absolute right-32 top-4 text-white  text-[14px] cursor-pointer items-center'>
          <li className='relative group hover:text-amber-800 transition-all' >HOME
            <span className='absolute left-0 w-0 -bottom-2 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
          </li>
          <li className='relative group hover:text-amber-800 transition-all'>COFFEE
            <span className='absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
          </li>

          <li className='relative group hover:text-amber-800 transition-all'>BACKERY
            <span className='absolute w-0 h-[2px] left-0 -bottom-2 bg-white transition-all duration-300 group-hover:w-full'></span>
          </li>

          <li className='relative group hover:text-amber-800 transition-all'>SHOP
            <span className='absolute w-0 left-0 -bottom-2 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
          </li>

          <li className='relative group hover:text-amber-800 transition-all'>ABOUT
            <span className='absolute left-0 w-0 -bottom-2 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
          </li>
          <li className='relative bg-white px-8 py-2 text-black rounded-lg cursor-pointer
           hover:bg-amber-800 transition-colors duration-150'
          >LOGIN</li>
        </ul>

        <div className='absolute top-40 mx-28'>
          <h4 className='text-white '>Welcome!</h4> 
          <h2 className='text-white text-2xl font-bold my-3'>We serve the richest coffe <br /> in the city</h2>
          <button className='bg-white p-2 my-4 px-9 text-lg rounded-xl cursor-pointer hover:bg-amber-900
        hover:text-white transition-all'
          >Order Now</button>
        </div>
      </div>

     
<div className='flex justify-between  mx-20 mb-2 items-center'>
  <div className='flex flex-col gap-6'>
    <h1 className='font-bold text-3xl'>Awaken Your Senses</h1>
    <p className='text-black/70'>
      Because Life is too short for bland coffee.our <br/>Brews are an inivtations to taste,to feel <br />
    to savor.</p>
     <div className='flex gap-7 items-center'>
    <button className='bg-amber-900 px-5 py-2 text-white rounded-lg'>Order now</button>
    <button className='border border-black px-5 py-2 rounded-lg'>Join our Bean Club</button>
  </div>
    <div className='flex gap-0 items-center'>
    <img src={assets.prof2} alt="" className='w-14 h-14 rounded-full border-2 border-white -m-2'/>
    <img src={assets.prof2} alt="" className='w-14 h-14 rounded-full border-2 border-white -m-2' />
    <img src={assets.prof2} alt="" className='w-14 h-14 rounded-full border-2 border-white -m-2' />
    <div className='bg-black/20 rounded-full  font-bold w-14 h-14 flex justify-center items-center -m-2'>
    <p >+40</p>
    </div>
  </div>
  <div>
    <p className='text-black/70'>Happy Customers Recommended us!</p>
  </div>
  </div>
  <div className='flex '>
    <img src={assets.cofi} alt="" className='w-[500px]'/>
  </div>
</div>
    </div>
  );
};

export default Navbars;
