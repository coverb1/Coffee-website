import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../Loginpage/Loginpage'
const List = () => {

const [foods,setfoods]=useState([])

const handlegetList=async()=>{
  try {
    const res=await axios.get(`${API_URL}/getfood`)
    setfoods(res.data.products || [])
    console.log("fopd gotten well",res)
  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
  handlegetList()
},[])
  return (
    <div>
{foods.map((food,index)=>(
  <p key={index}>{food.name}</p>
))}
    </div>
  )
}

export default List