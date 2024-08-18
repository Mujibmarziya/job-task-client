import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Authprovider from './AuthProvider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { Route } from './Routes/Route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
    <RouterProvider router={Route}></RouterProvider>
    {/* <App /> */}
    </Authprovider>
  </StrictMode>,
)
