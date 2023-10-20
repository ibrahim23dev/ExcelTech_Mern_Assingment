import React from 'react'
import { FaList } from 'react-icons/fa'

const Header=({showSidebar,setShowsidebar})=> {
  return (
    <div className='fixed top-o left-0 w-full py-5 px-2 lg:px-7 z-40'>
      <div className='ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-start bg-[#283046] text-[#d0d2d6] px-5 transition-all'>
      <div onClick={()=>setShowsidebar(!showSidebar)} className='w-[35px] flex lg:hidden'>
        <span><FaList/></span>
      </div>
      </div>
    </div>
  )
}

export default Header
