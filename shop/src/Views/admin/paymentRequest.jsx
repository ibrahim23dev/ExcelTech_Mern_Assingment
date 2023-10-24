import React,{forwardRef} from 'react'

import { FixedSizeList as List } from 'react-window';
function handleOnWheel({ deltaY }) {
  console.log('handleOnWheel',deltaY)
}

const outerElementType = forwardRef((props, ref) => {
  <div ref={ref} onWheel={handleOnWheel} {...props}/>
})
function paymentRequest() {
  const Row = ({ index, style }) => {
    return (
      <div style={style} className='flex text-sm'>
        <div className='w-[25px]p-2 whitespace-nowrap'>{index + 1}</div>
        <div className='w-[25px]p-2 whitespace-nowrap'></div>
        <div className='w-[25px]p-2 whitespace-nowrap'>#454</div>
        <div className='w-[25px]p-2 whitespace-nowrap'>#454</div>
        <div className='w-[25px]p-2 whitespace-nowrap'>#454</div>
        </div>
    )
  }
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex flex-warp w-full ">
        
          <div className="w-full p-4 bg-[#283046] rounded-md text-[#d0d2d6]">
            <h2 className='text-xl font-medium pb-5 text-[#d0d2d6]'>Withdrawal request</h2>
            <div className='font-bold text-sm uppercase border-b border-slate-700 '>
                          <div className='bg-[#161d31] w-min-[340px] justify-between items-start flex '>
                              <div className='py-3 w-[25%]'>No</div>
                              <div className='py-3 w-[25%]'>Amount</div>
                              <div className='py-3 w-[25%]'>Status</div>
                              <div className='py-3 w-[25%]'>data</div>
                              <div className='py-3 w-[25%]'>Action</div>
                             
                          </div>
                          
                      </div>
          
        </div>
      </div>
    </div>
  )
}

export default paymentRequest
