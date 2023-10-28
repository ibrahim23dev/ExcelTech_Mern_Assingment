import React from 'react';
import { AiFillDashboard, AiOutlineShopping } from 'react-icons/ai';
import { BiCategory, BiLoaderCircle } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { BsCurrencyDollar } from 'react-icons/bs';
import { BsChat } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg'
import { TbDiscount2Off } from 'react-icons/tb'
import {BsChatLeftText} from 'react-icons/bs'
import { SiProducthunt } from 'react-icons/si'
import {BiMessageSquareAdd} from 'react-icons/bi'

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
    icon: <BsChat/>,
    role: 'admin',
    path: '/admin/dashboard/chatseller'
  },
  
  {
    id: 9,
    title: 'Dashboard',
    icon: <AiFillDashboard />,
    role: 'seller',
    path: '/seller/dasbord'
  },
  {
    id: 10,
    title: 'All Products',
    icon: <SiProducthunt/>,
    role: 'seller',
    path: '/seller/dasbord/all-product'
  },
  {
    id: 11,
    title: 'Add Products',
    icon: <BiMessageSquareAdd/>,
    role: 'seller',
    path: '/seller/dasbord/addproduct'
  },
  {
    id: 12,
    title: 'Discount Products',
    icon: <TbDiscount2Off/>,
    role: 'seller',
    path: '/seller/dasbord/dis-count'
  },
  {
    id: 13,
    title: 'Order',
    icon: <AiOutlineShopping />,
    role: 'seller',
    path: '/seller/dasbord/order'
  },
  {
    id: 14,
    title: 'payment',
    icon: <BsCurrencyDollar />,
    role: 'seller',
    path: '/seller/dasbord/payment'
  },
   {
    id: 15,
    title: 'Customer Chart',
    icon: <BsChatLeftText/>,
    role: 'seller',
    path: '/seller/dasbord/customerChart'
  },
    {
    id: 16,
    title: 'Chart Support',
    icon: <BsChat />,
    role: 'seller',
    path: '/seller/dasbordpayment/sellerChat'
  },
    {
    id: 17,
    title: 'Profile',
    icon: <CgProfile />,
    role: 'seller',
    path: '/seller/dasbordpayment/profile'
  }


];
