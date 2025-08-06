import { Outlet, useLocation } from "react-router-dom";
import Header from "./Home/Header/Header";
import Navbar from "./Navbar/Navbar";

const Root = () => {
//   const location = useLocation();

//   // Hide navbar on /login and /signup
//   const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div>
      {/* {!hideNavbar && } */}
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
