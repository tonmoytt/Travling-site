import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Home/Footer/Footer';
import img1 from "./../../../../assets/images/room3.png"
import img2 from "./../../../../assets/images/room2.png"
import img3 from "./../../../../assets/images/room5.png"
import img4 from "./../../../../assets/images/room4.png"
import img5 from "./../../../../assets/images/room.png"
import postimg1 from "./../../../../assets/images/roomdelux.png"
import postimg2 from "./../../../../assets/images/delaxroom.png"

import love from "./../../../../assets/images/bal-removebg-preview.png"

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

const Room1 = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="pt-20 md:pt-32 border-t-2 border-b-2 mt-2 px-4 sm:px-6 md:px-10">
        <div className="flex flex-wrap gap-x-6">
          <Link to="/"> <h1 className="font-semibold hover:underline cursor-pointer">Home</h1></Link>
          <Link to="/unitedstate"> <h1 className="font-semibold hover:underline cursor-pointer">United State</h1></Link>
          <Link to="/Hotel WBF Hommachi"> <h1 className="font-semibold hover:underline cursor-pointer">Hotel WBF Hommachi</h1></Link>
          <h1 className="text-gray-500">Room Sheraton Hotel</h1>
        </div>
      </div>

      {/* Images Section */}
      <div className="grid md:grid-cols-3 gap-2 pt-8 pb-5 w-full bg-slate-50 px-4 md:px-10">
        <div className="overflow-hidden rounded-lg">
          <img className="w-full h-[180px] md:h-full object-cover" src={img1} alt="" />
        </div>

        <div className="flex flex-col gap-2">
          <img className="rounded-lg w-full h-[85px] md:h-auto object-cover" src={img2} alt="" />
          <img className="rounded-lg w-full h-[85px] md:h-auto object-cover" src={img3} alt="" />
        </div>

        <div className="flex flex-col gap-2">
          <img className="rounded-lg w-full h-[85px] md:h-auto object-cover" src={img4} alt="" />
          <img className="rounded-lg w-full h-[85px] md:h-auto object-cover" src={img5} alt="" />
        </div>
      </div>

      {/* Main Content and Sidebar */}
      <div className="px-4 md:px-10 pt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Main content */}
        <div className="col-span-1 md:col-span-2">

          {/* Hotel header */}
          <div className="flex flex-col md:flex-row justify-between border-b-2 pb-10 items-start md:items-center">
            {/* Left side */}
            <div className="flex-1 min-w-[250px]">
              <div className='pb-10 md:pb-20'>
                <h1 className="text-3xl font-bold">Room Sheraton Hotel</h1>
                <div className='flex gap-2 items-center mt-4'>
                  <CiLocationOn className='h-6 w-6' />
                  <div className='text-gray-500'>Los Angeles</div>
                </div>
              </div>

              {/* icons */}
              <div className='flex flex-wrap gap-6 md:gap-10'>
                {/* icon 1 */}
                <div className='flex gap-3 items-center'>
                  <div className='p-3 border-2 rounded-xl'>
                    <BsCodeSquare className='h-7 w-7' />
                  </div>
                  <p className='text-gray-500'>S:200cm</p>
                </div>
                {/* icon 2 */}
                <div className='flex gap-3 items-center'>
                  <div className='p-3 border-2 rounded-xl'>
                    <IoIosBed className='h-6 w-6' />
                  </div>
                  <p className='text-gray-500'>Beds: 3</p>
                </div>
                {/* icon 3 */}
                <div className='flex gap-3 items-center'>
                  <div className='p-3 border-2 rounded-xl'>
                    <FaChildren className='h-6 w-6' />
                  </div>
                  <p className='text-gray-500'>Children: 3</p>
                </div>
                {/* icon 4 */}
                <div className='flex gap-3 items-center'>
                  <div className='p-3 border-2 rounded-xl'>
                    <GiHumanTarget className='h-6 w-6' />
                  </div>
                  <p className='text-gray-500'>Adults: 3</p>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="flex gap-5 mt-6 md:mt-0 md:mr-6">
              <div className="border-2 rounded-full p-4 cursor-pointer hover:bg-gray-100 transition">
                <RiShareForwardLine className="h-6 w-6" />
              </div>
              <div id="dropdown" className="border-2 rounded-full p-3 flex items-center gap-2 cursor-pointer hover:bg-red-100 transition">
                <p id="submenu2" className="text-sm text-red-500 border-2 px-2 rounded">Add to wishlist</p>
                <img id="rounded" className="h-8 w-8 hover:bg-red-300 hover:rounded-full transition" src={love} alt="wishlist" />
              </div>
            </div>
          </div>

          {/* About hotel */}
          <div>
            <h1 className="text-3xl font-bold py-10">About this hotel</h1>
            <div className="pb-10 border-b-2 space-y-4 max-w-prose">
              <p>Studio Allston Hotel is the ideal point of departure for your excursions in Boston (MA)...</p>
              <p>Top features of the property include complimentary parking on-site...</p>
              <p>All rooms exude an atmosphere of total peace and harmony that feature thoughtful amenities...</p>
            </div>
          </div>

          {/* Facilities */}
          <div className="pb-10 border-b-2">
            <div className="px-6 pb-4">
              <h1 className="text-3xl font-bold py-10">Hotel Facilities</h1>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-6">
              {/* section 4.1 */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center px-6">
                  <TbAirConditioning className="h-6 w-6 text-gray-500 mr-2" />
                  <h1>Air Conditioning</h1>
                </div>
                <div className="flex items-center px-6">
                  <TbTheater className="h-6 w-6 text-gray-500 mr-2" />
                  <h1>Heater</h1>
                </div>
                <div className="flex items-center px-6">
                  <RiRestaurantFill className="h-6 w-6 text-gray-500 mr-2" />
                  <h1>Restaurant</h1>
                </div>
              </div>

              {/* section 4.2 */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center px-6">
                  <MdOutlineConnectingAirports className="h-6 w-6 text-gray-500 mr-2" />
                  <h1>Airport Transport</h1>
                </div>
                <div className="flex items-center px-6">
                  <MdOutlineCellWifi className="h-6 w-6 text-gray-500 mr-2" />
                  <h1>Internet – Wifi</h1>
                </div>
                <div className="flex items-center px-6">
                  <MdSmokingRooms className="h-6 w-6 text-gray-500 mr-2" />
                  <h1>Smoking Room</h1>
                </div>
              </div>

              {/* section 4.3 */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center px-6">
                  <IoIosFitness className="h-6 w-6 text-gray-500 mr-2" />
                  <h1>Fitness Center</h1>
                </div>
                <div className="flex items-center px-6">
                  <BsSignNoParkingFill className="h-6 w-6 text-gray-500 mr-2" />
                  <h1>Parking</h1>
                </div>
                <div className="flex items-center px-6">
                  <BiSolidWasher className="h-5 w-5 text-gray-500 mr-2" />
                  <h1>Washer & Dryer</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Rules */}
          <div className="pl-6 mt-6 pb-6 border-b-2 max-w-md">
            <h1 className="text-3xl font-bold pb-10">Rules</h1>
            <div className="flex justify-between pb-6">
              <div>Check in</div>
              <div>12.00pm</div>
            </div>
            <div className="flex justify-between">
              <div>Check out</div>
              <div>12.00pm</div>
            </div>
          </div>

          {/* Explore other options */}
          <h1 className='text-4xl font-bold my-20'>Explore other options</h1>
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center md:justify-start">
            {/* card 1 */}
            <div className="card card-compact w-full sm:w-[48%] md:w-[30%] bg-base-100 shadow-xl">
              <figure>
                <img className="w-full h-auto object-cover rounded-t-lg" src={postimg1} alt="Room Delux" />
              </figure>
              <div className="card-body">
                <Link>
                  <h2 className="card-title">Room Delux</h2>
                </Link>
                <div className="flex flex-wrap gap-4 mt-6">
                  {/* icons */}
                  <div className="flex gap-3 items-center">
                    <div className="p-3 border-2 rounded-xl">
                      <BsCodeSquare className="h-5 w-5" />
                    </div>
                    <p className="text-gray-500 pt-2">S:200cm</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="p-3 border-2 rounded-xl">
                      <IoIosBed className="h-5 w-5" />
                    </div>
                    <p className="text-gray-500 pt-2">Beds: 3</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="p-3 border-2 rounded-xl">
                      <FaChildren className="h-5 w-5" />
                    </div>
                    <p className="text-gray-500 pt-2">Child: 3</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="p-3 border-2 rounded-xl">
                      <GiHumanTarget className="h-5 w-5" />
                    </div>
                    <p className="text-gray-500 pt-2">Adults: 3</p>
                  </div>
                </div>

                <div className="card-actions mt-8">
                  <button className="btn btn-primary rounded-3xl px-8 w-full">Room Details</button>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div className="card card-compact w-full sm:w-[48%] md:w-[30%] bg-base-100 shadow-xl">
              <figure>
                <img className="w-full h-auto object-cover rounded-t-lg" src={postimg2} alt="Deluxe Room" />
              </figure>
              <div className="card-body">
                <Link to="/room2">
                  <h2 className="card-title">Deluxe Room</h2>
                </Link>
                <div className="flex flex-wrap gap-4 mt-6">
                  {/* icons */}
                  <div className="flex gap-3 items-center">
                    <div className="p-3 border-2 rounded-xl">
                      <BsCodeSquare className="h-5 w-5" />
                    </div>
                    <p className="text-gray-500 pt-2">S:150cm</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="p-3 border-2 rounded-xl">
                      <IoIosBed className="h-5 w-5" />
                    </div>
                    <p className="text-gray-500 pt-2">Beds: 3</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="p-3 border-2 rounded-xl">
                      <FaChildren className="h-5 w-5" />
                    </div>
                    <p className="text-gray-500 pt-2">Child: 9</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="p-3 border-2 rounded-xl">
                      <GiHumanTarget className="h-5 w-5" />
                    </div>
                    <p className="text-gray-500 pt-2">Adults: 7</p>
                  </div>
                </div>

                <div className="card-actions mt-8">
                  <Link to="/room2">
                    <button className="btn btn-primary rounded-3xl px-8 w-full">Room Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Sidebar */}
        <div className="mx-4 mt-10 md:mt-0">
          <div className="border-2 rounded-2xl py-6 px-6 max-w-md mx-auto md:mx-0">
            <div className='text-center'>
              <span className="text-gray-600">From :</span>
              <span className="font-bold text-lg">$160</span>
              <span className="text-gray-600">/night</span>
            </div>

            <div className="mx-0 p-3 mt-4 border-2 rounded-3xl border-x-sky-500">
              <div className="flex flex-col sm:flex-row justify-between pb-4 border-b-2 gap-4 sm:gap-0">
                <div className="flex-1">
                  <h1 className="text-lg mb-2 font-semibold">Check in</h1>
                  <input type="date" name="" id="" className="w-full sm:w-auto rounded-md border border-gray-300 p-2" />
                </div>
                <div className="border-r-0 sm:border-r-2 hidden sm:block"></div>
                <div className="flex-1">
                  <h1 className="text-lg mb-2 font-semibold">Check out</h1>
                  <input type="date" name="" id="" className="w-full sm:w-auto rounded-md border border-gray-300 p-2" />
                </div>
              </div>
              <div className="mt-4">
                <h1 className="text-lg font-semibold mb-2">Guest room</h1>
                <input type="datetime-local" name="" id="" className="w-full rounded-md border border-gray-300 p-2" />
              </div>
            </div>

            <div className="px-4 mt-10">
              <button className="btn rounded-3xl hover:bg-rose-500 bg-blue-500 w-full font-semibold text-white">Reserve</button>
            </div>
          </div>

          <div className="border-2 rounded-2xl py-6 px-6 mt-8 max-w-md mx-auto md:mx-0">
            <h1 className="text-3xl font-bold py-8">Information Contact</h1>
            <p className="text-lg font-semibold pb-4">Email</p>
            <p className="pb-4">artonmoyh@gmail.com</p>
            <p className="text-lg font-semibold pb-4">Website</p>
            <p className="pb-4">travlewrp.com</p>
            <p className="text-lg font-semibold pb-4">Phone</p>
            <p className="pb-4">+6580009999</p>
            <p className="text-lg font-semibold pb-4">Fax</p>
            <p>+123456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room1;
