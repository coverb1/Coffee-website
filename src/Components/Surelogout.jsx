import React from 'react'
import axios from 'axios'
import { API_URL } from '../Loginpage/Loginpage'

const Surelogout = ({ surelogout,functsurelogout }) => {
    if (!surelogout) return null
    return (
        <div className='fixed z-10  w-full h-full  flex flex-col bg-black bg-opacity-30 justify-center items-center'>
            <div className='bg-white p-6 rounded-xl shadow-lg flex flex-col items-center'>
                <p className='font-medium text-lg'>Are you sure You want to logout</p>
                <div className='flex flex-row gap-10 mt-5 '>
                    <button className='bg-amber-900 px-10 py-2 text-white rounded-md '
                    onClick={()=>{
                        try {
                          localStorage.removeItem('token')
                            console.log("logged out well")
                            window.location.href='/'
                        } catch (error) {
                            console.log(error)
                        }
                    }}
                    >Yes</button>
                    <button className='bg-red-700 px-10 py-2 text-white rounded-md '
                   onClick={()=>functsurelogout(false)} >No</button>
                </div>
            </div>
        </div>
    )
}

export default Surelogout