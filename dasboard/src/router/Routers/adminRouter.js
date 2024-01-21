import  React,{lazy} from "react";
const AdminDasbord = lazy(() => import('../../Views/admin/AdminDasboard'));
const AddSupervisor = lazy(() => import('../../Views/admin/AddSupervisor'));
const SuperviserRequest = lazy(() => import('../../Views/admin/SuperviserRequest'));
const Logout = lazy(() => import('../../Views/admin/logout'));
const SupervisorDetails = lazy(() => import('../../Views/admin/SupervisorDetails'));
const EmployeeDetails =lazy(() => import('../../Views/admin/EmployeeDetails'));

export const adminRoute = [
    {
        path: '/admin/dasbord',
        element: <AdminDasbord />,
        ability: 'admin'
    },
    
    {
        path: '/admin/dashboard/category',
        element: <AddSupervisor />,
        ability: 'admin'
    },
    
    {
        path: '/admin/dashboard/sellerrequest',
        element: <SuperviserRequest />,
        ability: 'admin'
    },
     
    {
        path: '/admin/dashboard/logout',
        element: <Logout />,
        ability: 'admin'
    },
    {
        path: '/admin/dashboard/sellerDetails',
        element: <SupervisorDetails />,
        ability: 'admin'
    },
    {
        path: '/admin/dashboard/BuyerDetails',
        element: <EmployeeDetails />,
        ability: 'admin'
    }
];


