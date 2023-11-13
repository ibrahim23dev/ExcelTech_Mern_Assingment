import React, { useState } from 'react';
import { GrMail } from 'react-icons/gr';
import { AiFillHeart, AiFillShopping, AiOutlineTwitter } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { Fa500Px, FaFacebook, FaList, FaLock, FaUser } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const user = true;
  const { pathname } = useLocation()
  const [categoryShow, setCategoryShow] = useState(true);
  const wishList = 4;
  console.log(pathname);
  const [showSidebar, setShowSidebaer] = useState(true);
  return (
      <div className='w-full bg-white'>
      <div className='header-top bg-[#eeeeee] md-lg:hidden'>
        <div className='w-[85%]  lg:w-[90%] mx-auto'>
          <div className='flex w-full justify-between items-center h-[50px] text-slate-500'>
            <ul className='flex justify-start items-center gap-8'>
              <li className='flex justify-center items-center gap-2 text-sm after:absolute relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px]'>
                <span><GrMail/></span>
                <span>ibrahim@gemail.com</span>
              </li>
              <span>E-commerce Multi Vendor</span>
            </ul>
              <div className='flex justify-center items-center gap-10'>
               <div className='flex justify-center items-center gap-4'>
                  <a href='#'><FaFacebook/></a>
                  <a href='#'><AiOutlineTwitter/></a>
                  <a href='#'><FaLinkedin/></a>
                  <a href='#'><AiFillGithub/></a>
             </div>
              <div className='flex cursor-pointer text-slate-800 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute before:absolute before:h-[18px] before:bg-[#afafaf] before:w-[1px] before:-left-0 '>
                <img className='w-[35px] h-[25px]' src='http://localhost:3000/language.png' alt='' />
                <span><MdOutlineKeyboardArrowDown /></span>
                <ul className='absolute invisible  transition-all rounded-sm duration-200 text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10'>
                  <li>Bengla</li>
                  <li>English</li>
                </ul>
              </div>
              {
                user ? <Link className='flex justify-center cursor-pointer items-center gap-2 text-sm' to='/dashbord'>
                  <span><FaUser /></span>
                  <span>Md Ibrahim</span>
                </Link> : <div className='flex justify-center cursor-pointer items-center gap-2 text-sm'>
                    <span><FaLock /></span>
                    <span>Login</span>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      <div className='w-white'>
        <div className='w-[85%]  lg:w-[90%] mx-auto'>
          <div className='h-[80px] md-lg:h-[100px] flex justify-between items-center flex-wrap'>
            <div className='md-lg:w-full w-3/12 md-lg:pt-4'>
              <div className='flex justify-between items-center'>
                <Link to='/'>
                  <img className='w-[75%] h-[80%]' src='http://localhost:3000/logo1.png' alt='logo'/>
                </Link>
                <div className=' justify-center items-center w-[30px] h-[30px] rounded-sm bg-white text-slate-600 lg:hidden md-lg:flex xl:hidden hidden border border-slate-600 cursor-pointer ' onClick={()=>setShowSidebaer(false)}>
                  <span><FaList/></span>
                </div>
              </div>
            </div>
            <div className='md-lg:w-full w-9/12'>
              <div className='flex justify-between md-lg:justify-center items-center flex-wrap pl-8'>
                <ul className='flex justify-start items-start gap-8 text-sm font-bold uppercase md-lg:hidden'>
                  <li className={`p-2 block ${pathname === '/' ? 'text-[#7FAD39]' : 'text-slate-600'}`}>Home</li>
                  <li className={`p-2 block ${pathname === '/shop' ? 'text-[#7FAD39]' : 'text-slate-600'}`}>Shop</li>
                  <li className={`p-2 block ${pathname === '/blog' ? 'text-[#7FAD39]' : 'text-slate-600'}`}>Blog</li>
                  <li className={`p-2 block ${pathname === '/about' ? 'text-[#7FAD39]' : 'text-slate-600'}`}>About</li>
                  <li className={`p-2 block ${pathname === '/contact' ? 'text-[#7FAD39]':'text-slate-600'}`}>Contact</li>
                </ul>
                <div className='flex md-lg:hidden justify-center items-center gap-5'>
                  <div className='flex justify-center gap-5'>
                    <div className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]'>
                      <span className='text-xl text-red-500'><AiFillHeart /></span>
                      <div className='w-[20px] h-[20px] absolute bg-green-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]'>
                        {wishList}
                      </div>
                    </div>
                    <div className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]'>
                      <span className='text-xl text-orange-500'><AiFillShopping/></span>
                    <div className='w-[20px] h-[20px] absolute bg-green-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]'>
                        {wishList}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
                </div>
          </div>
        </div>

      </div>
      <div className='hidden md-lg:block'>
        <div onClick={() => setShowSidebaer(true)} className={`fixed duration-200 transition-all ${showSidebar ? 'invisible' : 'visible'} hidden md-lg:block w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 left-0 z-20`}>
        </div>
      </div>
      <div className={`w-[300px] transition-all duration-200 fixed z-[9999]  ${showSidebar ? '-left-[300px]' : 'left-0 top-0'} overflow-y-auto bg-white h-screen py-6 px-8`}>
            <div className='flex justify-start flex-col gap-6'>
              <Link to='/'>
                  <img className='w-[75%] h-[80%]' src='http://localhost:3000/logo1.png' alt='logo'/>
              </Link>
              <div className='flex justify-start items-center gap-10'>
                <div className='flex cursor-pointer text-slate-800 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute'>
                <img className='w-[35px] h-[25px]' src='http://localhost:3000/language.png' alt='' />
                <span><MdOutlineKeyboardArrowDown /></span>
                <ul className='absolute invisible  transition-all rounded-sm duration-200 text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10'>
                  <li>Bengla</li>
                  <li>English</li>
                  </ul>
                  {
                user ? <Link className='flex justify-center cursor-pointer items-center gap-2 text-sm' to='/dashbord'>
                  <span><FaUser /></span>
                  <span>Md Ibrahim</span>
                </Link> : <div className='flex justify-center cursor-pointer items-center gap-2 text-sm'>
                    <span><FaLock /></span>
                    <span>Login</span>
                </div>
              }
                 
                </div>
                
                
              </div>
              <ul className='flex flex-col justify-start items-start gap-3 text-sm font-semibold uppercase'>
                  <li className={`py-2 block ${pathname === '/' ? 'text-[#7FAD39]' : 'text-slate-600'}`}>Home</li>
                  <li className={`py-2 block ${pathname === '/shop' ? 'text-[#7FAD39]' : 'text-slate-600'}`}>Shop</li>
                  <li className={`py-2 block ${pathname === '/blog' ? 'text-[#7FAD39]' : 'text-slate-600'}`}>Blog</li>
                  <li className={`py-2 block ${pathname === '/about' ? 'text-[#7FAD39]' : 'text-slate-600'}`}>About</li>
                  <li className={`py-2 block ${pathname === '/contact' ? 'text-[#7FAD39]':'text-slate-600'}`}>Contact</li>
          </ul>
          <div className='flex justify-start items-center gap-4'>
                  <a href='#'><FaFacebook/></a>
                  <a href='#'><AiOutlineTwitter/></a>
                  <a href='#'><FaLinkedin/></a>
                  <a href='#'><AiFillGithub/></a>
          </div>
          <div className='w-full flex justify-end md-lg:justify-start gap-3 items-center'>
            <div className='w-[48px] h-[48px] rounded-full flex bg-[#f5f5f5] justify-center items-center'>
              <span><IoIosCall/></span>
            </div>
            <div className='flex justify-end flex-col gap-1'>
              <h2 className='text-sm font-medium text-slate-700'>+088 01315974775</h2>
              <span className='text-xs'>Support 24 hr</span>
            </div>
            <ul className='flex flex-col justify-start items-start gap-3'>
              <li className='flex justify-start items-center gap-2  text-sm text-[#1c1c1c]'>
                <span><GrMail /></span>
                <span>ibrahim.soft.dev23@gmail.com</span>
              </li>
              <span className='text-sm'>Can Get Easy Shopping</span>
            </ul>
          </div>

            </div>
          </div>
      
      <div className='w-[85%]  lg:w-[90%] mx-auto'>
        <div className='flex w-full flex-wrap md-lg:gap-8'>
          <div className='w-3/12 md-lg:w-full'>
            <div className='bg-white relative'>
              <div onClick={()=>setCategoryShow(!categoryShow)} className='h-[50px] bg-violet-400 text-white flex justify-center md-lg:justify-between md-lg:px-6 items-center gap-3 font-bold text-md cursor-pointer'>
                <div className='flex justify-center items-center gap-3'>
                  <span><FaList /></span>
                  <span>All Category</span>
                </div>
                <span className='pt-1 '>
                  <MdOutlineKeyboardArrowDown/>
                </span>
              </div>
              <div className={`${categoryShow ? 'h-0' : 'h-[40px]'} overflow-hidden transition-all md-lg:relative duration-500 absolute z-[99999] bg-white w-full border-x`}></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Header
