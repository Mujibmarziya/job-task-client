import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import MainLayout from './MainLayout'
export const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
  
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('https://job-task-assignment.vercel.app/product'),
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/login',
        element: <Login />,
      },
  
    ],
  }

])
