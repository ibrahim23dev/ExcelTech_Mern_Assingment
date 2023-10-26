import React, { useState } from 'react'
import { BsArrowBarDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Pagenation from '../Pagenation';

function Order() {
    const [currentPage, setCurrentPage]=useState(1);
    //const [searchValue, setSearchValue] = useState();
    const [parPage, setParPage] = useState();
    const [show, setShow] = useState(false);
    
  return (
    <div className='px-2 lg:px-7 pt-5'>
          <div className='w-full bg-[#283046] p-4 rounded-md'>
              <div className='flex justify-between items-center'>
                  <select onChange={(e)=>setParPage(parseInt(e.target.value))} className='px-4 py-3 hover:border-indigo-500 outline-none bg-[#283046]  border border-slate-700 rounded-md text-[#d0d2d6]'>
                      <option value='5'>5c</option>
                      <option value='5'>15c</option>
                       <option value='5'>35c</option>
                  </select>
                  <input className='px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type='text' placeholder='search' name='search'/>
              </div>
              <div className='relative mt-5 overflow-x-auto'>
                  <div className='w-full text-sm text-left text-[#d0d2d6]'>
                      <div className='font-bold text-sm uppercase border-b border-slate-700'>
                          <div className='justify-between items-start flex'>
                              <div className='py-3 w-[25%]'>Order Id</div>
                              <div className='py-3 w-[13%]'>Price</div>
                              <div className='py-3 w-[18%]'>Payment Status</div>
                              <div className='py-3 w-[18%]'>Order Status</div>
                              <div className='py-3 w-[18%]'>Action</div>
                              <div className='py-3 w-[8%]'>
                              <BsArrowBarDown />
                          </div>
                          </div>
                          
                      </div>
                      <div>
                          <div className='justify-between flex items-start border-b order-slate-700'>
                           <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              <Link to='/admin/dashboard/BuyerDetails' className='py-3 w-[18%] font-medium whitespace-nowrap'>view</Link>
                              <div onClick={()=>setShow(!show)} className='py-3 w-[8%] cursor-pointer'>
                              <BsArrowBarDown />
                          </div>
                          </div>
                          <div className={show ? 'block border-b border-slate-700 bg-slate-800' : 'hidden'}>
                          <div className='flex justify-start items-start border-b border-slate-700 px-2 pl-3'>
                              <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                                  <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              </div>
                              <div className='flex justify-start items-start border-b border-slate-700 px-2 pl-3'>
                              <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                                  <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              </div>
                              
                          </div>

                          
                          
                      </div>
                      <div>
                          <div className='justify-between flex items-start border-b order-slate-700'>
                           <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              <Link to='/admin/dashboard/BuyerDetails' className='py-3 w-[18%] font-medium whitespace-nowrap'>view</Link>
                              <div onClick={()=>setShow(!show)} className='py-3 w-[8%] cursor-pointer'>
                              <BsArrowBarDown />
                          </div>
                          </div>
                          <div className={show ?'block border-b border-slate-700 bg-slate-800' : 'hidden'}>
                          <div className='flex justify-start items-start border-b border-slate-700 px-2 pl-3'>
                              <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                                  <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              </div>
                              <div className='flex justify-start items-start border-b border-slate-700 px-2 pl-3'>
                              <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                                  <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              </div>
                              
                          </div>

                          
                          
                      </div>
                      <div>
                          <div className='justify-between flex items-start border-b order-slate-700'>
                           <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              <Link to='/admin/dashboard/BuyerDetails' className='py-3 w-[18%] font-medium whitespace-nowrap'>view</Link>
                              <div onClick={()=>setShow(!show)} className='py-3 w-[8%] cursor-pointer'>
                              <BsArrowBarDown />
                          </div>
                          </div>
                          <div className={show ?'block border-b border-slate-700 bg-slate-800' : 'hidden'}>
                          <div className='flex justify-start items-start border-b border-slate-700 px-2 pl-3'>
                              <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                                  <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              </div>
                              <div className='flex justify-start items-start border-b border-slate-700 px-2 pl-3'>
                              <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                                  <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              </div>
                              
                          </div>

                          
                          
                      </div>
                      <div>
                          <div className='justify-between flex items-start border-b order-slate-700'>
                           <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              <Link to='/admin/dashboard/BuyerDetails' className='py-3 w-[18%] font-medium whitespace-nowrap'>view</Link>
                              <div onClick={()=>setShow(!show)} className='py-3 w-[8%] cursor-pointer'>
                              <BsArrowBarDown />
                          </div>
                          </div>
                          <div className={show ?'block border-b border-slate-700 bg-slate-800' : 'hidden'}>
                          <div className='flex justify-start items-start border-b border-slate-700 px-2 pl-3'>
                              <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                                  <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              </div>
                              <div className='flex justify-start items-start border-b border-slate-700 px-2 pl-3'>
                              <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                                  <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              </div>
                              
                          </div>

                          
                          
                      </div>
                      <div>
                          <div className='justify-between flex items-start border-b order-slate-700'>
                           <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              <Link to='/admin/dashboard/BuyerDetails'   className='py-3 w-[18%] font-medium whitespace-nowrap'>view</Link>
                              <div onClick={()=>setShow(!show)} className='py-3 w-[8%] cursor-pointer'>
                              <BsArrowBarDown />
                          </div>
                          </div>
                          <div className={show ?'block border-b border-slate-700 bg-slate-800' : 'hidden'}>
                          <div className='flex justify-start items-start border-b border-slate-700 px-2 pl-3'>
                              <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                                  <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              </div>
                              <div className='flex justify-start items-start border-b border-slate-700 px-2 pl-3'>
                              <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                                  <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              </div>
                              
                          </div>

                          
                          
                      </div>
                      <div>
                          <div className='justify-between flex items-start border-b order-slate-700'>
                           <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              <Link className='py-3 w-[18%] font-medium whitespace-nowrap'>view</Link>
                              <div onClick={()=>setShow(!show)} className='py-3 w-[8%] cursor-pointer'>
                              <BsArrowBarDown />
                          </div>
                          </div>
                          <div className={show ?'block border-b border-slate-700 bg-slate-800' : 'hidden'}>
                          <div className='flex justify-start items-start border-b border-slate-700 px-2 pl-3'>
                              <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                                  <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              </div>
                              <div className='flex justify-start items-start border-b border-slate-700 px-2 pl-3'>
                              <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                                  <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              </div>
                              
                          </div>

                          
                          
                      </div>
                      <div>
                          <div className='justify-between flex items-start border-b order-slate-700'>
                           <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              <Link className='py-3 w-[18%] font-medium whitespace-nowrap'>view</Link>
                              <div onClick={()=>setShow(!show)} className='py-3 w-[8%] cursor-pointer'>
                              <BsArrowBarDown />
                          </div>
                          </div>
                          <div className={show ?'block border-b border-slate-700 bg-slate-800' : 'hidden'}>
                          <div className='flex justify-start items-start border-b border-slate-700 px-2 pl-3'>
                              <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                                  <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              </div>
                              <div className='flex justify-start items-start border-b border-slate-700 px-2 pl-3'>
                              <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                                  <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              </div>
                              
                          </div>

                          
                          
                      </div>
                      <div>
                          <div className='justify-between flex items-start border-b order-slate-700'>
                           <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              <Link className='py-3 w-[18%] font-medium whitespace-nowrap'>view</Link>
                              <div onClick={()=>setShow(!show)} className='py-3 w-[8%] cursor-pointer'>
                              <BsArrowBarDown />
                          </div>
                          </div>
                          <div className={show ?'block border-b border-slate-700 bg-slate-800' : 'hidden'}>
                          <div className='flex justify-start items-start border-b border-slate-700 px-2 pl-3'>
                              <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                                  <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              </div>
                              <div className='flex justify-start items-start border-b border-slate-700 px-2 pl-3'>
                              <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                                  <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              </div>
                              
                          </div>

                          
                          
                      </div><div>
                          <div className='justify-between flex items-start border-b order-slate-700'>
                           <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              <Link className='py-3 w-[18%] font-medium whitespace-nowrap'>view</Link>
                              <div onClick={()=>setShow(!show)} className='py-3 w-[8%] cursor-pointer'>
                              <BsArrowBarDown />
                          </div>
                          </div>
                          <div className={show ?'block border-b border-slate-700 bg-slate-800' : 'hidden'}>
                          <div className='flex justify-start items-start border-b border-slate-700 px-2 pl-3'>
                              <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                                  <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              </div>
                              <div className='flex justify-start items-start border-b border-slate-700 px-2 pl-3'>
                              <div className='py-3 w-[25%]'>#00d1e848</div>
                              <div className='py-3 w-[13%] font-medium whitespace-nowrap'>$345</div>
                              <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                                  <div className='py-3 w-[18%] font-medium whitespace-nowrap'>Pending</div>
                              </div>
                              
                          </div>

                          
                          
                      </div>
                      
                  </div>
                  
              </div>





              
              <div className='justify-end mt-4 bottom-4 right-4 w-full flex'>
                  <Pagenation
                  pageNumber={currentPage}
                  setPageNumber={setCurrentPage}
              totalPage={50}
              parPage={parPage}
              showItem={4}
              />
              </div>
              
      </div>
    </div>
  )
}

export default Order
