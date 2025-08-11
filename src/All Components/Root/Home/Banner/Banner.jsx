import { IoCalendarNumberOutline, IoLocationOutline } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="pt-8 md:pt-28 relative">
      <div>
        <div
          className="hero  md:h-[370px] lg:h-[640px]"
          style={{
            backgroundImage:
              'url(https://cdn.blastness.info/media/389/colonnaresort-top/thumbs/full/iti_colonnaresort_esterni3_top.jpg)',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="hero-overlay bg-black bg-opacity-20"></div>

          <div className="hero-content text-center text-white">
            <div>
              <h1 className="mb-5 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold font-serif">
                Find your next stay
              </h1>
              <p className="font-semibold text-lg sm:text-xl">
                Get the best prices on 2,000,000+ properties, worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="absolute items-center left-1/2 transform -translate-x-1/2 w-[95%] max-w-[1200px] bg-white grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 px-4 py-5 rounded-xl shadow-lg border md:rounded-full top-[75%] md:top-[80%] lg:top-[85%]">

          {/* Location */}
          <div className="flex items-center space-x-3 border-b md:border-b-0 md:border-r border-gray-300 md:pr-4 pb-3 md:pb-0">
            <IoLocationOutline className="h-6 w-6 text-gray-700" />
            <div className="flex flex-col w-full">
              <label htmlFor="location" className="text-sm font-semibold text-gray-700 mb-1">
                Location
              </label>
              <select
                id="location"
                className="w-full text-gray-800 text-sm rounded-md border border-gray-300 px-2 py-1 focus:outline-indigo-500 focus:ring-1 focus:ring-indigo-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Where are you going?
                </option>
                <optgroup label="Popular destinations" className="font-semibold">
                  <option value="usa">United States</option>
                  <option value="california">California</option>
                  <option value="losangeles">Los Angeles</option>
                  <option value="nevada">Nevada</option>
                  <option value="newjersey">New Jersey</option>
                </optgroup>
              </select>
            </div>
          </div>

          {/* Check-in & Check-out */}
          <div className="flex gap-2   md:border-b-0 md:border-r  pb-3 md:pb-0 md:pr-8">
            {/* Check-in */}
            <div className=" flex items-center space-x-2 w-1/2">
              <BsCalendarDate className="h-6 w-6 text-gray-700" />
              <div className="flex flex-col w-full">
                <label htmlFor="checkin" className="text-sm font-semibold text-gray-700 mb-1">
                  Check in
                </label>
                <input
                  type="date"
                  id="checkin"
                  className="rounded-md border border-gray-300 px-2 py-1 text-sm focus:outline-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Arrow */}


            {/* Check-out */}
            <div className="flex items-center space-x-2 w-1/2 ">
              <IoCalendarNumberOutline className="h-6 w-6 text-gray-700" />
              <div className="flex flex-col w-full">
                <label htmlFor="checkout" className="text-sm font-semibold text-gray-700 mb-1">
                  Check out
                </label>
                <input
                  type="date"
                  id="checkout"
                  className="rounded-md border border-gray-300 px-2 py-1 text-sm focus:outline-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-center border-b md:border-b-0 md:border-r border-gray-300 md:pr-6 pb-3 md:pb-0">
            <div>
              <HiUsers className="h-5 w-5 mt-4 text-gray-700" />
            </div>
            <div className="flex flex-col w-full ml-2">
              <label htmlFor="guests" className="text-sm font-semibold text-gray-700 mb-1">
                Guests
              </label>
              <input
                type="number"
                id="guests"
                min="1"
                defaultValue="1"
                className="rounded-md border border-gray-300 px-2 py-1 text-sm focus:outline-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl py-3 px-6 transition"
            >
              <CiSearch className="h-6 w-6" />
              <span className="text-lg">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
