import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Container/Home'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    </div>
  )
}

export default Routers