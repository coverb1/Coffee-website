import React, { useState } from 'react'
import Navbars from './Navbars/Navbars'
import { Routes, Route } from 'react-router-dom'
import Loginpage from './Loginpage/Loginpage'
import Sidebar from './Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import Cartcomponents from './Components/Cartcomponents'
import Surelogout from './Components/Surelogout'
import ProductDetails from './productDetails/ProductDetails'
import Navbaradmin from './Components/Navbaradmin'
import Adminsidebar from './Components/Adminsidebar'
import AdminLayout from './Components/AdminLayout'
import Add from './Admin/Add'
import List from './Admin/List'
import Order from './Admin/Order'
import PlaceOrder from './PlaceOrder/PlaceOrder'

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
          <Route path='/slidebar' element={<Sidebar/>} />
           <Route path='/Place-order' element={<PlaceOrder/>} />
          {/* <Route path='/Navbaradmin' element={<Navbaradmin/>}/> */}
          {/* <Route path='/slidebar' element={<Adminsidebar/>} />  */}
          <Route path='/admin' element={<AdminLayout/>}>
         <Route path='add'  element={<Add/>} />
       <Route path='list' element={<List/>}/>
       <Route path='Order' element={<Order/>} />
         </Route>
        </Routes>
    
      </div>
    </>
  )
}

export default App