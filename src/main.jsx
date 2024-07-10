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
  <RouterProvider router={router} />
)
