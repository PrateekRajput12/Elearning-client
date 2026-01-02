import React from 'react'
// import BrowserRou
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/header/Header'
import Home from './Pages/home/Home'
import Login from './Pages/auth/Login.jsx'
import Register from './Pages/auth/Register'
import Verify from './Pages/auth/verify'
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/verify' element={<Verify />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App