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
import Authinction, { AuthConnect } from './All Components/Root/Authinction/Signup/Authinction/Authinction';
import Detailhotel1 from './All Components/Root/Navbar/Hotel/Detail hotel 1/Detailhotel1';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/Detail hotel 1",
        element: <Detailhotel1></Detailhotel1>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/Wishlist",
        element: <Wishlist></Wishlist>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authinction>
      <RouterProvider router={router} />
      </Authinction>

  </React.StrictMode>,
)
