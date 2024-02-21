import { Link } from "react-router-dom";
import Footer from "../../../../Home/Footer/Footer";


import img1 from "./../../../../../../assets/images/hotel details 2pic 111.png"
import img2 from "./../../../../../../assets/images/hotel details 2pic 2222.png"
import img3 from "./../../../../../../assets/images/hotel details 2pic 3333.png"
import img4 from "./../../../../../../assets/images/hotel details 2pic 44444.png"
import img5 from "./../../../../../../assets/images/hotel details 2pic 55555.png"
import love from "./../../../../../../assets/images/bal-removebg-preview.png"
 
 



import { RiShareForwardLine } from "react-icons/ri";
import { TbAirConditioning } from "react-icons/tb";
import { TbTheater } from "react-icons/tb";
import { RiRestaurantFill } from "react-icons/ri";
import { MdOutlineConnectingAirports, MdSmokingRooms } from "react-icons/md";
import { MdOutlineCellWifi } from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import { BsSignNoParkingFill } from "react-icons/bs";
import { BiSolidWasher } from "react-icons/bi";


const DetailsHotel2 = () => {
    return (
        <div>
            <div className="py-5 border-t-2 border-b-2 mt-2 ">
                <div className="flex gap-x-10 pl-6 ">
                    <Link to="/"> <h1 className=" font-semibold">Home</h1></Link>
                    <Link to="/unitedstate"> <h1 className=" font-semibold">United State</h1></Link>
                    <h1 className=" text-gray-500">Edwardian Kenilworth</h1>
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
                            <div>
                                <p>star rating</p>
                                <h1 className="text-3xl font-bold">Studio Allston Hotel</h1>
                            </div>


                            <div >
                                <div className="flex items-center mt-4" >
                                    <p className="border border-success bg-gray-100 text-center py-1 text-blue-500 font-bold w-16 rounded-lg">5 / 5</p>
                                    <p className="font-bold ml-3 font-mono">Excellent</p>
                                    <p className="ml-2  text-blue-500">( 7 review )</p>
                                    <p className="pl-4 text-gray-500">Virginia</p>

                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 mr-6">
                            <div className="border-2 rounded-full p-2">
                                <RiShareForwardLine className="h-6 w-6  "></RiShareForwardLine>
                            </div>
                            <div id="dropdown" className="border-2 rounded-full p-1">
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

                                        <BiSolidWasher className="h-7 w-7 text-gray-500 mr-2"></BiSolidWasher>

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
                </div>
                {/* flex part 2 */}
                <div className="mx-4 ">
                    <div className="border-2 rounded-2xl py-6">
                        <div className="flex justify-between p-4   ">
                            <button className="btn text-white bg-blue-500 px-14 hover:bg-green-500 rounded-3xl">Book</button>
                            <button className="btn hover:bg-red-500 px-14 rounded-3xl">Inquiry</button>
                        </div>
                        <div className="flex justify-between pt-4 py-6 px-4">
                            <div>
                                <span className="text-gray-600 ">From :</span>
                                <span className="font-bold text-lg">$160</span>
                                <span className="text-gray-600 ">/night</span></div>
                            <div>(7review)</div>
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
                        <div className="px-4 mt-6">
                            <button className="btn rounded-3xl hover:bg-rose-500 bg-blue-500 w-full font-semibold text-white">Check Availablity</button>
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

export default DetailsHotel2;