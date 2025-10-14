import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { FaSearch } from "react-icons/fa";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Navbars = () => {
  const navigate = useNavigate()
  const API_URL = import.meta.env.VITE_API_URL
  const [explorefood, setexplorefood] = useState([])
  useEffect(() => {
    const getexplorecoffee = async () => {
      try {
        const responce = await axios.get(`${API_URL}/getfood`)
        setexplorefood(responce.data)
        console.log('food fetched well!', explorefood)
      } catch (error) {
        console.log("failde to fetch", error)
      }
    }
    getexplorecoffee()
  }, [])
  return (
    <div className="font-poppins bg-amber-100 overflow-hidden">
      <div className='relative w-full '>
        <img src={assets.download} alt="" className='w-full object-cover h-96 object-top rounded-b-3xl' />
        <div className='bg-white '>
          <div className='absolute my-5 top-4 flex gap-8 mx-7 '>
            <h1 className='text-white text-xl font-semibold'>WAGUAN <br /> COFFEE</h1>
            <div className='relative mx-5'>
              <input type="text" placeholder='Search here.....'
                className='hidden md:block md:outline-none md:bg-transparent md:border md:w-full 
                md:rounded-xl md: text-white md: placeholder-white
                md: px-10 md:py-1 md:font-semibold' />
              <img src={assets.menu} alt="" className='w-8 ml-36' />
              <FaSearch className='hidden md:block md:absolute md:right-3 
              md:top-1/3 md:-translate-y-2/4 md: text-white' />
            </div>
          </div>
          <ul className='hidden md:flex md:justify-center md:gap-6 md:my-5 
          md:absolute md:right-32 md:top-4 md: text-white  md:text-[14px] 
          md:cursor-pointer md:items-center'>
            <li className='relative group hover:text-amber-800 transition-all' >HOME
              <span className='absolute left-0 w-0 -bottom-2 h-[2px]
               bg-white transition-all duration-300 group-hover:w-full'></span>
            </li>
            <li className='relative group hover:text-amber-800 transition-all'>COFFEE
              <span className='absolute -bottom-2 left-0 w-0 h-[2px]
               bg-white transition-all duration-300 group-hover:w-full'></span>
            </li>

            <li className='relative group hover:text-amber-800 transition-all'>BACKERY
              <span className='absolute w-0 h-[2px] left-0 -bottom-2
               bg-white transition-all duration-300 group-hover:w-full'></span>
            </li>

            <li className='relative group hover:text-amber-800 transition-all'>SHOP
              <span className='absolute w-0 left-0 -bottom-2 h-[2px]
               bg-white transition-all duration-300 group-hover:w-full'></span>
            </li>

            <li className='relative group hover:text-amber-800 transition-all'>ABOUT
              <span className='absolute left-0 w-0 -bottom-2 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
            </li>
            <li onClick={() => navigate('/login')}
              className='relative bg-white px-8 py-2 text-black rounded-lg cursor-pointer
           hover:bg-amber-800 transition-colors duration-150'
            >LOGIN</li>
          </ul>
        </div>
        <div className='absolute top-40 mx-28'>
          <h4 className='text-white '>Welcome!</h4>
          <h2 className='text-white text-xl md:text-2xl font-bold my-3'>We serve the richest coffe <br /> in the city</h2>
          <button className='bg-white p-1 md:p-2 my-4 px-9 text-base md:text-lg 
          rounded-xl cursor-pointer hover:bg-amber-900
        hover:text-white transition-all  whitespace-nowrap'
          >Order Now</button>
        </div>
      </div>


      <div className='flex flex-col md:flex-row justify-between  mx-20 mb-2 items-center'>
        <div className=' flex flex-col gap-6'>
          <h1 className='font-bold text-xl md:text-3xl'>Awaken Your Senses</h1>
          <p className='text-black/70'>
            Because Life is too short for bland coffee.our <br />Brews are an inivtations to taste,to feel <br />
            to savor.</p>
          <div className='flex flex-col md:flex-row gap-7 items-center'>
            <button className='bg-amber-900 px-5 py-1 md:py-2 text-white rounded-lg
             whitespace-nowrap'>Order now</button>
            <button className='border border-black px-5 py-2 rounded-lg whitespace-nowrap'>Join our Bean Club</button>
          </div>
          <div className='flex gap-0 items-center'>
            <img src={assets.prof2} alt="" className='w-14 h-14 rounded-full border-2 border-white -m-2' />
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
          <img src={assets.cofi} alt="" className='w-[100px] md:w-[500px]' />
        </div>
      </div>
      <div className='flex justify-center flex-col items-center'>
        <h1 className='font-bold text-xl md:text-2xl'>Our Best Coffee</h1>
        <p className='text-black/70'>Explore The recent Most About Drinks This week</p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-28 mt-10 mb-10 relative w-full'>
        <div className='relative'>
          <img src={assets.icyayi1} alt="" className=' h-60 w-80 
          object-cover rounded-md' />
          <div className='absolute top-44 left-9'>
            <p className='text-white/50 font-bold text-2xl'>African Tea</p>
          </div>
        </div>
        <div className='relative'>
          <img src={assets.icyayi2} alt="" className='h-60 w-80 
          object-cover rounded-md' />
          <div className='absolute top-44 left-9'>
            <p className='text-white/50 font-bold text-2xl'>African Tea</p>
          </div>
        </div>
        <div className='relative'>
          <img src={assets.icyayi3} alt="" className='h-60 w-80 
          object-cover rounded-md' />
          <div className='absolute top-44 left-9'>
            <p className='text-white/80 font-bold text-2xl'>African Tea</p>
          </div>
        </div>
      </div>
      <div className='hidden md:flex md:flex-row flex-col  gap-28 justify-center items-center mt-24'>
        <div className='flex flex-col justify-center items-center'>
          <img src={assets.coffeeicon} alt="" className='w-12 h-12' />
          <p className='text-amber-900 text-base font-semibold'>Hot Coffee</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={assets.coffeicon} alt="" className='w-12 h-12' />
          <p className='text-amber-900 text-base font-semibold'>Cold Coffee</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={assets.hoticon} alt="" className='w-12 h-12' />
          <p className='text-amber-900 text-base font-semibold'>Cup Coffee</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={assets.portfoliobag} alt="" className='w-12 h-12' />
          <p className='text-amber-900 text-base font-semibold'>Dessert</p>
        </div>
      </div>

      <div className='bg-white rounded-lg mt-10'>
        <div className='flex justify-center items-center pt-7 font-bold text-2xl'>
          <p>Our Special Coffee</p>
        </div>
        <div className='flex flex-col mx-3 md:mx-0 md:grid md:grid-cols-4 '>

          {explorefood.map((item) => {
            return (
              <div key={item._id}>
                <div className=' mx-6 mt-10 bg-black/20 w-72 mb-5 rounded-md '>
                  <img src={`${API_URL}/uploads/${item.image}`} alt=""
                    className='w-full h-60 rounded-lg object-cover' />
                  <div className='mx-2 '>
                    <div className='mt-2'>
                      <p className='font-bold text-amber-950'>{item.Name}</p>
                      <p className=' text-amber-950'>{item.description}</p>
                    </div>
                    <div className='flex justify-between mt-3'>
                      <p className='font-bold'>${item.price}</p>
                      <button
                        className='bg-orange-900 px-3 py-1 mb-2 rounded-md text-white'>Order now</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center mt-10'>
        <div>
          <img src={assets.umufukaaa} alt="" className='w-80' />
        </div>
        <div>
          <p className='font-bold text-amber-950 text-lg md:text-2xl' >Check out Our coffee Best <br />Coffee</p>
          <button className='bg-amber-950 text-white px-1 py-2 mx-9 md:mx-0 rounded-md mt-2 whitespace-nowrap'>Explore Our products</button>
        </div>
        <div>
          <img src={assets.tellme} alt="" className='w-80' />
        </div>
      </div>
    </div>
  );
};

export default Navbars;
