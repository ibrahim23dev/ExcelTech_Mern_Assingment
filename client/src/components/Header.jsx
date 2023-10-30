import React from 'react'
import { GrMail } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { Fa500Px, FaFacebook } from 'react-icons/fa'
import { FaLinkedin} from 'react-icons/fa'
function Header() {
  return (
      <div className='w-full bg-white'>
      <div className='header-top bg-[#eeeeee] md-lg:hidden'>
        <div className='w-[85%]  lg:w-[90%] mx-auto'>
          <div className='flex w-full justify-center items-center h-[50px] text-slate-500'>
            <ul className='flex justify-start items-center gap-8'>
              <li className='flex justify-center items-center gap-2 text-sm after:absolute relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px]'>
                <span><GrMail/></span>
                <span>ibrahim@gemail.com</span>
              </li>
              <span>E-commerce website Whice is Multi Vendor</span>
            </ul>
          
              <div className='flex justify-center items-center gap-10'>
               <div className='flex justify-center items-center gap-4'>
                  <a href='#'><FaFacebook/></a>
                  <a href='#'><AiOutlineTwitter/></a>
                  <a href='#'><FaLinkedin/></a>
                   <a href='#'><AiFillGithub/></a>
             
             </div>
            </div>
          </div>
        </div>
             
          </div>
     
    </div>
  )
}

export default Header
