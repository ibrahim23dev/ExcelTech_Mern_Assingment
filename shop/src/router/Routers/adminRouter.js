import { lazy } from "react";

const AdminDasbord = lazy(() => import('../../Views/admin/adminDasbord'));

export const adminRoute= [
    {
        path: '/admin/dasbord',
        element: <AdminDasbord />,
        ability: 'admin'
   }
]