import React from 'react'
import { assets } from './assets/assets'

const Sidebar = ({ isopen, closeSidebar }) => {
  if (!isopen) return null
  return (

    <div className={`bg-orange-900 fixed  right-0 top-0 w-64 h-full z-50 transition-opacity duration-300
       ${isopen ? 'opacity-100' : 'opacity-0'}z-50 md:hidden block `} >
      <div>
        <button onClick={closeSidebar} className='absolute right-10 top-10 text-2xl font-bold text-white'>X</button>
      </div>
      <div className=' absolute flex flex-col gap-10 w-full  top-36'>
        <div className='flex flex-row justify-center gap-32 items-center'>
          <p className='text-xl text-white'>Home</p>
          <img src={assets.home} alt="" className='w-6' />
        </div>

          <div className='flex flex-row justify-center gap-32 items-center'>
          <p className='text-xl text-white'>Coffee</p>
          <img src={assets.coffebar} alt="" className='w-6' />
        </div>

          <div className='flex flex-row justify-center gap-32 items-center'>
          <p className='text-xl text-white'>Login</p>
          <img src={assets.userlogn} alt="" className='w-6' />
        </div>

          <div className='flex flex-row justify-center gap-32 items-center'>
          <p className='text-xl text-white'>About</p>
          <img src={assets.abouticon} alt="" className='w-6' />
        </div>
      </div>
    </div>

  )
}

export default Sidebar