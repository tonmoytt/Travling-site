import { Outlet, useLocation } from "react-router-dom";
import Header from "./Home/Header/Header";
import Navbar from "./Navbar/Navbar";
import Footer from "./Home/Footer/Footer";

const Root = () => {
//   const location = useLocation();

//   // Hide navbar on /login and /signup
//   const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div>
      {/* {!hideNavbar && } */}
      <Header></Header>
      <Navbar />
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Root;
