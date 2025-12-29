import React from 'react'
import { assets } from '../assets/assets'

const Add = () => {
  return (
    <form className='flex flex-col mt-10 ml-10 gap-5' >
      <div>
        <p>Upload Image</p>

        <div className=' flex gap-5'>
          <label htmlFor="image1">
            <img src={assets.uploading} alt="" className='w-10' />
            <input type="file" id='image1' className='hidden' />
          </label>

          <label htmlFor="image2">
            <img src={assets.uploading} alt="" className='w-10' />
            <input type="file" id='image2' className='hidden' />
          </label>

          <label htmlFor="image3">
            <img src={assets.uploading} alt="" className='w-10' />
            <input type="file" id='image3' className='hidden' />
          </label>

          <label htmlFor="image4">
            <img src={assets.uploading} alt="" className='w-10' />
            <input type="file" id='image4' className='hidden' />
          </label>

          <label htmlFor="image5">
            <img src={assets.uploading} alt="" className='w-10' />
            <input type="file" id='image5' className='hidden' />
          </label>
        </div>
      </div>

      <div className='flex gap-2 flex-col w-full'>
        <p>Product name</p>
        <input type="text" placeholder='Type here' className='border border-black outline-none
        text-base px-2 bg-white max-w-[300px]' />
      </div>


       <div className='flex gap-2 flex-col w-full'>
        <p>Product Description</p>
       <textarea name="" id="" placeholder='Write content here' className='border border-black outline-none
        text-base px-2 bg-white max-w-[300px]'>
        </textarea>
      </div>
    </form>
  )
}

export default Add