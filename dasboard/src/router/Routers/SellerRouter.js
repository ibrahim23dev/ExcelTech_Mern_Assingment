import { lazy } from 'react'
const SellerDashboard = lazy(() => import("../../Views/seller/sellerDasbord"))
const AddProduct = lazy(() => import("../../Views/seller/addProduct"))
//const Products = lazy(() => import("../../views/seller/allproduct"))
const DiscountProducts = lazy(() => import("../../views/seller/discountProduct"))
const Orders = lazy(() => import("../../Views/seller/order"))
const Payments = lazy(() => import("../../views/seller/payment"))
const SellerToAdmin = lazy(() => import("../../views/seller/SellerToAdmin"))
const SellerToCustomer = lazy(() => import("../../views/seller/SellerToCustomer"))
const Profile = lazy(() => import("../../views/seller/profile"))
const EditProduct = lazy(() => import("../../views/seller/EditProduct"))
const OrderDetails = lazy(() => import("../../views/seller/OrderDetails"))
//const Pending = lazy(() => import("../../Views/Pending"))
//const Deactive = lazy(() => import("../../Views/Deactive"))
export const sellerRoutes = [

    {
        path: '/seller/dashboard',
        element: <SellerDashboard />,
        role: 'seller'
       
    },

    {
        path: '/seller/dashboard/add-product',
        element: <AddProduct />,
        role: 'seller'
        
    },
    {
        path: '/seller/dashboard/edit-product/:productId',
        element: <EditProduct />,
        role: 'seller'
    
    },
    

    {
        path: '/seller/dashboard/discount-products',
        element: <DiscountProducts />,
        role: 'seller'
    },
    {
        path: '/seller/dashboard/orders',
        element: <Orders />,
        role: 'seller'
        
    },
    {
        path: '/seller/dashboard/order/details/:orderId',
        element: <OrderDetails />,
        role: 'seller'
        
    },
    {
        path: '/seller/dashboard/payments',
        element: <Payments />,
        role: 'seller'
        
    },
    {
        path: '/seller/dashboard/chat-support',
        element: <SellerToAdmin />,
        role: 'seller'
        
    },
    {
        path: '/seller/dashboard/chat-customer/:customerId',
        element: <SellerToCustomer />,
        role: 'seller'
        
    },
    {
        path: '/seller/dashboard/chat-customer',
        element: <SellerToCustomer />,
        role: 'seller'
        
    },
    {
        path: '/seller/dashboard/profile',
        element: <Profile />,
        role: 'seller'
        
    }
]