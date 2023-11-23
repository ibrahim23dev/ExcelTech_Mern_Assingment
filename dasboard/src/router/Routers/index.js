import { privateRoute } from './privateRouter';
import MainLayout from '../../Layout/MainLayout';
 //import ProtectRoute from './protectRouter';
export const GetRoutes = () => {
    
  return {
     path: '/',
     element: <MainLayout />,
    children: privateRoute
   }
 }
