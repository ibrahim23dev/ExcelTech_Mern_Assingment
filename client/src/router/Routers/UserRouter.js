import { lazy } from 'react'
const UserDashboard = lazy(() => import("../../Views/User/userDashboard"))
const CreateTask = lazy(() => import("../../Views/User/CreateTask"))
const TaskList = lazy(() => import("../../Views/User/TaskList"))
const Profile = lazy(() => import("../../Views/User/profile"))
const Pending = lazy(() => import("../../Views/Pending"))
const Deactive = lazy(() => import("../../Views/Deactive"))
const UpdateTask = lazy(() => import('../../Views/User/UpdateTask'));
const Inprogresss = lazy(() => import('../../Views/User/Inprogresss'));
const CancelTask = lazy(() => import('../../Views/User/cencelTask'))
const CompleteTask = lazy(() => import('../../Views/User/completeTask'))
const Home = lazy(() => import('../../Views/User/Home'))
export const UserRoutes = [

    {
        path: '/user/pending',
        element: <Pending />,
        ability: 'user'
    },
    {
        path: '/user/deactive',
        element: <Deactive />,
        ability: 'user'
    },
    {
        path: '/',
        element: <Home />,
        ability: 'user'
    },

    {
        path: '/user/dashboard',
        element: <UserDashboard/>,
        role: 'user',
        status: 'active'
    },

    {
        path: '/user/dashboard/create-task',
        element: <CreateTask />,
        role: 'user',
        status: 'active'
    },
    {
        path: '/user/dashboard/update-task/:taskId',
        element: <UpdateTask/>,
        role: 'user',
        status: 'active'
    },
    {
        path: '/user/dashboard/task-list',
        element: <TaskList/>,
        role: 'user',
        status: 'active'
    },
    {
        path: '/user/dashboard/inprogress',
        element: <Inprogresss/>,
        role: 'user',
        status: 'active'
    },
     {
        path: '/user/dashboard/cencel',
        element: <CancelTask/>,
        role: 'user',
        status: 'active'
    },
    {
        path: '/user/dashboard/complete',
        element: <CompleteTask/>,
        role: 'user',
        status: 'active'
    },
    
    {
        path: '/user/dashboard/profile',
        element: <Profile />,
        role: 'user',
        visibility: ['active', 'deactive', 'pending']
    }
]