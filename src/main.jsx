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
} from "./components/index.js"
import App from './App'
import ProtectedRoutes from './components/ProtectedRoute'

let isLoggedIn = true;
const setLoggedIn = () => {
  isLoggedIn = !isLoggedIn
}

const router = createBrowserRouter([
  {
    element: <ProtectedRoutes isLoggedIn={isLoggedIn}/>,
    errorElement: <ErrorPage />,
    children:[
      {     
        element: <App />,
        children:[
          {
           path: '/',
           element: <LoginPage setLoggedIn={setLoggedIn} />
          },
           {
            path: '/ForgotPassword',
            element: <ForgotPassword />
           },
        ]
      }
    ]
  },
  {
    path: '/HomePage',
    element: <HomePage />
   }, 
   {
    path: '*',
    element: <Error404Page />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
