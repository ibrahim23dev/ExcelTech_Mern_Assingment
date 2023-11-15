import React from 'react'
import Header from '../components/Header'
import Banner from '../components/banner'
import CAtegorys from '../components/Categorys'
function Home() {
  return (
      <div className='w-full'>
      <Header />
      <Banner />
      <div className='my-4'>
<CAtegorys/>
      </div>
      
     
    </div>
  )
}

export default Home
