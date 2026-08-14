import React from 'react'
import {  createBrowserRouter, RouterProvider,} from "react-router";
import AuthLayout from '../Layout/AuthLayout';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import MainLayout from '../Layout/MainLayout';
import ProtectedRoute from './ProtectedRoute';


const AppRoutes = () => {
    
     let router = createBrowserRouter([
        {
            path:"/",
            element:<AuthLayout />,
            children:[
                {
                    path:"",
                    element:<LoginPage />
                },
                {
                    path:"Register",
                    element:<RegisterPage />
                }
            ]
        },
        {
            path:"/main",
            element:<ProtectedRoute />,
            children : [
                {
                    path:"",
                    element:<MainLayout />,
                }
            ]
        }
     ]) 

  return <RouterProvider router={router} />
}

export default AppRoutes
