import { LuPhoneCall, } from "react-icons/lu";
import { MdFacebook, MdMarkEmailUnread } from "react-icons/md";
import { FaInstagram, FaTwitterSquare, FaYoutube } from "react-icons/fa";

const Header = () => {
    return (
        <div className="hidden md:block mt-10 mx-20 rounded-lg">
            <div className="  bg-gray-900 items-center text-sm text-gray-400 flex  justify-between ">



                <div className="bg-gray-900 text-gray-400 py-2 md:px-10 ">
                    <div className="flex  ">
                        <div className="flex gap-2 items-center">
                            <div className="mt-1">
                                <LuPhoneCall></LuPhoneCall>
                            </div>
                            <div>
                                <p>(000) 999-739-957</p>
                            </div>
                        </div>

                        <div className="border-r-2 bg-gray-700 md:mx-4 h-4 mt-1">

                        </div>
                        {/* second */}

                        <div className="flex gap-2 items-center">
                            <div>
                                <MdMarkEmailUnread className="mt-1"></MdMarkEmailUnread>
                            </div>
                            <div>
                                <p>travelerwp@gmail.com</p>
                            </div>
                        </div>

                    </div>

                    <div>

                    </div>
                </div>
                <div className="flex md:pr-10">
                    <div className="flex">
                        <div className="flex">
                            <a className="py-4 " href="https://www.facebook.com">
                                <MdFacebook></MdFacebook>
                            </a>
                            <div className="border-r-2 bg-gray-700 md:mx-4 h-4 mt-4">

                            </div>
                        </div>




                    </div>
                    <div className="flex">
                        <div className="flex">
                            <a className="py-4 " href="https://twitter.com">
                                <FaTwitterSquare></FaTwitterSquare>
                            </a>
                            <div className="border-r-2 bg-gray-700 md:mx-4 h-4 mt-4">

                            </div>
                        </div>




                    </div>
                    <div className="flex">
                        <div className="flex">
                            <a className="py-4 " href="https://www.instagram.com/">
                                <FaInstagram></FaInstagram>
                            </a>
                            <div className="border-r-2 bg-gray-700 md:mx-4 h-4 mt-4">

                            </div>
                        </div>




                    </div>
                    <a className="pt-4 " href="https://www.youtube.com/">
                        <FaYoutube></FaYoutube>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;