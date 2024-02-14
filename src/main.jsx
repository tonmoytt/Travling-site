import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './All Components/Root/Root';
import Home from './All Components/Root/Home/Home';
import Signup from './All Components/Root/Authinction/Signup/Signup';
import Wishlist from './All Components/Root/Navbar/Wishlist/Wishlist';
import Login from './All Components/Root/Authinction/Signup/Login/Login';
import About from './All Components/Root/Navbar/About/About';
import Contact from './All Components/Root/Navbar/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/Wishlist",
        element:<Wishlist></Wishlist>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
