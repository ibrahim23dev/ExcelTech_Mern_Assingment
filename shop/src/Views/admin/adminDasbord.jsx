import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { RiPrinterCloudLine } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Chart from 'react-apexcharts';
function adminDasbord() {
  const state = {
    series: [
      {
        name: "orders",
        data: [34,65,43,65,34,34,56,23,67,23,45]
      },
      {
        name: "Revenue",
        data: [34,62,34,69,24,32,56,33,67,20,47]
      },
      {
        name: "Sellers",
        data: [78,32,34,32,34,34,43,56,65,67,78]
      }
    ],

      options: {
        color: ['#181ee8', '#181ee8'],
        plotOptions: {
          radius: 30
        },
        chart: {
          background: 'transparent',
          foreColor: '#d0d2d6'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          curve: ['smooth', 'straigth', 'stepline'],
          lineCap: 'butt',
          color: '#f0f0f0',
          width: .5,
          dashArray: 0
        },
        xaxis: {
          category: ['jan','Feb','Mar','Apl','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        },
        legend: {
          position: 'top'
        }
      }
    
  }
  return (
    <div className='px-2 md:px-7 py-5'>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='felx flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bold'>$756</h2>
            <span className='text-md font-medium '>Total Sales</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#24c76f1f] flex justify-center items-center text-xl'>
            <BsCurrencyDollar className='text-[#28c76f] shadow-lg'/>
          </div>

        </div>
        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='felx flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bold'>20</h2>
            <span className='text-md font-medium '>Product</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#d85dc01f] flex justify-center items-center text-xl'>
            <RiPrinterCloudLine className='text-[#3145c7] shadow-lg'/>
          </div>

        </div>
        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='felx flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bold'>50</h2>
            <span className='text-md font-medium '>Seller</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl'>
            <FaUsers className='text-[#7532da] shadow-lg'/>
          </div>

        </div>
        <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
          <div className='felx flex-col justify-start items-start text-[#d0d2d6]'>
            <h2 className='text-3xl font-bold'>40</h2>
            <span className='text-md font-medium '>Orders</span>
          </div>
          <div className='w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl'>
            <AiOutlineShoppingCart className='text-[#7367f0] shadow-lg'/>
          </div>

        </div>
      </div>
      <div className='w-full flex flex-wrap mt-7'>
        <div className='w-full lg:w-7/12 lg:pr-3'>
          <div className='w-full bg-[#283046] p-4 rounded-md'>
            <Chart options={state.options} series={state.series} type='bar' height={350}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default adminDasbord
