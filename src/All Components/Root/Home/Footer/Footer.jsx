import img from "./../../../../assets/images/visa.svg"
import { MdFacebook, } from "react-icons/md";
import { FaInstagram, FaTwitterSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gray-100 mt-20 px-6">
            <div className="py-20 grid md:grid-cols-4">

                <div>
                    <h1 className="text-xl font-bold pb-4">Support</h1>
                    <p className="text-gray-500 pb-1">Help Center</p>
                    <p className="text-gray-500 pb-1">Our COVID-19 Response</p>
                    <p className="text-gray-500 pb-1">Cancellation options</p>
                    <p className="text-gray-500">Safety information</p>
                </div>

                <div>
                    <h1 className="text-xl font-bold pb-4">Company</h1>
                    <p className="text-gray-500 pb-1">About us</p>
                    <p className="text-gray-500 pb-1">Community Blog</p>
                    <p className="text-gray-500 pb-1">Careers</p>
                    <p className="text-gray-500">Privacy policy</p>
                    <p className="text-gray-500">Terms of service</p>
                </div>

                <div>
                    <h1 className="text-xl font-bold pb-4">Contact</h1>
                    <p className="text-gray-500 pb-1">Partnerships</p>
                    <p className="text-gray-500 pb-1">FAQ</p>
                    <p className="text-gray-500 pb-1">Get in touch</p>

                </div>
                <div>
                    <p className="text-xl font-bold pb-4">Social</p>
                    <div className="flex gap-4 md:pr-10">
                        <div className="flex">
                            <div className="flex">
                                <a className="py-4 " href="https://www.facebook.com">
                                    <MdFacebook className="h-10 w-10"></MdFacebook>
                                </a>
                                 
                            </div>




                        </div>
                        <div className="flex">
                            <div className="flex">
                                <a className="py-4 " href="https://twitter.com">
                                    <FaTwitterSquare className="h-9 w-9"></FaTwitterSquare>
                                </a>
                               
                            </div>




                        </div>
                        <div className="flex">
                            <div className="flex">
                                <a className="py-4 " href="https://www.instagram.com/">
                                    <FaInstagram className="h-9 w-9"></FaInstagram>
                                </a>
                                
                            </div>




                        </div>
                        <a className="py-4 " href="https://www.youtube.com/">
                            <FaYoutube className="h-10 w-10"></FaYoutube>
                        </a>
                    </div>
                </div>


            </div>

            <div className="border-t-4 flex justify-between items-center">
                <div className="">
                    <p className="text-gray-500 pt-5 pb-5" >© Copyright Traveler 2022</p>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;