import { privateRoute } from './privateRouter';
 import MainLayout from '../../Layout/MainLayout';
export const GetRoutes = () => {
  return {
     path: '/',
     element: <MainLayout />,
    children: privateRoute,
   }
 }
