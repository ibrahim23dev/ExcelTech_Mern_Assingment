import React from 'react'
import { Link } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { useSelector, useDispatch } from 'react-redux'
import { overrideStyle } from '../../utils/utils';
function CreateTask() {
   const { loader } = useSelector(state => state.task)
  return (
    <div className='px-2 lg:px-7 pt-5 '>
            <div className='w-full p-4  bg-[#283046] rounded-md'>
                <div className='flex justify-between items-center pb-4'>
                    <h1 className='text-[#d0d2d6] text-xl font-semibold'>Create Task</h1>
                    <Link className='bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-7 py-2 my-2 ' to='/user/dashboard/task-list'>New Task</Link>
                </div>
                <div>
                    <form onSubmit=''>
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="name" className='font-serif font-semibold'>Title</label>
                                <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'  type="text" placeholder='task title' name='name' id='name' />
                            </div>
                            
                        </div>
                        
                        <div className='flex flex-col w-full gap-1 text-[#d0d2d6] mb-5'>
                            <label htmlFor="description" className='font-serif font-semibold'>Description</label>
                            <textarea rows={4} className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'  placeholder='description' name='description' id='description'></textarea>
                        </div>
                       
                        <div className='flex'>
                            <button disabled={loader ? true : false} className='bg-blue-500 w-[190px] hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
                                {
                                    loader ? <PropagateLoader color='#fff' cssOverride={overrideStyle} /> : 'Create'
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default CreateTask
