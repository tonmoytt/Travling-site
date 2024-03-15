import { Link, useNavigate } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";

import img from "./../../../assets/images/t logo.svg"
import img1 from "./../../../assets/images/download.png"
import img2 from "./../../../assets/images/download (1).png"
import img3 from "./../../../assets/images/outbal.webp"
import { useContext } from "react";
import { AuthConnect } from "../Authinction/Signup/Authinction/Authinction";
import Swal from "sweetalert2";
const Navbar = () => {
    const { user, logout } = useContext(AuthConnect)
    const Navigate = useNavigate()
    const Hendlelogout = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // logout set
                logout()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                // navigate home
                Navigate('/')
            }
        });



    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start mx-0 md:mx-4">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li className="hover:text-blue-600"><Link to="/"><a>Home</a></Link></li>
                        <li className="hover:text-blue-600"><Link to="/about"><a>About</a></Link></li>

                        <li id="dropdown">

                            <div className="flex w-24">
                                <summary className="text-lg font-bold hover:text-blue-600">
                                    Listing
                                </summary>
                                <div>
                                    <IoIosArrowDown></IoIosArrowDown>
                                </div>
                            </div>

                            <ul id="submenu">
                                <li className=" font-semibold  pl-5  text-lg   pt-6" > Search Popular Map </li>
                                <li className="font-semibold pl-6   text-lg   pt-6">Search Half Map </li>

                            </ul>

                        </li>
                        {/* second */}

                        <li id="dropdown">

                            <div className="flex w-24">
                                <summary className="text-lg font-bold hover:text-blue-600">
                                    Hotel
                                </summary>
                                <div>
                                    <IoIosArrowDown></IoIosArrowDown>
                                </div>
                            </div>

                            <ul id="submenu">
                                <li className=" font-semibold pl-6   text-lg   pt-6" >  Detail hotel 1 </li>
                                <li className="font-semibold pl-6   text-lg   pt-6"> Detail hotel 2 </li>
                                <li className="font-semibold pl-6  text-lg   pt-6 "> Detail Room 1 </li>
                                <li className="font-semibold pl-6   text-lg pb-3  pt-6"> Detail Room 2 </li>
                            </ul>

                        </li>
                        {/* third */}
                        <li id="dropdown">

                            <div className="flex w-24">
                                <summary className="text-lg font-bold hover:text-blue-600">
                                    Pages
                                </summary>
                                <div>
                                    <IoIosArrowDown></IoIosArrowDown>
                                </div>
                            </div>

                            <ul id="submenu">
                                <Link>
                                    <li className=" font-semibold  pl-5  text-lg   pt-6 hover:text-blue-500" >  Blog </li>
                                </Link>
                                <Link>
                                    <li className="font-semibold  pl-5  text-lg   pt-6 hover:text-blue-500"> Become Local expert </li>
                                </Link>
                                <Link>
                                    <li className="font-semibold  pl-5 text-lg   pt-6 hover:text-blue-500"> Functional login </li>
                                </Link>
                                <Link>
                                    <li className="font-semibold  pl-5 text-lg   pt-6 hover:text-blue-500"> Functional Register </li>
                                </Link>
                                <Link>
                                    <li className="font-semibold  pl-5  text-lg pb-3  pt-6 hover:text-blue-500"> FAQ </li>
                                </Link>
                                <Link>
                                    <li className="font-semibold  pl-5  text-lg pb-3  pt-6 hover:text-blue-500"> Destination </li>
                                </Link>
                                <Link>
                                    <li className="font-semibold  pl-5  text-lg pb-3  pt-6 hover:text-blue-500"> 404 </li>
                                </Link>
                                <Link>
                                    <li className="font-semibold  pl-5  text-lg pb-3  pt-6 hover:text-blue-500"> Functional wishlist </li>
                                </Link>
                            </ul>

                        </li>

                        <li className="hover:text-blue-600"><Link to="/contact"><a>Contact</a></Link></li>

                    </ul>
                </div>
                <img src={img} alt="Travling" />
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 font-thin">
                    <li className="hover:text-blue-600" ><Link to="/"><a className="text-lg font-bold ">Home</a></Link></li>
                    <li className="text-lg font-bold hover:text-blue-600"><Link to="/about"><a>About</a></Link></li>


                    <li id="dropdown">

                        <div className="flex w-24">
                            <summary className="text-lg font-bold hover:text-blue-600">
                                Listing
                            </summary>
                            <div>
                                <IoIosArrowDown></IoIosArrowDown>
                            </div>
                        </div>

                        <ul id="submenu">
                            <Link>
                                <li className=" font-semibold pl-6   text-lg pt-6 hover:text-blue-500" > Search Popular Map </li>
                            </Link>
                            <Link>
                                <li className="font-semibold pl-6   text-lg pt-6 hover:text-blue-500">Search Half Map </li>
                            </Link>
                        </ul>

                    </li>

                    {/* second */}

                    <li id="dropdown">

                        <div className="flex w-24">
                            <summary className="text-lg font-bold hover:text-blue-500">
                                Hotel
                            </summary>
                            <div>
                                <IoIosArrowDown></IoIosArrowDown>
                            </div>
                        </div>

                        <ul id="submenu">
                            <Link to="/Detail hotel 1">   <li className=" font-semibold pl-6   text-lg pt-6 hover:text-blue-500" >  Detail hotel 1 </li>
                            </Link>
                            <Link to="/Detail hotel 2">
                                <li className="font-semibold pl-6   text-lg   pt-6 hover:text-blue-500"> Detail hotel 2 </li>
                            </Link>
                            <Link to="/room1">
                                <li className="font-semibold pl-6  text-lg   pt-6 hover:text-blue-500"> Detail Room 1 </li>

                            </Link>
                            <Link to="/room2">
                                <li className="font-semibold pl-6   text-lg pb-3  pt-6 hover:text-blue-500"> Detail Room 2 </li>
                            </Link>
                        </ul>

                    </li>
                    {/* third */}
                    <li id="dropdown">

                        <div className="flex w-24">
                            <summary className="text-lg font-bold hover:text-blue-500">
                                Pages
                            </summary>
                            <div>
                                <IoIosArrowDown></IoIosArrowDown>
                            </div>
                        </div>

                        <ul id="submenu">
                            <Link>
                                <li className=" font-semibold  pl-5  text-lg   pt-6 hover:text-blue-500" >  Blog </li>
                            </Link>
                            <Link>
                                <li className="font-semibold  pl-5  text-lg   pt-6 hover:text-blue-500"> Become Local expert </li>
                            </Link>
                            <Link to="/login">
                                <li className="font-semibold  pl-5 text-lg   pt-6 hover:text-blue-500"> Functional login </li>
                            </Link>
                            <Link to="/signup">
                                <li className="font-semibold  pl-5 text-lg   pt-6 hover:text-blue-500"> Functional Register </li>
                            </Link>
                            <Link>
                                <li className="font-semibold  pl-5  text-lg pb-3  pt-6 hover:text-blue-500"> FAQ </li>
                            </Link>
                            <Link>
                                <li className="font-semibold  pl-5  text-lg pb-3  pt-6 hover:text-blue-500"> Destination </li>
                            </Link>
                            <Link>
                                <li className="font-semibold  pl-5  text-lg pb-3  pt-6 hover:text-blue-500"> 404 </li>
                            </Link>
                            <Link to="/wishlist">
                                <li className="font-semibold  pl-5  text-lg pb-3  pt-6 hover:text-blue-500"> Functional wishlist </li>
                            </Link>
                        </ul>
                    </li>


                    <li className="text-lg font-bold hover:text-blue-600 "><Link to="/contact"><a>Contact</a></Link></li>
                </ul>
            </div>
            <div className="navbar-end flex  ">

                <div className="pr-4 md:pr-6">
                    <Link to="/Wishlist">
                        <img className="h-7 md:h-8 w-7 md:w-8" src={img2} alt="" /></Link>
                </div>

                {
                    user ? <>
                        <div>
                            <button onClick={Hendlelogout}>
                                <img className="h-10 md:h-14 w-10 md:w-14   rounded-full" src={img3} alt="" />
                            </button>

                        </div>
                    </>
                        :
                        <>
                            <div>
                                <Link to="/signup"><img className="h-14 w-14" src={img1} alt="" /></Link>
                            </div>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;