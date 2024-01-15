import { lazy } from 'react'
const SellerDashboard = lazy(() => import("../../Views/seller/SellerDashboard"))
const AddProduct = lazy(() => import("../../Views/seller/addProduct"))
const Products = lazy(() => import("../../Views/seller/Products"))
const Profile = lazy(() => import("../../Views/seller/profile"))
const Pending = lazy(() => import("../../Views/Pending"))
const Deactive = lazy(() => import("../../Views/Deactive"))
const EditProduct = lazy(() => import('../../Views/seller/EditProduct'));
export const sellerRoutes = [

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
        path: '/seller/dashboard/profile',
        element: <Profile />,
        role: 'seller',
        visibility: ['active', 'deactive', 'pending']
    }
]