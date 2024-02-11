import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Home = () => {
    const { role } = useSelector(state => state.auth)
    if (role === 'user') return <Navigate to='/user/dashboard' replace />
    
    else return <Navigate to='/login' replace />
}

export default Home
