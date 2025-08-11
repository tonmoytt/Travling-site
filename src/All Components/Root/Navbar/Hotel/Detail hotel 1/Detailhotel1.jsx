import { Link } from "react-router-dom";
import img1 from "./../../../../../assets/images/hotel details 1pic.png"
import img2 from "./../../../../../assets/images/hotel details 1pic222222.png"
import img3 from "./../../../../../assets/images/hotel details 1pic333333.png"
import img4 from "./../../../../../assets/images/hotel details 1pic4444.png"
import img5 from "./../../../../../assets/images/hotel details 1pic444444.png"
import love from "./../../../../../assets/images/bal-removebg-preview.png"

import Footer from "../../../Home/Footer/Footer";

import { RiShareForwardLine } from "react-icons/ri";
import { TbAirConditioning, TbTheater } from "react-icons/tb";
import { RiRestaurantFill } from "react-icons/ri";
import { MdOutlineConnectingAirports, MdSmokingRooms, MdOutlineCellWifi } from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import { BsSignNoParkingFill } from "react-icons/bs";
import { BiSolidWasher } from "react-icons/bi";

const Detailhotel1 = () => {
  return (
    <div>
      <div className="pt-20 md:pt-32 border-t-2 border-b-2 px-4 md:px-10">
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Link to="/">
            <h1 className="font-semibold hover:underline cursor-pointer">Home</h1>
          </Link>
          <Link to="/unitedstate">
            <h1 className="font-semibold hover:underline cursor-pointer">United State</h1>
          </Link>
          <h1 className="text-gray-500">The Studio Allston Hotel</h1>
        </div>
      </div>

      {/* section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-8 pb-5 bg-slate-50 px-4 md:px-10">
        <div>
          <img className="w-full h-[160px] md:h-[810px] rounded-lg object-cover" src={img1} alt="hotel pic 1" />
        </div>

        <div className="grid grid-rows-2 gap-2">
          <img className="rounded-lg w-full h-full object-cover" src={img2} alt="hotel pic 2" />
          <img className="rounded-lg w-full h-full object-cover" src={img3} alt="hotel pic 3" />
        </div>

        <div className="grid grid-rows-2 gap-2">
          <img className="rounded-lg w-full h-full object-cover" src={img4} alt="hotel pic 4" />
          <img className="rounded-lg w-full h-full object-cover" src={img5} alt="hotel pic 5" />
        </div>
      </div>

      {/* section 3 */}
      <div className="px-4 md:px-10 pt-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left content */}
        <div className="col-span-2">

          {/* section 1 */}
          <div className="flex flex-col md:flex-row justify-between border-b-2 pb-10 items-start md:items-center">
            <div>
              <p>star rating</p>
              <h1 className="text-3xl font-bold">Studio Allston Hotel</h1>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <p className="border border-success bg-gray-100 text-center py-1 text-blue-500 font-bold w-16 rounded-lg">5 / 5</p>
                <p className="font-bold font-mono">Excellent</p>
                <p className="text-blue-500">(7 review)</p>
                <p className="text-gray-500">Califonia</p>
              </div>
            </div>
            <div className="flex gap-5 mt-5 md:mt-0">
              <div className="border-2 rounded-full p-2 cursor-pointer hover:bg-gray-100 transition">
                <RiShareForwardLine className="h-6 w-6 text-gray-700" />
              </div>
              <div id="dropdown" className="border-2 rounded-full p-1 cursor-pointer hover:bg-red-300 transition flex items-center space-x-2">
                <p id="submenu2" className="text-sm text-red-500 border-2 rounded px-2">Add to wishlist</p>
                <img id="rounded" className="h-8 w-8" src={love} alt="wishlist icon" />
              </div>
            </div>
          </div>

          {/* section 2 */}
          <div>
            <h1 className="text-3xl font-bold py-10">About this hotel</h1>
            <div className="pb-10 border-b-2 space-y-4">
              <p>Studio Allston Hotel is the ideal point of departure for your excursions in Boston (MA). Conveniently located on the Charles River near Harvard University, the property offers spacious accommodation, contemporary technology and ample facilities for an excellent visit to historic Boston.</p>
              <p>Top features of the property include complimentary parking on-site, full service restaurant serving breakfast, lunch and dinner and free wireless internet access. Enjoy nearby jogging and bicycle paths, while children will like the play area across the street.</p>
              <p>All rooms exude an atmosphere of total peace and harmony that feature thoughtful amenities to ensure an unparalleled sense of comfort for the guests such as air conditioning, heating, satellite/cable channels, ironing facilities and toiletries. Studio Allston Hotel is an ideal place of stay for travelers seeking charm, comfort and convenience in Boston (MA).</p>
            </div>
          </div>

          {/* section 3 */}
          <div className="pb-10 border-b-2">
            <div className="px-6 pb-4">
              <h1 className="text-3xl font-bold py-10">Hotel Facilities</h1>
            </div>

            <div className="flex flex-wrap justify-between gap-y-6">
              {/* section 4.1 */}
              <div className="w-full md:w-1/3">
                <div className="flex items-center px-6 pb-4">
                  <TbAirConditioning className="h-6 w-6 text-gray-500 mr-2" />
                  <h1>Air Conditioning</h1>
                </div>
                <div className="flex items-center px-6 pb-4">
                  <TbTheater className="h-6 w-6 text-gray-500 mr-2" />
                  <h1>Heater</h1>
                </div>
                <div className="flex items-center px-6">
                  <RiRestaurantFill className="h-6 w-6 text-gray-500 mr-2" />
                  <h1>Restaurant</h1>
                </div>
              </div>

              {/* section 4.2 */}
              <div className="w-full md:w-1/3">
                <div className="flex items-center px-6 pb-4">
                  <MdOutlineConnectingAirports className="h-6 w-6 text-gray-500 mr-2" />
                  <h1>Airport Transport</h1>
                </div>
                <div className="flex items-center px-6 pb-4">
                  <MdOutlineCellWifi className="h-6 w-6 text-gray-500 mr-2" />
                  <h1>Internet – Wifi</h1>
                </div>
                <div className="flex items-center px-6">
                  <MdSmokingRooms className="h-6 w-6 text-gray-500 mr-2" />
                  <h1>Smoking Room</h1>
                </div>
              </div>

              {/* section 4.3 */}
              <div className="w-full md:w-1/3">
                <div className="flex items-center px-6 pb-4">
                  <IoIosFitness className="h-6 w-6 text-gray-500 mr-2" />
                  <h1>Fitness Center</h1>
                </div>
                <div className="flex items-center px-6 pb-4">
                  <BsSignNoParkingFill className="h-6 w-6 text-gray-500 mr-2" />
                  <h1>Parking</h1>
                </div>
                <div className="flex items-center px-6">
                  <BiSolidWasher className="h-7 w-7 text-gray-500 mr-2" />
                  <h1>Washer & Dryer</h1>
                </div>
              </div>
            </div>
          </div>

          {/* section 4 */}
          <div className="pl-6 mt-6 pb-6 border-b-2">
            <h1 className="text-3xl font-bold pb-10">Rules</h1>

            <div className="flex flex-wrap md:flex-nowrap w-full md:w-1/2 pb-6 justify-between gap-4 md:gap-0">
              <div>Check in</div>
              <div>12.00pm</div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap w-full md:w-1/2 justify-between gap-4 md:gap-0">
              <div>Check out</div>
              <div>12.00pm</div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="mx-0 md:mx-4">
          <div className="border-2 rounded-2xl py-6 px-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 p-4">
              <button className="btn text-white bg-blue-500 px-10 sm:px-14 hover:bg-green-500 rounded-3xl w-full sm:w-auto transition">
                Book
              </button>
              <button className="btn hover:bg-red-500 px-10 sm:px-14 rounded-3xl w-full sm:w-auto transition">
                Inquiry
              </button>
            </div>

            <div className="flex justify-between pt-4 py-6 px-4 text-sm sm:text-base">
              <div>
                <span className="text-gray-600">From :</span>{" "}
                <span className="font-bold text-lg">$160</span>{" "}
                <span className="text-gray-600">/night</span>
              </div>
              <div>(7 review)</div>
            </div>

            <div className="mx-4 p-3 mt-4 border-2 rounded-3xl border-x-sky-500">
              <div className="flex flex-col sm:flex-row justify-between pb-4 border-b-2 gap-4 sm:gap-0">
                <div>
                  <h1 className="text-lg mb-2 font-semibold">Check in</h1>
                  <input type="date" className="rounded-md border border-gray-300 px-2 py-1 text-sm focus:outline-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>
                <div className="border-r-2 hidden sm:block"></div>
                <div>
                  <h1 className="text-lg mb-2 font-semibold">Check out</h1>
                  <input type="date" className="rounded-md border border-gray-300 px-2 py-1 text-sm focus:outline-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>
              </div>
              <div>
                <h1 className="text-lg font-semibold mb-2">Guest room</h1>
                <input type="datetime-local" className="rounded-md border border-gray-300 px-2 py-1 text-sm w-full" />
              </div>
            </div>

            <div className="px-4 mt-6">
              <button className="btn rounded-3xl hover:bg-rose-500 bg-blue-500 w-full font-semibold text-white transition">
                Check Availability
              </button>
            </div>
          </div>

          <div className="border-2 rounded-2xl py-6 px-6 mt-8">
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

export default Detailhotel1;
