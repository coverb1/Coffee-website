import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../Loginpage/Loginpage'
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
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

      </div>

      {foods.map((food, index) => (
        <>
          {/* <p key={index}>{food.name}</p> */}

        </>
      ))}
    </div>
  )
}

export default List