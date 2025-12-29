import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Add = () => {

const [image1,setImage1]=useState(false)
const [image2,setImage2]=useState(false)
const [image3,setImage3]=useState(false)
const [image4,setImage4]=useState(false)
const [image5,setImage5]=useState(false)

const[name,setName]=useState("")
const[description,setDescription]=useState("")
const[price,setPrice]=useState('')

  return (
    <form className='flex flex-col mt-10 ml-10 gap-5' >
      <div>
        <p>Upload Images</p>

        <div className=' flex gap-5 '>
          <label htmlFor="image1">
            <img src={image1?URL.createObjectURL(image1):assets.uploading} alt="" className='w-10 cursor-pointer'  />
            <input type="file" onChange={(e)=>setImage1(e.target.files[0])} id='image1' className='hidden' />
          </label>

          <label htmlFor="image2">
            <img src={image2?URL.createObjectURL(image2):assets.uploading} alt="" className='w-10 cursor-pointer'  />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id='image2' className='hidden' />
          </label>

          <label htmlFor="image3">
            <img src={image3?URL.createObjectURL(image3):assets.uploading} alt="" className='w-10 cursor-pointer' />
            <input type="file" id='image3'  onChange={(e)=>setImage3(e.target.files[0])} className='hidden' />
          </label>

          <label htmlFor="image4">
            <img src={image4?URL.createObjectURL(image4):assets.uploading} alt="" className='w-10 cursor-pointer' />
            <input type="file" onChange={(e)=>setImage4(e.target.files[0])} id='image4' className='hidden' />
          </label>

          <label htmlFor="image5">
            <img src={image5?URL.createObjectURL(image5):assets.uploading} alt="" className='w-10 cursor-pointer' />
            <input type="file" onChange={(e)=>setImage5(e.target.files[0])} id='image5' className='hidden' />
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

         <div className='flex gap-2 flex-col w-full'>
        <p>Product Price</p>
        <input type="Number" placeholder='24' className='border border-black outline-none
        text-base px-2 bg-white max-w-[300px]' />
      </div>
      </div>
    </form>
  )
}

export default Add