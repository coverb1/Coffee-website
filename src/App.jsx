import React, { useState } from 'react'
import Navbars from './Navbars/Navbars'
import { Routes, Route } from 'react-router-dom'
import Loginpage from './Loginpage/Loginpage'
import Sidebar from './Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import Cartcomponents from './Components/Cartcomponents'
import Surelogout from './Components/Surelogout'
import ProductDetails from './productDetails/ProductDetails'

const App = () => {
  const [isopen, setisopen] = useState(false)
  const [cartisopen, setcartisopen] = useState(false)
  const [surelogout, setsurelogout] = useState(false)
  return (
    <>
      <ToastContainer/>
      <div>
        <Sidebar isopen={isopen} closeSidebar={() => setisopen(false)} />
        <Surelogout surelogout={surelogout} functsurelogout={() => setsurelogout(false)} />
        <Cartcomponents cartisopen={cartisopen} closecart={() => setcartisopen(false)} />
        <Routes>
          <Route path='/' element={<Navbars openSidebar={() => setisopen(true)} opencart={() => setcartisopen(true)}
            opensurelogout={() => setsurelogout(true)} />} />
          <Route path='/login' element={<Loginpage />} />
         <Route path='/productDetails/:id' element={<ProductDetails openSidebar={()=> setisopen(true)} opencart={()=>setcartisopen(true)} />} />
        </Routes>
      </div>
    </>
  )
}

export default App