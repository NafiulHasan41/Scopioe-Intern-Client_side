import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/Error/ErrorPage'
import Root from '../Layout/Root'
import PrivateRoute from './PrivateRoutes'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Authentication/Login'
import New_listing from '../Pages/New_Listing/New_listing'
import Register from '../Pages/Authentication/Register'



const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children:[
        {
            index: true,
            element:(
              <PrivateRoute>
                <Home/>
              </PrivateRoute>
            ),
        },
        {
          path:"/new_listings",
          element:(<PrivateRoute><New_listing/></PrivateRoute>),
        }
        
       

      ]
    
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    },
   
   
  ])
  
  export default router
