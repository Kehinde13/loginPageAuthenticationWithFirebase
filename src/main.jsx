import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import {
  LoginPage,
  SignUp,
  ForgotPassword,
  ErrorPage,
  Error404Page,
  HomePage
} from "./index.js"
import AuthLayout from './AuthLayout'
import ProtectedRoutes from './components/ProtectedRoute'

let isLoggedIn = true;
const setLoggedIn = () => {
  isLoggedIn = !isLoggedIn
}

const router = createBrowserRouter([
   {
      element: <ProtectedRoutes isLoggedIn={isLoggedIn}/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />
         },
      ]
   },
   {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
      path: '/LoginPage',
      element: <LoginPage />
      },
      {
        path: '/ForgotPassword',
        element: <ForgotPassword />,
      },
      {
        path: 'SignUp',
        element: <SignUp />
      }
    ]
   },
   {
    path: '*',
    element: <Error404Page />
   },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
