import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { data, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { StoreContext } from '../context/Storecontext'
import { jwtDecode } from 'jwt-decode'

export const API_URL = import.meta.env.VITE_API_URL

const Loginpage = () => {
    const { getUserdata, userData } = useContext(StoreContext)
    const navigate = useNavigate()
    const [currentstate, setcurrentstate] = useState("Login")
    const [Firstname, setFirstname] = useState("")
    const [Secondname, setSecondname] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const handleregister = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${API_URL}/registered`, {
                Firstname, Secondname, Email, Password
            })
            setEmail('')
            setFirstname('')
            setSecondname('')
            setPassword('')
            toast.success('You are registered well ')
        } catch (error) {
            console.log("failed to Register")
            toast.error('failed to Register')
        }
    }

    const handlelogin = async (e) => {
        e.preventDefault()
        try {
            const loginresponce = await axios.post(`${API_URL}/login`, {
                Email, Password
            })
            const token = loginresponce.data.token //get token
            localStorage.setItem('token', loginresponce.data.token) //settoken
            const decode = jwtDecode(token)
            const role = decode.Role

            toast.success('Login successful')

            if (role === 'Admin') {
                navigate('/admin')
            }
            else {
                navigate('/')
            }

        } catch (error) {
            console.log("logged in failed", error)
            toast.error("failed to login")
        }
    }

    return (
        <div className='flex h-screen overflow-hidden'>
            <div className='md:block hidden w-1/2 relative'>
                <img src={assets.login} alt="" className='md:block hidden w-full 
                 h-full object-cover' />
                <div className='absolute top-5 left-5 cursor-pointer'>
                    <img onClick={() => navigate('/')} src={assets.turningback}
                        className='w-10 md:block ' alt="" />
                </div>
            </div>

            <div className='bg-[#3E2723] md:w-1/2 w-full relative  flex flex-col justify-center items-center'>
                <img onClick={() => navigate('/')} src={assets.turningback}
                    className='w-10 absolute  top-10 left-7 md:hidden block' alt="" />
                <h2 className='text-white md:text-5xl mb-7 text-2xl'>{currentstate}</h2>
                {currentstate === 'Login' ?
                    <p className="mb-6 text-white">No Account? <span onClick={() => setcurrentstate("Create an Account")} className="text-purple-400 cursor-pointer">Sign up</span></p>
                    :
                    <p className="mb-6 text-white">Already have account? <span onClick={() => setcurrentstate("Login")} className="text-purple-400 cursor-pointer">Login</span></p>
                }

                <form onSubmit={currentstate === 'Login' ? handlelogin : handleregister}>
                    {currentstate === 'Login' ? (
                        <>
                            {/* Email */}
                            <div className='relative mt-3'>
                                <input
                                    type="email"
                                    placeholder='Email'
                                    className='py-3 pl-5 pr-16 rounded-lg outline-none w-[300px]'
                                    value={Email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <img
                                    src={assets.email}
                                    alt=""
                                    className='absolute right-4 top-1/2 transform -translate-y-1/2 w-6'
                                />
                            </div>

                            {/* Password */}
                            <div className='relative mt-3'>
                                <input
                                    type="password"
                                    placeholder='Password'
                                    className='py-3 pl-5 pr-16 rounded-lg outline-none w-[300px]'
                                    value={Password} onChange={(e) => setPassword(e.target.value)}
                                />
                                <img
                                    src={assets.padlock}
                                    alt=""
                                    className='absolute right-4 top-1/2 transform -translate-y-1/2 w-6'
                                />
                            </div>
                            <div className='bg-white mt-10 p-3 flex justify-center items-center
                           hover:bg-amber-700 hover:text-white rounded-md cursor-pointer '>
                                <button

                                >Sign in</button>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* First Name + Last Name stacked */}
                            <div className=' mt-3 flex flex-col gap-4'>
                                <div className=' relative   '>
                                    <input
                                        type="text"
                                        placeholder='First Name'
                                        className='py-3 pr-16 px-3 rounded-lg outline-none w-[300px]'
                                        value={Firstname} onChange={(e) => setFirstname(e.target.value)}
                                    />
                                    <img src={assets.user} alt="" className='w-5 absolute top-1/4 right-9' />
                                </div>
                                <div className='relative'>
                                    <input
                                        type="text"
                                        placeholder='Last Name'
                                        className='py-3 pr-16 px-3 rounded-lg outline-none w-[300px]'
                                        value={Secondname} onChange={(e) => setSecondname(e.target.value)}
                                    />
                                    <img src={assets.user} alt="" className='w-5 absolute top-1/4 right-9' />
                                </div>
                            </div>

                            {/* Email */}
                            <div className='relative mt-3'>
                                <input
                                    type="email"
                                    placeholder='Email'
                                    className='py-3 px-3 rounded-lg outline-none w-[300px]'
                                    value={Email} onChange={(e) => setEmail(e.target.value)}
                                />
                                <img
                                    src={assets.email}
                                    alt=""
                                    className='absolute right-9 top-1/2 transform -translate-y-1/2 w-5'
                                />
                            </div>

                            {/* Password */}
                            <div className='relative mt-3'>
                                <input
                                    type="password"
                                    placeholder='Password'
                                    className='py-3 px-3 rounded-lg outline-none w-[300px]'
                                    value={Password} onChange={(e) => setPassword(e.target.value)}
                                />
                                <img
                                    src={assets.padlock}
                                    alt=""
                                    className='absolute right-9 top-1/2 transform -translate-y-1/2 w-6'
                                />
                            </div>
                            <div className='bg-white mt-10 p-3 flex justify-center items-center
                           hover:bg-amber-700 hover:text-white rounded-md cursor-pointer '>
                                <button>Sign up</button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Loginpage