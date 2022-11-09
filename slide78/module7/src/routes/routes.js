import React, { } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Search from '../components/Search'
import Dashboard from '../components/Dashboard'


export const AppRouter = (props) => {
  return (
    <Routes>
      <Route exact path="/" element={<Home {...props} />} />
      <Route path="/home" element={<Home {...props} />} />
      <Route path="/search" element={<Search {...props} />} />
      <Route path="/dashboard" element={<Dashboard {...props} />} />

    </Routes>

  )}

