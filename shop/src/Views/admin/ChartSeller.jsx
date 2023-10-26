import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaList } from 'react-icons/fa';

function ChartSeller() {
  const [show, setShow] = useState(false);
  const sellerId=123

  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full bg-[#283046] px-4 py-4 rounded-md h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
          <div
            className={`flex w-[390px] h-full absolute z-10 ${
              show ? "-left-[16px]" : "-left-[336px]"
            } md:left-0 md:relative transition-all `}
          >
            <div onClick={()=>setShow(!show)} className="w-full h-[calc(100vh-177px)] bg-[#252b3b] md:bg-transparent overflow-y-auto">
              <div className="flex text-xl justify-between items-center p-7 pb-5 md:p-0 md:px-3 text-white">
                <h2 className="pb-5">Sellers</h2>
                <span
                  onClick={() => setShow(!show)} // Toggle the show state
                  className="block cursor-pointer md:hidden"
                >
                  <IoMdClose />
                </span>
              </div>
              
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 w-[250px] rounded-sm cursor-pointer bg-slate-700`}
              >
                <div className="relative">
                  <img
                    src="/images/admin.jpg" // Use a relative image path
                    className="p-[2px] rounded-full w-[38px] h-[38px] border-white border-2 max-w-[38px]"
                    alt=""
                  />
                  <div className="  w-[10px] h-[10px] bg-green-500 rounded-full  right-0 bottom-0"></div>
                </div>
                
                <div className="flex-col justify-center items-start  w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className=" font-semibold">Md Ibrahim</h2>
                  </div>
                </div>
              </div>
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-sm cursor-pointer`}
              >
                <div className="relative">
                  <img
                    src="/images/admin.jpg" // Use a relative image path
                    className="p-[2px] rounded-full w-[38px] h-[38px] border-white border-2 max-w-[38px]"
                    alt=""
                  />
                  <div className="  w-[10px] h-[10px] bg-green-500 rounded-full  right-0 bottom-0"></div>
                </div>
                
                <div className="flex-col justify-center items-start  w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className=" font-semibold">Md Ibrahim</h2>
                  </div>
                </div>
              </div>
              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-sm cursor-pointer`}
              >
                <div className="relative">
                  <img
                    src="/images/admin.jpg" // Use a relative image path
                    className="p-[2px] rounded-full w-[38px] h-[38px] border-white border-2 max-w-[38px]"
                    alt=""
                  />
                  <div className="  w-[10px] h-[10px] bg-green-500 rounded-full  right-0 bottom-0"></div>
                </div>
                
                <div className="flex-col justify-center items-start  w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className=" font-semibold">Md Ibrahim</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[calc(100%-200px)] md:pl-4">
            <div className="flex justify-between items-center">
              {
                sellerId && <div className="flex justify-start items-center gap-3">
                  <div className="relative">
                    <img className="w-[42px] h-[42px] border-green-500 border-2 max-w-[38px] p-[2px] rounded-full" src="/images/admin.jpg" alt="" />
                    <div className="  w-[10px] h-[10px] bg-green-500 rounded-full  right-0 bottom-0"></div>
                  </div>
                  
                  </div>
              }
              <div onClick={()=>setShow(!show)} className="w-[35px] flex md:hidden h-[35px] rounded-sm bg-blue-500 shadow-lg hover:shadow-blue-500/50 justify-center cursor-pointer items-start text-white">
                <span><FaList/></span>
              </div>
              </div>
              <div className="py-4">
              <div className="bg-slate-800 h-[calc(100vh-290px)] rounded-md overflow-y-auto">
                <div className="w-full flex pt-2 justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div>
                       <img className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[3px] rounded-full" src="/images/admin.jpg" alt="" />
                    </div>
                    <div className="flex justify-center  items-center flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-md">
                      <span>Assalamualikum, What's Up?</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    
                    <div className="flex items-start  justify-center flex-col w-full bg-orange-500 shadow-lg shadow-orange-500/50 text-white py-1 px-2 rounded-md">
                      <span>Olikumassalamu, Alhamdullah fine, You?</span>
                    </div>
                    <div>
                       <img className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[3px] rounded-full" src="/images/admin.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-full flex pt-2 justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div>
                       <img className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[3px] rounded-full" src="/images/admin.jpg" alt="" />
                    </div>
                    <div className="flex justify-center  items-center flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-md">
                      <span>Alhamullah fine, What are you doing now?</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    
                    <div className="flex items-start  justify-center flex-col w-full bg-orange-500 shadow-lg shadow-orange-500/50 text-white py-1 px-2 rounded-md">
                      <span>Now,Work a capstone project</span>
                    </div>
                    <div>
                       <img className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[3px] rounded-full" src="/images/admin.jpg" alt="" />
                    </div>
                  </div>
                </div>
                 <div className="w-full flex pt-2 justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div>
                       <img className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[3px] rounded-full" src="/images/admin.jpg" alt="" />
                    </div>
                    <div className="flex justify-center  items-center flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-md">
                      <span>Oh.. I see...</span>
                    </div>
                  </div>
                </div>
                </div>
              </div>
             
            
            <from className="flex gap-3">
              <input className="w-full justify-between px-2 border border-slate-700 items-center py-[5px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[d0d2d6]" type="text" placeholder="input Your message..." />
              <button className="font-semibold bg-cyan-500 shadow-lg rounded-md text-white items-center justify-center flex w-[75px] h-[35px] hover:shadow-cyan-500">send</button>

              </from>
                
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartSeller;
