import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/Error/ErrorPage'
import Root from '../Layout/Root'
import PrivateRoute from './PrivateRoutes'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Authentication/Login'
import New_listing from '../Pages/New_Listing/New_listing'
import Register from '../Pages/Authentication/Register'
import Search from '../Pages/Search'
import Favorite from '../Pages/Favorite'
import Help_center from '../Pages/Help_center'
import Setting from '../Pages/Setting'
import About_Website from '../Pages/About_Website'




const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children:[
        {
            index: true,
            element:(
              <Home/>
            ),
        },
        {
          path:"/new_listings",
          element:(<PrivateRoute><New_listing/></PrivateRoute>),
        }
        ,
        
        {
          path:"/search",
          element:(<Search/>),
        }
        ,
        {
          path:"/about",
          element:(<PrivateRoute><About_Website/></PrivateRoute>),
        }
        ,
       
        {
          path:"/favorites",
          element:(<PrivateRoute><Favorite/></PrivateRoute>),
        }
        ,
       
        {
          path:"/help_center",
          element:(<PrivateRoute><Help_center/></PrivateRoute>),
        }
        ,
    
        {
          path:"/settings",
          element:(<PrivateRoute><Setting/></PrivateRoute>),
        }
        ,
       

        
       

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
