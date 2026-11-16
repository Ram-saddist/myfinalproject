import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

      </Routes>
    </div>
  )
}
