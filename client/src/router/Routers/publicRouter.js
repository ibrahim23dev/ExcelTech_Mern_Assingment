import { lazy } from "react";

const Login = lazy(() => import('../../Views/auth/login'));
const Register = lazy(() => import('../../Views/auth/Register'));
const Home = lazy(() => import('../../Views/Home'));

const PublicRoute = [
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/',
        element: <Home/>,
        
    },
]

export default PublicRoute;