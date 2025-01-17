import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider'
import router from './routes/Routes'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <QueryClientProvider client={queryClient} >
      <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
    </HelmetProvider>
   </React.StrictMode>,
)
