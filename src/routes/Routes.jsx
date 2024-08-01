import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/Error/ErrorPage'
import Root from '../Layout/Root'



const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children:[
        {
            index: true,
            
        },

      ]
    
    },
   
  ])
  
  export default router
