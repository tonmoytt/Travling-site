import { Outlet, useLocation } from "react-router-dom";
import Header from "./Home/Header/Header";
import Navbar from "./Navbar/Navbar";

const Root = () => {
    // const location = useLocation();

    
    // const showHeader = location.pathname === "/" || location.pathname === "/home";

    return (
        <div>
           
            <Navbar />
             
            <Outlet />
        </div>
    );
};

export default Root;
