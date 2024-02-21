import { Link } from "react-router-dom";
import Footer from "../../../Home/Footer/Footer";

import img1 from "./../../../../../assets/images/Delaxroom1.png"
import img2 from "./../../../../../assets/images/Delaxroom2.png"
import img3 from "./../../../../../assets/images/Delaxroom3.png"
import img4 from "./../../../../../assets/images/Delaxroom4.png"
import img5 from "./../../../../../assets/images/Delaxroom5.png"

import postimg1 from "./../../../../../assets/images/roomdelux.png"
import postimg2 from "./../../../../../assets/images/Sheratonroom.png"
import love from "./../../../../../assets/images/bal-removebg-preview.png"


import { RiShareForwardLine } from "react-icons/ri";
import { TbAirConditioning } from "react-icons/tb";
import { TbTheater } from "react-icons/tb";
import { RiRestaurantFill } from "react-icons/ri";
import { MdOutlineConnectingAirports, MdSmokingRooms } from "react-icons/md";
import { MdOutlineCellWifi } from "react-icons/md";
import { IoIosBed, IoIosFitness } from "react-icons/io";
import { BsCodeSquare, BsSignNoParkingFill } from "react-icons/bs";
import { BiSolidWasher } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { GiHumanTarget } from "react-icons/gi";
import { FaChildren } from "react-icons/fa6";


const Room2 = () => {
    return (
        <div>
            <div className="py-5 border-t-2 border-b-2 mt-2 ">
                <div className="flex gap-x-10 pl-6 ">
                    <Link to="/"> <h1 className=" font-semibold">Home</h1></Link>
                    <Link to="/unitedstate"> <h1 className=" font-semibold">United State</h1></Link>
                    <Link to="/Hotel WBF Hommachi"> <h1 className=" font-semibold">Hotel WBF Hommachi</h1></Link>
                    <h1 className=" text-gray-500">Deluxe Room</h1>
                </div>
            </div>
            {/* section 2 */}
            <div className="grid md:grid-cols-3 gap-2  pt-8 pb-5 bg-slate-50 px-4">
                <div>
                    <img className="h-full rounded-lg" src={img1} alt="" />
                </div>

                <div className="gap-2">
                    <img className="mb-2 rounded-lg" src={img2} alt="" />
                    <img className="rounded-lg" src={img3} alt="" />
                </div>

                <div >
                    <img className="mb-2 rounded-lg" src={img4} alt="" />
                    <img className="rounded-lg" src={img5} alt="" />
                </div>
            </div>
            {/* section 3 */}
            <div className="px-5 pt-10 grid md:grid-cols-3">

                <div className="col-span-2">
                    {/* section 1 */}
                    <div className="flex justify-between border-b-2 pb-10  items-center">


                        <div>
                            <div className='pb-20'  >

                                <h1 className="text-3xl font-bold">Room Sheraton Hotel</h1>
                                <div className='flex gap-2 items-center mt-4'>
                                    <CiLocationOn className='h-6 w-6'></CiLocationOn>
                                    <div className='text-gray-500 '>
                                        Los Angeles
                                    </div>
                                </div>
                            </div>
                            {/* icon */}
                            <div className='flex gap-10'>
                                {/* icon 1 */}
                                <div className='flex gap-3 items-center'>
                                    <div className='p-3  border-2 rounded-xl'>
                                        <BsCodeSquare className='h-7 w-7 '></BsCodeSquare>
                                    </div>
                                    <div>
                                        <p className='text-gray-500 '>S:200cm</p>
                                    </div>
                                </div>
                                {/* icon 2 */}
                                <div className='flex gap-3 items-center'>
                                    <div className='p-3  border-2 rounded-xl'>

                                        <IoIosBed className='h-6 w-6 '></IoIosBed>
                                    </div>
                                    <div>
                                        <p className='text-gray-500 '>Beds: 3</p>
                                    </div>
                                </div>
                                {/* icon 3*/}
                                <div className='flex gap-3 items-center'>
                                    <div className='p-3  border-2 rounded-xl'>
                                        <FaChildren className='h-6 w-6'></FaChildren>
                                    </div>
                                    <div>
                                        <p className='text-gray-500 '>Children: 3</p>
                                    </div>
                                </div>
                                {/* icon 4 */}
                                <div className='flex gap-3 items-center'>
                                    <div className='p-3  border-2 rounded-xl'>

                                        <GiHumanTarget className='h-6 w-6 '></GiHumanTarget>
                                    </div>
                                    <div>
                                        <p className='text-gray-500 '>Adults: 3</p>
                                    </div>
                                </div>
                            </div>



                        </div>
                        {/* add with list */}
                        <div className="flex gap-5 mr-6">
                            <div className="border-2 rounded-full p-4">
                                <RiShareForwardLine className="h-6 w-6  "></RiShareForwardLine>
                            </div>
                            <div id="dropdown" className="border-2 rounded-full p-3">
                                <p id="submenu2" className="text-sm text-red-500 border-2">Add to wishlist</p>

                                <img id="rounded" className="h-8 w-8  hover:bg-red-300 hover:rounded-full" src={love} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* section 2 */}
                    <div>
                        <h1 className="text-3xl font-bold py-10 ">About this hotel</h1>
                        <div className=" pb-10 border-b-2">
                            <p className="pb-4 mr-4">Studio Allston Hotel is the ideal point of departure for your excursions in Boston (MA). Conveniently located on the Charles River near Harvard University, the property offers spacious accommodation, contemporary technology and ample facilities for an excellent visit to historic Boston.</p>

                            <p className="pb-4 mr-4">Top features of the property include complimentary parking on-site, full service restaurant serving breakfast, lunch and dinner and free wireless internet access. Enjoy nearby jogging and bicycle paths, while children will like the play area across the street.</p>

                            <p className="mr-4">All rooms exude an atmosphere of total peace and harmony that feature thoughtful amenities to ensure an unparalleled sense of comfort for the guests such as air conditioning, heating, satellite/cable channels, ironing facilities and toiletries. Studio Allston Hotel is an ideal place of stay for travelers seeking charm, comfort and convenience in Boston (MA).</p>
                        </div>
                    </div>

                    {/* section 3 */}
                    <div className="pb-10 border-b-2">

                        <div className="px-6 pb-4">
                            <h1 className="text-3xl font-bold py-10 ">Hotel Facilities</h1>
                        </div>

                        <div className="flex justify-between">
                            {/* section 4.1 */}
                            <div className=" ">
                                {/* section 4.1 */}
                                <div className="flex items-center px-6 pb-4">
                                    <div>
                                        <TbAirConditioning className="h-6 w-6 text-gray-500 mr-2"></TbAirConditioning>
                                    </div>
                                    <div>
                                        <h1>Air Conditioning</h1>
                                    </div>
                                </div>
                                {/* section 4.1  */}
                                <div className="flex items-center px-6 pb-4">
                                    <div>
                                        <TbTheater className="h-6 w-6 text-gray-500 mr-2"></TbTheater>
                                    </div>
                                    <div>
                                        <h1>Heater</h1>
                                    </div>
                                </div>
                                {/* section 4.1  */}
                                <div className="flex items-center px-6">
                                    <div>
                                        <RiRestaurantFill className="h-6 w-6 text-gray-500 mr-2"></RiRestaurantFill>
                                    </div>
                                    <div>
                                        <h1>Restaurant</h1>
                                    </div>
                                </div>

                            </div>

                            {/* section 4.2 */}
                            <div className=" ">
                                {/* section 4.2 */}
                                <div className="flex items-center px-6 pb-4">
                                    <div>

                                        <MdOutlineConnectingAirports className="h-6 w-6 text-gray-500 mr-2"></MdOutlineConnectingAirports>
                                    </div>
                                    <div>
                                        <h1>Airport Transport</h1>
                                    </div>
                                </div>


                                {/* section 4.2  */}
                                <div className="flex items-center px-6 pb-4">
                                    <div>

                                        <MdOutlineCellWifi className="h-6 w-6 text-gray-500 mr-2"></MdOutlineCellWifi>
                                    </div>
                                    <div>
                                        <h1>Internet – Wifi</h1>
                                    </div>
                                </div>
                                {/* section 4.2  */}
                                <div className="flex items-center px-6">
                                    <div>

                                        <MdSmokingRooms className="h-6 w-6 text-gray-500 mr-2"></MdSmokingRooms>
                                    </div>
                                    <div>
                                        <h1>Smoking Room</h1>
                                    </div>
                                </div>

                            </div>

                            {/* section 4.3 */}
                            <div className=" ">
                                {/* section 4.3 */}
                                <div className="flex items-center px-6 pb-4">
                                    <div>

                                        <IoIosFitness className="h-6 w-6 text-gray-500 mr-2"></IoIosFitness>
                                    </div>
                                    <div>
                                        <h1>Fitness Center</h1>
                                    </div>
                                </div>
                                {/* section 4.3 */}
                                <div className="flex items-center px-6 pb-4">
                                    <div>

                                        <BsSignNoParkingFill className="h-6 w-6 text-gray-500 mr-2"></BsSignNoParkingFill>
                                    </div>
                                    <div>
                                        <h1>Parking</h1>
                                    </div>
                                </div>
                                {/* section 4.3  */}
                                <div className="flex items-center px-6">
                                    <div>

                                        <BiSolidWasher className="h-5 w-5 text-gray-500 mr-2"></BiSolidWasher>

                                    </div>
                                    <div>
                                        <h1>Washer & Dryer</h1>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* section 4 */}
                    <div className="pl-6 mt-6 pb-6 border-b-2">
                        <h1 className="text-3xl font-bold pb-10">Rules</h1>

                        <div className="flex w-1/2 pb-6 justify-between">
                            <div>Check in</div>
                            <div>12.00pm</div>
                        </div>
                        <div className="flex w-1/2 justify-between">
                            <div>Check out</div>
                            <div>12.00pm</div>
                        </div>
                    </div>

                    {/* section 6 */}
                    <h1 className='text-4xl font-bold my-20'>Explore other options</h1>
                    <div className='flex  gap-6'>
                        {/* card 1 */}
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={postimg1} alt="Shoes" /></figure>
                            <div className="card-body">
                                <Link to="/">
                                    <h2 className="card-title">Room Delux</h2>
                                </Link>
                                <div className='flex gap-12 mt-6'>
                                    {/* icon 1 */}
                                    <div className='  gap-3 items-center'>
                                        <div className='p-3  border-2 rounded-xl'>
                                            <BsCodeSquare className='h-5 w-5 '></BsCodeSquare>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 pt-2 '>S:200cm</p>
                                        </div>
                                    </div>
                                    {/* icon 2 */}
                                    <div className=' gap-3 items-center'>
                                        <div className='p-3  border-2 rounded-xl'>

                                            <IoIosBed className='h-5 w-5'></IoIosBed>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 pt-2 '>Beds: 3</p>
                                        </div>
                                    </div>
                                    {/* icon 3*/}
                                    <div className='  gap-3 items-center'>
                                        <div className='p-3  border-2 rounded-xl'>
                                            <FaChildren className='h-5 w-5'></FaChildren>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 pt-2 '>Child: 3</p>
                                        </div>
                                    </div>
                                    {/* icon 4 */}
                                    <div className=' gap-3 items-center'>
                                        <div className='p-3  border-2 rounded-xl'>

                                            <GiHumanTarget className='h-5 w-5 '></GiHumanTarget>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 pt-2 '>Adults: 3</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-actions  mt-8">
                                    <Link >
                                        <button className="btn btn-primary rounded-3xl px-8">Room Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={postimg2} alt="Shoes" /></figure>
                            <div className="card-body">
                                <Link to="/room1">
                                    <h2 className="card-title">Room Sharoton Hotel</h2>
                                </Link>
                                <div className='flex gap-12 mt-6'>
                                    {/* icon 1 */}
                                    <div className='  gap-3 items-center'>
                                        <div className='p-3  border-2 rounded-xl'>
                                            <BsCodeSquare className='h-5 w-5 '></BsCodeSquare>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 pt-2 '>S:150cm</p>
                                        </div>
                                    </div>
                                    {/* icon 2 */}
                                    <div className=' gap-3 items-center'>
                                        <div className='p-3  border-2 rounded-xl'>

                                            <IoIosBed className='h-5 w-5'></IoIosBed>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 pt-2 '>Beds: 3</p>
                                        </div>
                                    </div>
                                    {/* icon 3*/}
                                    <div className='  gap-3 items-center'>
                                        <div className='p-3  border-2 rounded-xl'>
                                            <FaChildren className='h-5 w-5'></FaChildren>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 pt-2 '>Child: 3</p>
                                        </div>
                                    </div>
                                    {/* icon 4 */}
                                    <div className=' gap-3 items-center'>
                                        <div className='p-3  border-2 rounded-xl'>

                                            <GiHumanTarget className='h-5 w-5 '></GiHumanTarget>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 pt-2 '>Adults: 3</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-actions  mt-8">
                                    <Link to="/room1">
                                        <button className="btn btn-primary rounded-3xl px-8">Room Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                {/* flex part 2 */}
                <div className="mx-4 ">
                    <div className="border-2 rounded-2xl py-6">


                        <div className='text-center'>
                            <span className="text-gray-600 ">From :</span>
                            <span className="font-bold text-lg">$160</span>
                            <span className="text-gray-600 ">/night</span>
                        </div>


                        <div className="mx-4 p-3 mt-4  border-2 rounded-3xl border-x-sky-500  ">
                            <div className="flex justify-between pb-4 border-b-2">

                                <div>
                                    <h1 className="text-lg mb-2 font-semibold">Check in</h1>
                                    <input type="date" name="" id="" />
                                </div>
                                <div className="border-r-2 ">

                                </div>
                                <div>
                                    <h1 className="text-lg mb-2 font-semibold">Check out</h1>
                                    <input type="date" name="" id="" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-lg font-semibold mb-2">Guest room</h1>
                                <input type="datetime-local" name="" id="" />
                            </div>
                        </div>
                        <div className="px-4 mt-10">
                            <button className="btn rounded-3xl hover:bg-rose-500 bg-blue-500 w-full font-semibold text-white">Reserve</button>
                        </div>
                    </div>
                    <div className="border-2 rounded-2xl py-6 px-10 mt-8">
                        <h1 className="text-3xl font-bold py-8">Information Contact</h1>
                        <p className="text-lg font-semibold pb-4 ">Email</p>
                        <p className="pb-4">artonmoyh@gmail.com</p>
                        <p className="text-lg font-semibold pb-4 ">Website</p>
                        <p className="pb-4">travlewrp.com</p>
                        <p className="text-lg font-semibold pb-4 ">Phone</p>
                        <p className="pb-4">+6580009999</p>
                        <p className="text-lg font-semibold pb-4 ">Fax</p>
                        <p>+123456789</p>
                    </div>
                </div>
            </div>


            {/* Footer section */}
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Room2;