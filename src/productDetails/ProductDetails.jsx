import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API_URL } from '../Loginpage/Loginpage'
import axios from 'axios'
import { assets } from '../assets/assets'
const ProductDetails = ({ openSidebar, opencart }) => {

  const [product, setproduct] = useState(null)
  const { id } = useParams()
  const [count, setcount] = useState(0)

  const navigatee = useNavigate()

  useEffect(() => {
    const getproduct = async () => {
      try {
        const res = await axios.get(`${API_URL}/getOneFood/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        setproduct(res.data.product)
      } catch (error) {
        console.log(error)
      }
    }
    getproduct()
  }, [id])

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

  if (!product) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <div className=' flex flex-row items-center justify-between mx-10 my-10 '>

        {/* Turning back */}
        <div>
          <img src={assets.turningback} alt="" className='w-8 cursor-pointer' onClick={() => navigatee('/')} />
        </div>
        {/* cart item */}
        <div className=' '>
          <div className='relative cursor-pointer'>
            <img src={assets.carticon} alt="" className='w-10' onClick={opencart} />
            <span className='absolute top-2/3 right-1/2 bg-red-600 text-white text-sm w-5
                   h-5 rounded-full flex items-center justify-center'>{count}</span>
          </div>
          <img src={assets.menu} alt="" className='w-8 ml-36 md:hidden block '
            onClick={openSidebar} />
        </div>

      </div>

<div  className='flex flex-row justify-between mx-20 '>
  {/* right side */}
      <div className='flex flex-col gap-8'>
        <img src={product.image[0].url} className='w-72 rounded-sm' alt="" />
        <div className='flex flex-row gap-10 rounded-sm'>
          <div>
            <img src={product.image[1].url} alt="" className='w-20 rounded-sm' />
          </div>
          <div>
            <img src={product.image[1].url} alt="" className='w-20 rounded-sm' />
          </div>

          <div>
            <img src={product.image[1].url} alt="" className='w-20 rounded-sm' />
          </div>

          <div>
            <img src={product.image[1].url} alt="" className='w-20 rounded-sm' />
          </div>
        </div>
      </div>

{/* Left side */}
<div>
  <div>
  <p className='text-3xl'>{product.name}</p>
  <p>$:{product.price}</p>
  </div>
  <div className='mt-10'>
    <p className='bg-amber-900 px-5 py-2 rounded-sm text-white cursor-pointer'>Add to cart</p>
  </div>
</div>
</div>
    </div>
  )
}

export default ProductDetails