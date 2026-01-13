import React, { useEffect, useState } from 'react'

const CartTotal = () => {

const [cartItemPrice,setCartItemPrice]=useState([])


    let totalprice = 0
    for (let i = 0; i < cartItem.length; i++)
        totalprice += cartItem[i].price

    useEffect(()=>{
        const getPrices=async()=>{
            try {
               
            } catch (error) {
                
            }
        }
    })

    return (
        <div>
            <div>
                <p>Cart Total</p>
            </div>

            <div>
               {cartItemPrice.map((item,index)=>(
                <p>{item.price}</p>
               ))} 
            </div>
        </div>
    )
}

export default CartTotal