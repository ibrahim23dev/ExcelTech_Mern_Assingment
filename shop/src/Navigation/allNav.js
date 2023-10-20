import React from 'react';
import { AiFillDashboard, AiOutlineShopping } from 'react-icons/ai';
import { BiCategory, BiLoaderCircle } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiChat1 } from 'react-icons/ci';

// Define your navigation data
export const allNav = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <AiFillDashboard />,
    role: 'admin',
    path: '/'
  },
  {
    id: 2,
    title: 'Order',
    icon: <AiOutlineShopping />,
    role: 'admin',
    path: '/admin/dashboard/orders'
  },
  {
    id: 3,
    title: 'Category',
    icon: <BiCategory />,
    role: 'admin',
    path: '/admin/dashboard/category'
  },
  {
    id: 4,
    title: 'Seller',
    icon: <FiUser />,
    role: 'admin',
    path: '/admin/dashboard/activeseller'
  },
  {
    id: 5,
    title: 'Deactive Seller',
    icon: <FaUser />,
    role: 'admin',
    path: '/admin/dashboard/deactivateseller'
  },
  {
    id: 6,
    title: 'Seller Request',
    icon: <BiLoaderCircle />,
    role: 'admin',
    path: '/admin/dashboard/sellerrequest'
  },
  {
    id: 7,
    title: 'Payment Request',
    icon: <BsCurrencyDollar />,
    role: 'admin',
    path: '/admin/dashboard/paymentrequest'
  },
  {
    id: 8,
    title: 'Chat Seller',
    icon: <CiChat1 />,
    role: 'admin',
    path: '/admin/dashboard/chatseller'
  }
];
