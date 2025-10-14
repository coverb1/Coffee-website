import React from 'react'
import Navbars from './Navbars/Navbars'
import { Routes, Route } from 'react-router-dom'
import Loginpage from './Loginpage/Loginpage'
const App = () => {
  return (
    <>
      <div>
        <Routes>
<Route path='/'element={<Navbars/>}/>
<Route path='/login' element={<Loginpage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App