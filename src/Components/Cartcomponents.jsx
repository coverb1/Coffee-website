import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { API_URL } from '../Loginpage/Loginpage'
import { toast } from 'react-toastify'
import { StoreContext } from '../context/Storecontext'
import { loadStripe } from '@stripe/stripe-js';
const Cartcomponents = ({ cartisopen, closecart }) => {

  if (!cartisopen) return null

  const [cartItem, setcartItem] = useState([])

  // const {cartItemlocally}=useContext(StoreContext)
  const STRIPE_PUBLISHABLE = import.meta.env.STRIPE_PUBLISHABLE_KEY
  // const makePyament = async () => {
  //   const stripe = await loadStripe(`${STRIPE_PUBLISHABLE}`)
  // }

  useEffect(() => {
    const getcartItem = async () => {
      try {
        const responce = await axios.get(`${API_URL}/getaddedcart`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        setcartItem(responce.data.item)
        console.log('item gotten well')
      } catch (error) {
        console.log("failed to get cartitem", error)
      }
    }

    if (cartisopen) {
      getcartItem()
    }
  }, [cartisopen])


  let totalprice = 0
  for (let i = 0; i < cartItem.length; i++)
    totalprice += cartItem[i].price
  return (

    <div className={`fixed right-0 top-0 w-96 h-full bg-white shadow-2xl border-l border-gray-200 z-50 
      transition-transform duration-300 ${cartisopen ? "translate-x-0" : "translate-x-full"}`}>


      <div className='flex justify-end p-4'>
        <img
          src={assets.cancel}
          alt="close"
          className='w-8 cursor-pointer hover:scale-110 transition'
          onClick={closecart}
        />
      </div>


      <h2 className="text-center text-xl font-bold mb-4 text-gray-700">
        Your Cart
      </h2>


      <div className="grid grid-cols-4 text-sm font-semibold text-gray-600 px-4 pb-2 border-b">
        <p>Image</p>
        <p>Name</p>
        <p>Price</p>
        <p>Remove</p>
      </div>


      <div className="mt-4 px-4 overflow-y-auto h-[75%] space-y-3 relative">

        {cartItem.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No items in cart</p>
        )}

        {cartItem.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center bg-amber-100 shadow p-2 rounded-lg"
          >
            <img
              src={`${item.image}`}
              alt=""
              className='w-12 h-12 object-cover rounded'
            />

            <p className="text-sm font-medium text-gray-700">{item.name}</p>

            <p className="text-sm font-semibold text-green-600">
              ${item.price}
            </p>

            <button className="text-red-500 font-bold hover:text-red-700"

              onClick={async () => {
                try {
                  const responce = await axios.delete(`${API_URL}/deleteItem/${item._id}`, {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem('token')}`
                    }

                  })
                  setcartItem(prev => prev.filter(i => i._id !== item._id))
                  toast.success("item removed well")
                  console.log(responce)
                } catch (error) {
                  toast.error("item not removed")
                  console.log(error)
                }
              }}>
              X
            </button>
          </div>
        ))}
        <div className=''>
          <p className='font-bold text-2xl text-black/80'>Total:{totalprice.toFixed(2)}</p>
        </div>
      </div>
      <div className='absolute  bottom-32 right-10 flex items-center justify- '>
        <p className='bg-green-800 px-4 py-2 rounded-md text-white cursor-pointer'>Place Order</p>
      </div>
    </div>
  )
}

export default Cartcomponents
