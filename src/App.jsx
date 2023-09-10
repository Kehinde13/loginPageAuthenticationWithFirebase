import HomePage from './components/HomePage'
import LoginPage from './components/Login'
import ErrorPage from './components/ErrorPage'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  RouterProvider
} from 'react-router-dom'



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' errorElement={<ErrorPage />}>
           <Route index element={<LoginPage />} />
           <Route path='/HomePage' element={<HomePage />} />
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
