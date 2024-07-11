import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignUp from './(auth)/sign-up.jsx';
import SignIn from './(auth)/sign-in.jsx';
import { Toaster } from "react-hot-toast";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/sign-in',
    element: <SignIn />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <Toaster
    position="top-center"
    reverseOrder={false}
  />
  <RouterProvider router={router} />
  </QueryClientProvider>
)
