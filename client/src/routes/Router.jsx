import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Thankyou from '../pages/Thankyou'

const Router = () => {
  return (
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<Home />} />
    <Route path="/thank-you" element={<Thankyou />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
</Routes>
  )
}

export default Router