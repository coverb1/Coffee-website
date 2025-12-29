import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
import { API_URL } from '../Loginpage/Loginpage'

const Add = () => {

const [image1,setImage1]=useState(false)
const [image2,setImage2]=useState(false)
const [image3,setImage3]=useState(false)
const [image4,setImage4]=useState(false)
const [image5,setImage5]=useState(false)

const[name,setName]=useState("")
const[description,setDescription]=useState("")
const[price,setPrice]=useState('')

const handleSubmit=async(e)=>{
  e.preventDefault()
  try {
    const Formdata=new FormData()

Formdata.append("name",name)
Formdata.append('description',description)
Formdata.append('price',price)

Formdata.append("images",image1)
Formdata.append("images",image2)
Formdata.append("images",image3)
Formdata.append("images",image4)
Formdata.append("image",image5)

const responce=await axios.post(`${API_URL}/food`,Formdata)
toast.success("Product submitted well")
console.log(responce.data.message)

  } catch (error) {
    toast.error("failed to submit")
    console.log(error)
  }
}

  return (
    <form className='flex flex-col mt-10 ml-10 gap-5' onSubmit={handleSubmit} >
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
        <input value={name} type="text"  onChange={(e)=>setName(e.target.value)}
        placeholder='Type here' className='border border-black outline-none
        text-base px-2 bg-white max-w-[300px]' />
      </div>


       <div className='flex gap-2 flex-col w-full'>
        <p>Product Description</p>
       <textarea value={description} onChange={(e)=>setDescription(e.target.value)}
       name="" id="" placeholder='Write content here' className='border border-black outline-none
        text-base px-2 bg-white max-w-[300px]'>
        </textarea>

         <div className='flex gap-2 flex-col w-full'>
        <p>Product Price</p>
        <input value={price} onChange={(e)=>setPrice(e.target.value)}
         type="Number" placeholder='24' className='border border-black outline-none
        text-base px-2 bg-white max-w-[300px]' />
      </div>
      </div>

        <button type='submit' onClick={handleSubmit}
         className='bg-amber-950 text-white py-2 px-4 rounded-lg 
          max-w-[300px]'>Submit
         </button>

    </form>
  )
}

export default Add