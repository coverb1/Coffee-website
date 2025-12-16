import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../Loginpage/Loginpage'
import axios from 'axios'
const ProductDetails = () => {

  const[product,setproduct]=useState(null)
  const { id } = useParams()

useEffect(()=>{
  const getproduct=async()=>{
    try {
      const res=await axios.get(`${API_URL}/getOneFood/${id}`,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      })
      setproduct(res.data.product)
    } catch (error) {
     console.log(error) 
    }
  }
  getproduct()
},[id])
if (!product) {
  return <p>Loading...</p>
}
  return (
    <div>
   <p>{product.name}</p>
   <img src={product.image[1].url} alt="" />
    </div>
  )
}

export default ProductDetails