import { createContext, useEffect, useState } from "react"
export const StoreContext = createContext(null)
import axios from "axios"
import { API_URL } from "../Loginpage/Loginpage"

const StoreContextProvider = (props) => {


    const [userData, setuserData] = useState(null)
    const [cartItemlocally, setcartItemlocally] = useState([])

    const [cartcount, setcartcount] = useState(0)


    const counttocart = () => {
        setcartcount(prev => prev + 1)
    }

    const removedcart = () => {
        setcartcount(prev => (prev > 0 ? prev - 1 : 0))
    }

    const addtocartlocal = (foodItem) => {
        setcartItemlocally(prev => [...prev, foodItem])
    }

    const getUserdata = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/getuser`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setuserData(data.userData)
            console.log('login suceess', data.userData)
        } catch (error) {
            console.log('log failed', error)
        }
    }
    useEffect(() => {
        getUserdata();
    }, [])

    const contextvalue = {
        getUserdata,
        userData,
        addtocartlocal,
        cartItemlocally,
        cartcount,
        counttocart,
        removedcart
    }
    return (
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider