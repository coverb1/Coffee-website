import React from 'react'
import { assets } from '../assets/assets'

const Loginpage = () => {
    return (
        <div className='flex h-screen'>
            {/* image */}
            <div className='w-1/2 relative'>
                <img src={assets.login} alt="" className='w-full h-full object-cover' />
                <div className='absolute top-5 left-5 cursor-pointer'>
                    <img src={assets.turningback} className='w-10' alt="" />
                </div>
            </div>
            {/* login */}

            <div className='bg-[#3E2723] w-1/2 flex flex-col justify-center items-center'>
                <h2 className='text-white text-5xl'>Create an account</h2>
                <p className="mb-6 text-white">Already have an account? <span className="text-purple-400 cursor-pointer">Log in</span></p>
                <form className=''>
                    <div className='flex  gap-10'>
                        <input type="text" placeholder='First Name'
                            className='py-3 px-3 rounded-lg bg-transparent bottom-2 text-purple bg-white outline-none ' />
                        <input type="text" placeholder='Last Name' className='py-3 px-3 rounded-lg' />
                    </div>

                    <div className='flex flex-col gap-3 mt-6 relative'>
                        <div>
                            <input type="email"
                                className='w-full py-3 rounded-lg focus outline-none focus:right-2 px-3
                     focus:ring-slate-500' placeholder='Email' />
                            <div className='absolute  top-2 right-4'>
                                <img src={assets.email} alt="" className='w-6 cursor-pointer' />
                            </div>
                        </div>

                        <div className='mt-3 relative'>
                            <input type="password"
                                className='w-full py-3 rounded-lg px-3 outline-none' placeholder='Password ' />
                            <div className='absolute top-2 right-4'>
                                <img src={assets.padlock} alt="" className='w-7 cursor-pointer' />
                            </div>
                        </div>

                    </div>
                    <div className='flex  gap-2 mt-4'>
                        <input type="checkbox" />
                        <span className='text-white'>I agree to the <span className="text-purple-400 cursor-pointer">Terms & Conditions</span></span>
                    </div>
                    <div className='bg-[#C69C72] flex justify-center items-center
                     mt-9 py-3 rounded-lg hover:bg-orange-700 cursor-pointer transition-colors duration-150'>
                        <button className='text-white'>Create account</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Loginpage