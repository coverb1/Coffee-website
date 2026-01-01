import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../Loginpage/Loginpage'
import { assets } from '../assets/assets'
const List = () => {

  const [foods, setfoods] = useState([])

  const handlegetList = async () => {
    try {
      const res = await axios.get(`${API_URL}/getfood`)
      setfoods(res.data || [])
      console.log("fopd gotten well", res)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    handlegetList()
  }, [])
  return (
    <div>
      <div>
        <p>All Products</p>
      </div>

      <div className='flex flex-col gap-2'>

        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Price</b>
          <b>Action</b>
        </div>

      </div>

      {foods.map((food, index) => (
        <>
        <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm'>
        <img src={food.image[0].url} alt="" className='w-11 h-11' />
          <p>{food.name}</p>
          <p>$:{food.price}</p>
          <img src={assets.deleteIcon} alt="" className='w-6 h-6' />
          </div>
        </>
      ))}
    </div>
  )
}

export default List