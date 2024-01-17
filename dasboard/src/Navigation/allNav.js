import React from 'react';
import { AiFillDashboard} from 'react-icons/ai';
import { BiCategory, BiLoaderCircle } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg'
import { AiOutlinePlus } from 'react-icons/ai'
import { GrUserWorker } from "react-icons/gr";
import { TbFileReport } from "react-icons/tb";
import { RiVipCrown2Fill } from "react-icons/ri";
import { FaTrafficLight } from "react-icons/fa";

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
        title: 'Daily Report',
        icon: <TbFileReport />,
        role: 'seller',
        path: '/seller/dashboard/report'
  },
    {
        id: 9,
        title: 'VIP Pass',
        icon: <RiVipCrown2Fill />,
        role: 'seller',
        path: '/seller/dashboard/vip'
  },
    {
        id: 10,
        title: 'Regular Traffic Details',
        icon: <FaTrafficLight />,
        role: 'seller',
        path: '/seller/dashboard/traffic'
  },
    {
        id: 11,
        title: 'Profile',
        icon: <CgProfile />,
        role: 'seller',
        path: '/seller/dashboard/profile'
    }

];
