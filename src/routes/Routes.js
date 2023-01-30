import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Main from "../layout/Main/Main";
import Content from "../pages/Content/Content";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main/>, children: [
            {
                path: '/home', element: <Home/>
            },
            {
                path: '/content', element: <Content/>
            },
            {
                path: '/login', element: <Login/>
            },
            {
                path: '/register', element: <Register/>
            },
        ]
    },
    {
        path: '/dashboard', element: <DashboardLayout/>, children: [
            {
                
            }
        ]
    }
    
])