import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API_URL } from '../Loginpage/Loginpage'
import axios from 'axios'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'
const ProductDetails = ({ openSidebar, opencart }) => {

  const [product, setproduct] = useState(null)
  const { id } = useParams()
  const [count, setcount] = useState(0)
  const [mainImage, setmainImage] = useState(null)

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
        setmainImage(res.data.product.image[0]?.url)
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
      <div className='flex flex-row gap-20 justify-center '>
        {/* right side */}
        <div className='flex flex-col gap-8'>

          <div>
            <img src={mainImage} className='w-80 h-80 rounded-sm' alt="" />
          </div>

          <div className='flex flex-row gap-5'>
            {product.image.map((img, index) => (
              <img
                key={index}
                src={img.url}
                className={`w-20 rounded-sm h-20 cursor-pointer border transition-all duration-200 ${mainImage === img.url ? 'border-black scale-100' : 'border-gray-600 hover:scale-105'
                  }`}
                onClick={() => setmainImage(img.url)}
              />
            ))}
          </div>
          <p className='text-lg'>Description:{product.description}</p>
        </div>

        {/* Left side */}
        <div>
          <div>
            <p className='text-3xl'>{product.name}</p>
            <p>$:{product.price}</p>
          </div>
          <div className='mt-10'>
            <p
              onClick={async() => {
                try {
                  const responceonaddtocart = await axios.post(`${API_URL}/addtocart`, {
                    foodId: product._id,
                    name: product.name,
                    price: product.price,
                    image: product.image[0].url,
                    quantity:1
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
              className='bg-amber-900 px-5 py-2 rounded-sm text-center text-white cursor-pointer'>
              Add to cart</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails