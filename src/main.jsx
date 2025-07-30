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
import DetailsHotel2 from './All Components/Root/Navbar/Hotel/Detail hotel 1/DetailsHotel2/DetailsHotel2';
import HotelWBFHommachi from './All Components/Root/Navbar/Room/Hotel wft/HotelWBFHommachi';
import Room1 from './All Components/Root/Navbar/Room/Room1';
import Room2 from './All Components/Root/Navbar/Room/Room2/Room2';
import PriverRoute from './All Components/Root/Authinction/Signup/PriverRoute/PriverRoute';
import WishlistProvider from './All Components/Root/Navbar/Wishlist/Wishlist provider/WishlistProvider';

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
        path: "/Detail hotel 2",
        element: <DetailsHotel2></DetailsHotel2>
      },
      {
        path: "/room1",
        element: <Room1></Room1>
      },
      {
        path: "/room2",
        element: <Room2></Room2>
      },
      {
        path: "/Hotel WBF Hommachi",
        element: <HotelWBFHommachi></HotelWBFHommachi>
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
        element: <PriverRoute><Wishlist></Wishlist></PriverRoute>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authinction> {/* ✅ AuthConnect.Provider wrapper */}
      <WishlistProvider> {/* ✅ WishlistProvider inside Auth provider */}
        <RouterProvider router={router} />
      </WishlistProvider>
    </Authinction>
  </React.StrictMode>
)
