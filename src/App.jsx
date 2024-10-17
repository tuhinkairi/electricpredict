import React from 'react'
import NavBar from './components/layout/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Footer from './components/layout/Footer'
import Login from './components/pages/register/Login'
import Register from './components/pages/register/Register'
export default function App() {
  return (
    <div className=''>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}
