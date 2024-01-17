import { lazy } from 'react'
const SellerDashboard = lazy(() => import("../../Views/seller/SellerDashboard"))
const AddProduct = lazy(() => import("../../Views/seller/addProduct"))
const Products = lazy(() => import("../../Views/seller/Products"))
const Profile = lazy(() => import("../../Views/seller/profile"))
const Pending = lazy(() => import("../../Views/Pending"))
const Deactive = lazy(() => import("../../Views/Deactive"))
const EditProduct = lazy(() => import('../../Views/seller/EditProduct'));
const Report = lazy(() => import('../../Views/seller/report'));
const Vip = lazy(() => import('../../Views/seller/vip'));
const Traffic = lazy(() => import('../../Views/seller/traffic'));

export const employeeRoutes = [

    {
        path: '/seller/account-pending',
        element: <Pending />,
        ability: 'seller'
    },
    {
        path: '/seller/account-deactive',
        element: <Deactive />,
        ability: 'seller'
    },

    {
        path: '/seller/dashboard',
        element: <SellerDashboard />,
        role: 'seller',
        status: 'active'
    },

    {
        path: '/seller/dashboard/add-product',
        element: <AddProduct />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/edit-product/:productId',
        element: <EditProduct/>,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/products',
        element: <Products/>,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/report',
        element: <Report/>,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/vip',
        element: <Vip/>,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/traffic',
        element: <Traffic/>,
        role: 'seller',
        status: 'active'
    },

    {
        path: '/seller/dashboard/profile',
        element: <Profile />,
        role: 'seller',
        visibility: ['active', 'deactive', 'pending']
    }
]