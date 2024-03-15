import { IoCalendarNumberOutline, IoLocationOutline } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
const Banner = () => {


  return (
    <div className="">
      <div>
        <div className="hero md:h-[370px] lg:h-[400px] " style={{ backgroundImage: 'url(https://cdn.blastness.info/media/389/colonnaresort-top/thumbs/full/iti_colonnaresort_esterni3_top.jpg)' }}>
          <div className="hero-overlay bg-opacity-20"></div>



          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-4xl md:text-6xl lg:text-7xl font-extrabold  text-white font-serif">Find your next stay</h1>
              <p className="font-semibold text-white text-lg">Get the best prices on 2,000,000+ properties, worldwide</p>
            </div>
          </div>
        </div>

        <div className="absolute -mt-5 md:-mt-28 lg:-mt-12 bg-white grid lg:grid-cols-4 justify-between mx-5 px-4 py-2 border md:rounded-xl lg:rounded-full ">
          {/* section 1 */}
          <div className="flex items-center md:border-b-2 lg:border-0   md:mt-4 lg:mt-0 w-[245px] md:w-[700px]">

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

            <div className="hidden md:hidden lg:block border-r-2 bg-gray-700  lg:ml-28 mb-2 h-9 mt-4">

            </div>
          </div>
          {/* section 2 */}
          <div className="grid md:flex md:border-b-2 lg:border-0 mt-4 md:mt-6 lg:mt-0 gap-2 ">
            <div className="flex items-center ">

              <div>

                <BsCalendarDate className="h-6 w-6"></BsCalendarDate>
              </div>

              <div>
                <h1 className="font-semibold text-base ml-3 pb-1">Check in</h1>


                <input className="ml-2 border rounded-xl px-2 " type="date" name="" id="" />
              </div>
              <FaArrowRightLong className="mx-auto text-gray-400"></FaArrowRightLong>
            </div>
            {/* section 2.1 */}
            <div className="flex items-center lg:ml-2">

              <div>



                <IoCalendarNumberOutline className="h-6 w-6"></IoCalendarNumberOutline>
              </div>

              <div>
                <h1 className="font-semibold text-base md:ml-2 lg:ml-3 pb-1">Check out</h1>


                <input className="lg:ml-2 border rounded-xl lg:px-2 " type="date" name="" id="" />
              </div>

            </div>
          </div>
          {/* section 4 */}
          <div className="flex items-center md:border-b-2 lg:border-0 mt-4 md:mt-6 lg:mt-0 lg:ml-24 ">

            <div>


              <HiUsers className="h-6 w-6"></HiUsers>
            </div>

            <div>
              <h1 className="font-semibold text-base md:ml-1 lg:ml-3 pb-1">Guests</h1>


              <input className="md:ml-1 lg:ml-2 border rounded-xl md:px-1 lg:px-2 " type="date" name="" id="" />
            </div>
            <div className=" hidden md:hidden lg:block  bg-gray-700 border-r-2 md:mx-2 lg:mx-10 mb-2 h-9 mt-4">

            </div>
          </div>
          {/* section 5 */}

          <button className=" mt-4 md:mt-6 lg:mt-0 bg-blue-500 flex  items-center justify-center text-center px-4 py-4 rounded-xl md:rounded-xl lg:rounded-full">

            <div className=" ">
              <CiSearch></CiSearch>
            </div>

            <button className=" text-white ml-4 text-center text-lg ">Search</button>


          </button>



        </div>
      </div >


    </div>
  );
};

export default Banner;