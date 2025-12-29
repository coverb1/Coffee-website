import React from 'react'
import { toast } from 'react-toastify'
const Navbaradmin = () => {
    return (
        <div>
            <div className='flex flex-row fle justify-between mx-8 mt-6 items-center'>
                <div className='flex flex-col'>
                    <p className='text-xl font-medium'>Waguan Coffee</p>
                    <p className='text-sm text-amber-900'>Admin Panel</p>
                </div>
                <div className='bg-amber-950 px-4 py-1 cursor-pointer rounded-md'>
                    <p className='text-white'
                        onClick={() => {
                            try {
                                localStorage.removeItem('token')
                               
                                console.log('logout out as admin well')
                                window.location.href='/login'
                            } catch (error) {
                                toast.error("failed to Logout")
                                console.log(error)
                            }
                        }}
                    >Logout</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Navbaradmin