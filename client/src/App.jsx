import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Layout from './components/Layout';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />
        <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
