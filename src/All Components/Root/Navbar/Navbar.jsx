import { Link } from "react-router-dom";
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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/"><a>Home</a></Link></li>
                        <li><Link to="/about"><a>About</a></Link></li>

                        <li>
                            <a>Listing</a>
                            <ul className="p-2">
                                <li className="px-3 text-lg  pb-6 pt-2" >  search Popular Map </li>
                                <li className="px-3 text-lg"> Search Half Map </li>
                            </ul>
                        </li>
                        {/* section */}
                        <li>
                            <a>Hotel</a>
                            <ul className="p-2">
                                <li className="px-3 text-lg  pb-6 pt-2" > Detials hotel 1 </li>
                                <li className="px-3 text-lg"> Detials hotel 1 </li>
                                <li className="px-3 text-lg"> Detials Room 1 </li>
                                <li className="px-3 text-lg"> Detials Room 1 </li>
                            </ul>
                        </li>


                        <li><Link to="/contact"><a>Contact</a></Link></li>

                    </ul>
                </div>
                <img src={img} alt="Travling" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-thin">
                    <li  ><Link to="/"><a className="text-lg font-bold ">Home</a></Link></li>
                    <li className="text-lg font-bold "><Link to="/about"><a>About</a></Link></li>

                    <li>
                        <details>
                            <summary className="text-lg font-bold ">Listing</summary>
                            <ul className="p-2">
                                <li className="px-3 text-lg pb-6">  Search Popular Map </li>
                                <li className="px-3 text-lg"> Search Half Map </li>
                            </ul>
                        </details>
                    </li>
                    {/* section 2 */}
                    <li>
                        <details>
                            <summary className="text-lg font-bold ">Hotel</summary>
                            <ul className="p-2">
                                <li className="px-3 text-lg  pb-6 pt-2" > Detials hotel 1 </li>
                                <li className="px-3 text-lg pb-6 "> Detials hotel 1 </li>
                                <li className="px-3 text-lg pb-6 "> Detials Room 1 </li>
                                <li className="px-3 text-lg"> Detials Room 1 </li>
                            </ul>
                        </details>
                    </li>

                    <li className="text-lg font-bold "><Link to="/contact"><a>Contact</a></Link></li>
                </ul>
            </div>
            <div className="navbar-end flex md: pr-10">
                <div></div>
                <div className="pr-4">
                  <Link to="/wishlist"><img className="h-8 w-8" src={img2} alt="" /></Link>  
                </div>
                <div>
               <Link to="/signup"><img className="h-14 w-14" src={img1} alt="" /></Link> 
                </div>
            </div>
        </div>
    );
};

export default Navbar;