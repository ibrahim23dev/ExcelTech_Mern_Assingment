import React from 'react';
import { AiFillDashboard} from 'react-icons/ai';
import { BiCategory, BiLoaderCircle } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg'
import { AiOutlinePlus } from 'react-icons/ai'
import { GrUserWorker } from "react-icons/gr";

// Define your navigation data
export const allNav = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <AiFillDashboard />,
    role: 'admin',
    path: '/admin/dasbord'
  },
  
  {
    id: 2,
    title: 'Supervisor',
    icon: <BiCategory />,
    role: 'admin',
    path: '/admin/dashboard/category'
  },
  
  {
    id: 3,
    title: 'Supervisor Request',
    icon: <BiLoaderCircle />,
    role: 'admin',
    path: '/admin/dashboard/sellerrequest'
  },
  {
        id: 4,
        title: 'Add Employee',
        icon: <AiOutlinePlus />,
        role: 'admin',
        path: '/admin/dashboard/addEmployee'
    },

  {
        id: 5,
        title: 'Dashboard',
        icon: <AiFillDashboard />,
        role: 'seller',
        path: '/seller/dashboard'
    },
    {
        id: 6,
        title: 'Add Employee',
        icon: <AiOutlinePlus />,
        role: 'seller',
        path: '/seller/dashboard/add-product'
    },
    {
        id: 7,
        title: 'Employee',
        icon: <GrUserWorker />,
        role: 'seller',
        path: '/seller/dashboard/products'
    },

    {
        id: 8,
        title: 'Profile',
        icon: <CgProfile />,
        role: 'seller',
        path: '/seller/dashboard/profile'
    }

];
