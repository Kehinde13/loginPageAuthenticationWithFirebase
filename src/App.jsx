import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  RouterProvider
} from 'react-router-dom'
import {
  LoginPage,
  ErrorPage,
  HomePage,
  SignUp,
  ForgotPassword
} from "./components/index.js"



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' errorElement={<ErrorPage />}>
           <Route index element={<LoginPage />} />
           <Route path='/HomePage' element={<HomePage />} />
           <Route path='/SignUp' element={<SignUp />} />
           <Route path='/ForgotPassword' element={<ForgotPassword />} />
       </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
