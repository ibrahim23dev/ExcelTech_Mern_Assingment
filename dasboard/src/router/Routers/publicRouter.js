import { lazy } from "react";

const Login = lazy(() => import('../../Views/auth/login'));
const Register = lazy(() => import('../../Views/auth/Register'));

const PublicRoute = [
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
]

export default PublicRoute;