import React from 'react'

const PlaceOrder = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-center'>
      {/* Head */}
      <div>
       <p>Delivery Information</p> 
       </div>
{/* Form */}
<div>
{/* firstname $$ lastname */}
<div className='flex flex-row gap-5'>
<input type="text" placeholder='Firstname' className='border border-black outline-none' />
<input type="text" placeholder='Lastname' className='border border-black outline-none' />
</div>
<div className='flex flex-col max-w-60'>
<input type="text" placeholder='Email' className='border border-black outline-none' />
<input type="text" placeholder='Street' className='border border-black outline-none' />
</div>

<div className='flex flex-col '>
  <input type="text" placeholder='City' className='border border-black outline-none' />
  <input type="text" placeholder='Phonenumber' className='border border-black outline-none' />
</div>
</div>
    </div>
  )
}

export default PlaceOrder