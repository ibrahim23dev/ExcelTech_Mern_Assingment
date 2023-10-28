import { lazy } from "react";
const Home=lazy(()=> import('../../Views/Home'))
const SellerDasbord = lazy(() => import('../../Views/seller/sellerDasbord'));
const AddProduct = lazy(() => import('../../Views/seller/addProduct'));
const Allproduct = lazy(() => import('../../Views/seller/allproduct'));
const DisCountProduct = lazy(() => import('../../Views/seller/profile'));
const Profile = lazy(() => import('../../Views/seller/addProduct'));
const Payment = lazy(() => import('../../Views/seller/payment'));
const Order = lazy(() => import('../../Views/seller/order'));
const ChatSupport = lazy(() => import('../../Views/seller/chatSupport'));
const CustomerChat = lazy(() => import('../../Views/seller/customerChat'));
const Logout = lazy(() => import('../../Views/seller/logout'));

export const SellerRoute= [
    {
        path:'/',
        element: <Home/>,
       ability:['admin','seller']
    },
    {
        path:'/seller/dasbord',
        element: <SellerDasbord/>,
       ability:['seller']
    },
    {
        path:'/seller/dasbord/addproduct',
        element: <AddProduct/>,
       ability:['seller']
    },
    {
        path:'/seller/dasbord/all-product',
        element: <Allproduct/>,
       ability:['seller']
    },
    {
        path:'/seller/dasbord/dis-count',
        element: <DisCountProduct/>,
       ability:['seller']
    },
    {
        path:'/seller/dasbord/payment',
        element: <Payment/>,
       ability:['seller']
    },
    {
        path:'/seller/dasbord/order',
        element: <Order/>,
       ability:['seller']
    },
    {
        path:'/seller/dasbordpayment/profile',
        element: <Profile/>,
       ability:['seller']
    },
    {
        path:'/seller/dasbord/customerChart',
        element: <CustomerChat/>,
       ability:['seller']
    },
    {
        path:'/seller/dasbordpayment/sellerChat',
        element: <ChatSupport/>,
       ability:['seller']
    },
    {
        path:'/seller/dasbord/logout',
        element: <Logout/>,
       ability:['seller']
    }

]