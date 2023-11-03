import React, { useState } from 'react';
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

function App() {
    const [isLoggedIn, setLoggedIn] = useState(false)

    const User = () => {
        setLoggedIn(!isLoggedIn)
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
           element: <LoginPage User={User} />
           },
           {
             path: '/ForgotPassword',
             element: <ForgotPassword />,
           },
           {
             path: '/SignUp',
             element: <SignUp />
           }
         ]
        },
        {
         path: '*',
         element: <Error404Page />
        },
     ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App