import { AiFillDashboard, AiOutlineShoppingCart } from 'react-icons/ai'
import { BiCategory, BiLoaderCircle } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { BsCurrencyDollar } from 'react-icons/bs'

export const allNav = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <AiFillDashboard />,
        role: 'user',
        path: '/admin/dashboard'
    },
    {
        id: 2,
        title: 'Orders',
        icon: <AiOutlineShoppingCart />,
        role: 'user',
        path: '/admin/dashboard/orders'
    },
    {
        id: 3,
        title: 'Category',
        icon: <BiCategory />,
        role: 'user',
        path: '/admin/dashboard/category'
    },
    {
        id: 4,
        title: 'Sellers',
        icon: <FiUsers />,
        role: 'user',
        path: '/admin/dashboard/sellers'
    },
    {
        id: 5,
        title: 'Payment request',
        icon: <BsCurrencyDollar />,
        role: 'user',
        path: '/admin/dashboard/payment-request'
    },
    {
        id: 6,
        title: 'Deactive Sellers',
        icon: <FiUsers />,
        role: 'user',
        path: '/admin/dashboard/deactive-sellers'
    },
    {
        id: 7,
        title: 'Sellers Request',
        icon: <BiLoaderCircle />,
        role: 'user',
        path: '/admin/dashboard/sellers-request'
    },
    
    {
        id: 8,
        title: 'Profile',
        icon: <FiUsers />,
        role: 'user',
        path: '/seller/dashboard/profile'
    },
]