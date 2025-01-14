import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root';
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import Authprovider from './Provider/Authprovider';
import { Toaster } from 'react-hot-toast';
import About from './Component/About';
import Privateroute from './Component/Routes/Privateroute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/about',
        element:<Privateroute><About></About></Privateroute>
      }
      
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>

      <RouterProvider router={router} />
      <Toaster></Toaster>

    </Authprovider>

  </StrictMode>,
)
