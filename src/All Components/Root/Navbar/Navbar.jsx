import { Link } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";

import img from "./../../../assets/images/t logo.svg"
import img1 from "./../../../assets/images/download.png"
import img2 from "./../../../assets/images/download (1).png"
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li><Link to="/"><a>Home</a></Link></li>
                        <li><Link to="/about"><a>About</a></Link></li>

                        <li id="dropdown">

                            <div className="flex w-24">
                                <summary className="text-lg font-bold">
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
                                <summary className="text-lg font-bold">
                                    Hotel
                                </summary>
                                <div>
                                    <IoIosArrowDown></IoIosArrowDown>
                                </div>
                            </div>

                            <ul id="submenu">
                                <li className=" font-semibold pl-6   text-lg   pt-6" >  Detail hotel 1 </li>
                                <li className="font-semibold pl-6   text-lg   pt-6"> Detail hotel 1 </li>
                                <li className="font-semibold pl-6  text-lg   pt-6 "> Detail Room 2 </li>
                                <li className="font-semibold pl-6   text-lg pb-3  pt-6"> Detail Room 2 </li>
                            </ul>

                        </li>
                        {/* third */}
                        <li id="dropdown">

                            <div className="flex w-24">
                                <summary className="text-lg font-bold">
                                    Pages
                                </summary>
                                <div>
                                    <IoIosArrowDown></IoIosArrowDown>
                                </div>
                            </div>

                            <ul id="submenu">
                                <li className=" font-semibold pl-6   text-lg   pt-6" >  Blog </li>
                                <li className="font-semibold pl-6   text-lg   pt-6"> Become Local expert </li>
                                <li className="font-semibold pl-6  text-lg   pt-6 "> Functional login </li>
                                <li className="font-semibold pl-6  text-lg   pt-6 "> Functional Register </li>
                                <li className="font-semibold pl-6   text-lg pb-3  pt-6"> FAQ </li>
                                <li className="font-semibold pl-6   text-lg pb-3  pt-6"> Destination </li>
                                <li className="font-semibold pl-6   text-lg pb-3  pt-6"> 404 </li>
                                <li className="font-semibold pl-6   text-lg pb-3  pt-6"> Functional wishlist </li>
                            </ul>

                        </li>

                        <li><Link to="/contact"><a>Contact</a></Link></li>

                    </ul>
                </div>
                <img src={img} alt="Travling" />
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 font-thin">
                    <li  ><Link to="/"><a className="text-lg font-bold ">Home</a></Link></li>
                    <li className="text-lg font-bold "><Link to="/about"><a>About</a></Link></li>


                    <li id="dropdown">

                        <div className="flex w-24">
                            <summary className="text-lg font-bold">
                                Listing
                            </summary>
                            <div>
                                <IoIosArrowDown></IoIosArrowDown>
                            </div>
                        </div>

                        <ul id="submenu">
                            <li className=" font-semibold pl-6   text-lg   pt-6" > Search Popular Map </li>
                            <li className="font-semibold pl-6   text-lg   pt-6">Search Half Map </li>

                        </ul>

                    </li>

                    {/* second */}

                    <li id="dropdown">

                        <div className="flex w-24">
                            <summary className="text-lg font-bold">
                                Hotel
                            </summary>
                            <div>
                                <IoIosArrowDown></IoIosArrowDown>
                            </div>
                        </div>

                        <ul id="submenu">
                            <li className=" font-semibold pl-6   text-lg   pt-6" >  Detail hotel 1 </li>
                            <li className="font-semibold pl-6   text-lg   pt-6"> Detail hotel 1 </li>
                            <li className="font-semibold pl-6  text-lg   pt-6 "> Detail Room 2 </li>
                            <li className="font-semibold pl-6   text-lg pb-3  pt-6"> Detail Room 2 </li>
                        </ul>

                    </li>
                    {/* third */}
                    <li id="dropdown">

                        <div className="flex w-24">
                            <summary className="text-lg font-bold">
                                Pages
                            </summary>
                            <div>
                                <IoIosArrowDown></IoIosArrowDown>
                            </div>
                        </div>

                        <ul id="submenu">
                            <li className=" font-semibold  pl-5  text-lg   pt-6" >  Blog </li>
                            <li className="font-semibold  pl-5  text-lg   pt-6"> Become Local expert </li>
                            <li className="font-semibold  pl-5 text-lg   pt-6 "> Functional login </li>
                            <li className="font-semibold  pl-5 text-lg   pt-6 "> Functional Register </li>
                            <li className="font-semibold  pl-5  text-lg pb-3  pt-6"> FAQ </li>
                            <li className="font-semibold  pl-5  text-lg pb-3  pt-6"> Destination </li>
                            <li className="font-semibold  pl-5  text-lg pb-3  pt-6"> 404 </li>
                            <li className="font-semibold  pl-5  text-lg pb-3  pt-6"> Functional wishlist </li>
                        </ul>
                    </li>


                    <li className="text-lg font-bold "><Link to="/contact"><a>Contact</a></Link></li>
                </ul>
            </div>
            <div className="navbar-end flex md: pr-10">
                <div></div>
                <div className="pr-4">
                    <Link to="/Wishlist"><img className="h-8 w-8" src={img2} alt="" /></Link>
                </div>
                <div>
                    <Link to="/signup"><img className="h-14 w-14" src={img1} alt="" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;