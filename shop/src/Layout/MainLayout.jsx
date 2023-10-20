import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';

function MainLayout() {
  const [showSidebar, setShowsidebar] = useState(false);
  return (
    <div className='bg-[#161d31] w-full min-h-screen'>
      <Header showSidebar={showSidebar} setShowsidebar={setShowsidebar} />
      <SideBar showSidebar={showSidebar} setShowsidebar={setShowsidebar} />
      <div className='ml-0 lg:ml-[260px] pt-[95px] transition-all'>
        <Outlet/>
    </div>
    </div>
    
  )
}

export default MainLayout
