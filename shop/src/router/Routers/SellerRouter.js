import { lazy } from "react";

const Home = lazy(() => import('../../Views/Home'));

export const SellerRoute= [
    {
        path:'/seller',
        element: <Home />,
       ability:['admin','seller']
    }
]