import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { FaSearch } from "react-icons/fa";
import axios from 'axios'
import { createMemorySessionStorage, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/Storecontext';
import { toast } from 'react-toastify';
const Navbars = ({ openSidebar, opencart, opensurelogout }) => {

  const { userData } = useContext(StoreContext)
  const [userprofile, setuserprofile] = useState(null)
  const [quantity, setquatinty] = useState({})

  const navigate = useNavigate()
  const API_URL = import.meta.env.VITE_API_URL
  const [explorefood, setexplorefood] = useState([])
  const [count, setcount] = useState(0)
  const [search, setsearch] = useState("")
  const [CartItem, setcartItem] = useState([])
  const navigateTodetails = useNavigate()
  const cover = (id) => { navigateTodetails(`/productDetails/${id}`) }
  // seachhandling

  const handlesearch = (e) => {
    setsearch(e.target.value)
  }

  const filterfood = explorefood.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

  const increaseQty = (id) => {
    if (!isIncart(id)) return
    setquatinty(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1
    }))
  }

  const decreaseQty = (id) => {
    if (!isIncart) return
    setquatinty(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1)
    }))
  }

  useEffect(() => {
    const getcount = async () => {
      try {
        const res = await axios.get(`${API_URL}/countcartitems`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        setcount(res.data.totalItems)
        console.log("carts Number are", res)
      } catch (error) {
        console.log(error)
      }
    }
    getcount()
  }, [])

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

  // uploading image

  const handleonchangeProfile = async (e) => {
    const file = e.target.files[0]
    if (!file) return;

    const formData = new FormData()
    formData.append('images', file)

    try {
      const responce = await axios.post(`${API_URL}/profile/upload`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setuserprofile(responce.data.url)
      console.log('image is', responce.data.url)
      toast.success("image uploaded well")
    } catch (error) {
      toast.error("profile does not uploaded well")
      console.log(error)
    }
  }

  // Fetch cart
  const handlefetchCart = async () => {
    try {
      const res = await axios.get(`${API_URL}/getaddedcart`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setcartItem(res.data.item)
      setcount(res.data.item.length)
    } catch (error) {
      setcartItem([])
      setcount(0)
      console.log("cart not found")
    }
  }

  const isIncart = (id) => {
    return CartItem.some(item => item.foodId === id)
  }

  useEffect(() => {
    handlefetchCart()
  }, [])


  return (
    <div className="font-poppins bg-amber-100 overflow-hidden">
      <div className='relative w-full '>
        <img src={assets.download} alt="" className='w-full object-cover h-96 object-top rounded-b-3xl' />


        <div className='bg-white'>
          <div className='absolute my-5 top-4 flex gap-8 mx-7 '>
            <h1 className='text-white text-xl font-semibold'>WAGUAN <br /> COFFEE</h1>
            <div className='relative mx-5'>

              {/* Search */}
              <input value={search} onChange={handlesearch} type="text" placeholder='Search here.....'
                className='hidden md:block md:outline-none md:bg-transparent md:border md:w-64 
                md:rounded-xl md:text-white md:placeholder-white
                md:px-10 md:py-1 md:font-semibold' />

              <img src={assets.menu} alt="" className='w-8 ml-36 md:hidden block '
                onClick={openSidebar} />

              <FaSearch className='hidden md:block md:absolute md:right-3 
              md:top-1/3 md:-translate-y-2/4 md:text-white' />
            </div>
          </div>
          {/* leftSide */}
          <ul className='hidden md:flex md:justify-center md:gap-6 md:my-5 
          md:absolute md:right-32 md:top-4 md:text-white md:text-[14px] 
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

            {/* login & logout */}
            {userData ? (<li onClick={opensurelogout}
              className='relative bg-white px-8 py-2 text-black rounded-lg cursor-pointer
           hover:bg-amber-800 transition-colors duration-150'
            >Logout</li>) : (
              <li>
                <p className='relative bg-white px-8 py-2 text-black rounded-lg cursor-pointer
           hover:bg-amber-800 transition-colors duration-150'
                  onClick={() => navigate('/login')}>Login</p>
              </li>
            )}

            {/* Cart icon */}
            <li className='relative bg-gray-50 rounded-full w-10 h-10 flex items-center justify-center'>
              <img src={assets.carticon} alt="" className='w-10 cursor-pointer' onClick={opencart} />
              <span className='absolute top-2/3 right-1/2 bg-red-600 text-white text-sm w-5
             h-5 rounded-full flex items-center justify-center'>{count}</span>
            </li>

            {/* profile */}
            <li>
              {userData ? (
                <div className='relative w-10 h-10'>
                  <input type="file" id='profileupload' className='hidden' onChange={handleonchangeProfile} />

                  <label htmlFor='profileupload' className='w-10 h-10 rounded-full bg-black font-bold text-xs
flex items-center justify-center cursor-pointer'>
                    Profile</label>

                  {/* Upload image */}
                  {userprofile && (
                    <img src={userprofile} alt="profile" className='absolute inset-0 w-10 h-10 rounded-full object-cover
cursor-pointer ' onClick={() => document.getElementById('profileupload').click()} />
                  )}
                </div>

              ) : (
                <p>Guest</p>
              )}
            </li>
          </ul>
        </div>


        <div className='absolute top-40 mx-28'>
          <h4 className='text-white '>Welcome!</h4>
          <h2 className='text-white text-xl md:text-2xl font-bold my-3'>We serve the richest coffee <br /> in the city</h2>
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

      <div className='bg-white rounded-lg mt-10'>
        <div className='flex justify-center items-center pt-7 font-bold text-2xl'>
          <p>Our Special Coffee</p>
        </div>
        <div className='flex flex-col mx-3 md:mx-0 md:grid md:grid-cols-4 '>
          {/* Mapped items */}
          {filterfood.length > 0 ? (
            filterfood.map((item) => {
              return (
                <div key={item._id}>
                  <div className=' mx-6 mt-10 bg-black/20 w-72 mb-5 rounded-md '>
                    <img src={`${item.image[0].url}`} alt=""
                      className='w-full h-60 rounded-lg object-cover' />
                    <div className='mx-2 '>
                      <div className='mt-2'>
                        <div className='flex flex-row justify-between mb-3 mt-2 cursor-pointer '>
                          <p className='font-bold text-amber-950'>{item.name}</p>
                          <div>
                            <p onClick={() => cover(item._id)} className='text-base font-semibold'>View</p>
                          </div>
                        </div>
                        <p className=' text-amber-950'>{item.description}</p>
                      </div>
                      <div className='flex justify-between mt-3'>
                        <p className='font-bold'>${item.price}</p>
                        {/* Incraesing and decreasing quality */}
                        <div className='flex gap-2 items-center'>
                          <button
                          onClick={()=>decreaseQty(item._id)}
                          disabled={!isIncart(item._id)}
                          className={!isIncart(item._id)?"opacity-40":""}
                          >
                            <span>{quantity[item._id] ||1}</span>
                          </button>

<button
onClick={()=>increaseQty(item._id)}
disabled={!isIncart(item._id)}
className={!isIncart(item._id)?"opacity-40":""}
>
+
</button>

                        </div>
                        <button onClick={async () => {
                          try {
                            const responceonaddtocart = await axios.post(`${API_URL}/addtocart`, {
                              foodId: item._id,
                              name: item.name,
                              price: item.price,
                              image: item.image[0].url,
                              quantity: quantity[item._id] || 1
                            }, {
                              headers: {
                                Authorization: `bearer ${localStorage.getItem('token')}`
                              }
                            })
                            toast.success('item added well')
                            console.log('item added well', responceonaddtocart)

                          } catch (error) {
                            toast.error('failed to add food')
                            console.log('failded to add food', error)
                          }
                        }}
                          className='bg-orange-900 px-3 py-1 mb-2 rounded-md text-white'>Order now</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <p className=' flex justify-center items-center mb-8 text-red-600 font-bold'
            >No Searched Items!</p>
          )}

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

      <div className='bg-white flex flex-col justify-center items-center pb-8 '>
        <div className='py-5 flex flex-col ' >
          <p className='font-bold text-amber-900 text-3xl'>Come and Join</p>
          <p className='text-black/60'>Our happy Customers</p>
        </div>
        <div className='flex flex-col mx-7 md:mx-0 md:flex-row gap-10 justify-center  mt-8'>

          <div className='bg-black/10  px-7 py-7 rounded-md'>
            <div className='  flex  flex-row  gap-10 items-center'>
              <img src={assets.prof3} alt="" className='rounded-full w-10 h-10 object-cover' />
              <div className='flex flex-col'>
                <p className='font-bold'>James Smith</p>
                <p>Enteprenuer</p>
              </div>
              <img src={assets.rating} alt="" className='w-20' />
            </div>
            <p className='mt-7'>Perfect  now I understand what you want <br />
              — you want the profile image on the left, <br />
              and on the right, <br /> the name and stars on <br /> one line, with the job <br />
              title below.</p>
          </div>


          <div className='bg-black/10 px-7 py-7 rounded-md'>
            <div className='  flex  flex-row  gap-10 items-center'>
              <img src={assets.prof3} alt="" className='rounded-full w-10 h-10 object-cover' />
              <div className='flex flex-col'>
                <p className='font-bold'>James Smith</p>
                <p>Enteprenuer</p>
              </div>
              <img src={assets.rating} alt="" className='w-20' />
            </div>
            <p className='mt-7'>Perfect  now I understand what you want <br />
              — you want the profile image on the left, <br />
              and on the right, <br /> the name and stars on <br /> one line, with the job <br />
              title below.</p>
          </div>

          <div className='bg-black/10 px-7 py-7 rounded-md'>
            <div className='  flex  flex-row  gap-10 items-center'>
              <img src={assets.prof3} alt="" className='rounded-full w-10 h-10 object-cover' />
              <div className='flex flex-col'>
                <p className='font-bold'>James Smith</p>
                <p>Enteprenuer</p>
              </div>
              <img src={assets.rating} alt="" className='w-20' />
            </div>
            <p className='mt-7'>Perfect 👍 now I understand what you want <br />
              you want the profile image on the left, <br />
              and on the right, <br /> the name and stars on <br /> one line, with the job <br />
              title below.</p>
          </div>
        </div>

      </div>

      <div className='flex flex-col md:flex-row gap-20 md:gap-0 md:justify-between items-center mt-10'>
        <div>
          <img src={assets.nukuri1} alt="" className='md:w-80 w-60' />
        </div>
        <div className='flex flex-col'>
          <p className='font-bold text-2xl md:text-3xl text-amber-900'>Join in and get 15% off</p>
          <p>Subscribe and get 15% Discount code</p>
        </div>

        <div>
          <img src={assets.ukuri2} alt="" className='md:w-80 w-60' />
        </div>

      </div>

      <div className="grid grid-cols-2  md:grid-cols-6 gap-10 md:gap-4 mt-10 bg-amber-900 py-10 px-8 text-white items-start">

        <div className='font-bold text-xl md:block hidden '>
          <p>COFFEE</p>
        </div>

        <div>
          <p className="font-bold mb-4 text-xl">Privacy</p>
          <p>Terms of use</p>
          <p>Privacy policy</p>
          <p>Cookies</p>
        </div>

        <div>
          <p className="font-bold mb-4 text-xl">Service</p>
          <p>Shop</p>
          <p>Order ahead</p>
          <p>Menu</p>
        </div>

        <div>
          <p className="font-bold mb-4 text-xl">About us</p>
          <p>Find location</p>
          <p>About us</p>
          <p>Our story</p>
        </div>

        <div>
          <p className="font-bold mb-4 text-xl">Information</p>
          <p>Plan & Pricing</p>
          <p>Sell your product</p>
          <p>Jobs</p>
        </div>

        <div>
          <p className="font-bold mb-4 text-xl">Social Media</p>
          <div className="flex flex-row gap-6 mt-6">
            <img src={assets.instagram} alt="Instagram" className="w-5" />
            <img src={assets.facebook} alt="Facebook" className="w-5" />
            <img src={assets.twitter} alt="Twitter" className="w-5" />
          </div>
        </div>
      </div>

    </div>
  );
};
export default Navbars;