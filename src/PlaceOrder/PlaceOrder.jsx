import React, { useState } from 'react'
import CartTotal from '../Components/CartTotal'
import { useEffect } from 'react'
const PlaceOrder = () => {

  const [method, setMethod] = useState('cod')

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
getcartItem()
  },[])


  let totalprice = 0
  for (let i = 0; i < cartItem.length; i++)
    totalprice += cartItem[i].price


  return (
    <div className='flex flex-col justify-between gap-4 pt-5 min-h-[80vh]'>

      {/* leftSide */}
      <div className='flex flex-col gap-4 w-1/2 '>

        <div className='text-xl my-3'>
          <p>DELIVERY IMFORMATION</p>
        </div>
        <div className='flex gap-3'>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            placeholder='Firstname' />
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            placeholder='Lastname' />
        </div>
        <input type="email" className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          placeholder='Email address' />
        <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          placeholder='Street' />
        <div className='flex gap-3'>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            placeholder='City' />
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            placeholder='Phone' />
        </div>
      </div>

{/* Right side */}
<div className='mt-8'>
<div className='mt-8 min-w-80'>
     <div className=''>
          <p className='font-bold text-2xl text-black/80'>Total:{totalprice.toFixed(2)}</p>
        </div>
</div>
</div>
    </div>
  )
}

export default PlaceOrder
