import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Product from '../pages/product'
function MainRouter() {
  return (
    <div>
        <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/signup' element={<Signup/>}></Route>
              <Route path='/product' element={<Product/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRouter