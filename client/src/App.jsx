import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Shops from './pages/Shops';
//import Card from './pages/Card';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shops' element={<Shops />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
