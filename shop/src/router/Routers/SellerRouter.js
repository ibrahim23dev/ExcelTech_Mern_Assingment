import { lazy } from "react";

const sellerDasbord = lazy(() => import('../../Views/seller/sellerDasbord'));

export const SellerRoute= [
    {
        path:'/seller',
        element: <sellerDasbord />,
       ability:['admin','seller']
    }
]