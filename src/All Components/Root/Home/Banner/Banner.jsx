import { IoCalendarNumberOutline, IoLocationOutline } from "react-icons/io5";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
const Banner = () => {


  return (
    <div>
      <div className="hero   h-[400px] relative" style={{ backgroundImage: 'url(https://cdn.blastness.info/media/389/colonnaresort-top/thumbs/full/iti_colonnaresort_esterni3_top.jpg)' }}>
        <div className="hero-overlay bg-opacity-20"></div>



        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-6xl font-extrabold  text-white font-serif">Find your next stay</h1>
            <p className="font-semibold text-white text-lg">Get the best prices on 2,000,000+ properties, worldwide</p>
          </div>
        </div>
      </div>

      <div className="absolute mt-2 grid md:grid-cols-5 justify-between mx-4 px-3 py-2 border rounded-full ">
        {/* section 1 */}
        <div className="flex items-center   ">

          <div>
            <IoLocationOutline className="h-6 w-6"></IoLocationOutline>
          </div>

          <div>
            <h1 className="font-semibold text-base ml-3 pb-1">Location</h1>

            <select className="ml-1">
              <option className="  text-sm text-gray-800  mt-10" disabled selected>Where are you going?</option>


              <option className="text-xl font-semibold border-b-4 mt-10 mb-10">Popular destinations</option>
              <option>United states</option>
              <option>
                <div className="flex">
                  <div>
                    <IoLocationOutline className="text-xl"></IoLocationOutline>
                  </div>
                  <div>California</div>
                </div>
              </option>
              <option>Los Angeles</option>
              <option>Nevada</option>
              <option>New Jersey</option>


            </select>
          </div>

          <div className="border-r-2 bg-gray-700 md:mx-10 mb-2 h-9 mt-4">

          </div>
        </div>
        {/* section 2 */}
        <div className="flex items-center pl-6">

          <div>

            <BsCalendarDate className="h-6 w-6"></BsCalendarDate>
          </div>

          <div>
            <h1 className="font-semibold text-base ml-3 pb-1">Check in</h1>


            <input className="ml-2 border rounded-xl px-2 " type="date" name="" id="" />
          </div>
          <FaArrowRightLong className="mx-auto text-gray-400"></FaArrowRightLong>
        </div>
        {/* section 3 */}
        <div className="flex items-center ml-2">

          <div>

           
       
            <IoCalendarNumberOutline  className="h-6 w-6"></IoCalendarNumberOutline>
          </div>

          <div>
            <h1 className="font-semibold text-base ml-3 pb-1">Check out</h1>


            <input className="ml-2 border rounded-xl px-2 " type="date" name="" id="" />
          </div>

        </div>
        {/* section 4 */}
        <div className="flex items-center ">

          <div>


            <HiUsers className="h-6 w-6"></HiUsers>
          </div>

          <div>
            <h1 className="font-semibold text-base ml-3 pb-1">Guests</h1>


            <input className="ml-2 border rounded-xl px-2 " type="date" name="" id="" />
          </div>
          <div className="border-r-2 bg-gray-700 md:mx-10 mb-2 h-9">

          </div>
        </div>
        {/* section 5 */}
        <div className="bg-blue-500 flex  items-center px-4 py- rounded-full">
          <div>
            <CiSearch></CiSearch>
          </div>
          <div className="text-white text-lg ml-2 ">Search</div>
        </div>


      </div>
    </div>
  );
};

export default Banner;