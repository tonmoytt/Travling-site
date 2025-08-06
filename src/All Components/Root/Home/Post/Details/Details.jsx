// src/pages/Details.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RiRestaurantFill, RiShareForwardLine } from "react-icons/ri";
import { TbAirConditioning, TbTheater } from "react-icons/tb";
import {
  MdOutlineConnectingAirports,
  MdSmokingRooms,
  MdOutlineCellWifi,
} from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import { BsSignNoParkingFill } from "react-icons/bs";
import { BiSolidWasher } from "react-icons/bi";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import love from "../../../../../assets/images/bal-removebg-preview.png";

const Details = () => {
  const { state } = useLocation();
  const hotel = state?.hotel;

  if (!hotel) {
    return (
      <p className="text-center text-red-600 mt-12 text-lg font-semibold">
        No hotel data provided.
      </p>
    );
  }

  // ⭐ Star rendering
  const renderStars = (ratingValue) => {
    const fullStars = Math.floor(ratingValue);
    const hasHalfStar = ratingValue % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} className="text-yellow-400 text-base" />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="text-yellow-400 text-base" />
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar key={`empty-${i}`} className="text-yellow-400 text-base" />
      );
    }

    return stars;
  };

  return (
    <div className="max-w-8xl mx-auto px-4 lg:px-16 py-10">
      {/* Breadcrumb */}
      <nav
        aria-label="breadcrumb"
        className="text-gray-600 text-sm mb-8 select-none"
      >
        <ol className="flex gap-x-3 items-center">
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 font-semibold transition-colors"
            >
              Home
            </Link>
          </li>
          <li>›</li>
          <li>
            <Link
              to={`/${hotel.countrySlug || "unitedstate"}`}
              className="hover:text-blue-600 font-semibold transition-colors"
            >
              {hotel.countryName || "United State"}
            </Link>
          </li>
          <li>›</li>
          <li className="text-gray-500 truncate max-w-xs">{hotel.title}</li>
        </ol>
      </nav>

      {/* Images Section */}
      <div className="grid md:grid-cols-3 gap-4 bg-gray-50 rounded-xl shadow-md p-4">
        <div className="rounded-lg overflow-hidden">
          <img
            className="h-full w-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            src={hotel.images?.[0]}
            alt={`${hotel.title} 0`}
          />
        </div>

        <div className="flex flex-col gap-4">
          <img
            className="h-60 w-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            src={hotel.images?.[1]}
            alt={`${hotel.title} 1`}
          />
          <img
            className="h-60 w-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            src={hotel.images?.[2]}
            alt={`${hotel.title} 2`}
          />
        </div>

        <div className="flex flex-col gap-4">
          <img
            className="h-60 w-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            src={hotel.images?.[3]}
            alt={`${hotel.title} 3`}
          />
          <img
            className="h-60 w-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            src={hotel.images?.[4]}
            alt={`${hotel.title} 4`}
          />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mt-12 max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="col-span-2">
          {/* Title & Rating */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-8 mb-10">
            <div>
              <div className="flex items-center space-x-1 mb-2">
                {renderStars(hotel.rating)}
              </div>
              <h1 className="text-4xl font-extrabold tracking-wide text-gray-900">
                {hotel.title}
              </h1>

              <div className="flex flex-wrap items-center space-x-4 mt-4 text-gray-700">
                <p className="bg-blue-100 text-blue-700 font-semibold rounded-lg px-4 py-1">
                  {hotel.rating} / 5
                </p>
                <p className="font-semibold">Excellent</p>
                <p className="text-blue-600 font-medium">
                  ({hotel.reviewCount} review{hotel.reviewCount > 1 ? "s" : ""})
                </p>
                <p className="ml-6 text-gray-500 italic">{hotel.location}</p>
              </div>
            </div>

            <div className="flex space-x-5">
              <button
                title="Share"
                className="p-3 rounded-full border border-gray-300 hover:bg-blue-100 transition"
              >
                <RiShareForwardLine className="h-6 w-6 text-gray-600" />
              </button>
              <button
                title="Add to wishlist"
                className="p-2 rounded-full border border-gray-300 hover:bg-red-100 transition"
              >
                <img
                  className="h-8 w-8 object-contain"
                  src={love}
                  alt="wishlist"
                />
              </button>
            </div>
          </div>

          {/* About Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              About this hotel
            </h2>
            <div className="space-y-4 border-b border-gray-300 pb-10 text-gray-700 leading-relaxed">
              <p>{hotel.about1}</p>
              <p>{hotel.about2}</p>
              <p>{hotel.about3}</p>
            </div>

            <div className="mt-8 text-gray-700 leading-relaxed space-y-4">
              {hotel.description?.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          {/* Facilities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Hotel Facilities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
              {/* Column 1 */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <TbAirConditioning className="text-sky-500 text-2xl" />
                  <span>Air Conditioning</span>
                </div>
                <div className="flex items-center gap-3">
                  <TbTheater className="text-sky-500 text-2xl" />
                  <span>Heater</span>
                </div>
                <div className="flex items-center gap-3">
                  <RiRestaurantFill className="text-sky-500 text-2xl" />
                  <span>Restaurant</span>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <MdOutlineConnectingAirports className="text-sky-500 text-2xl" />
                  <span>Airport Transport</span>
                </div>
                <div className="flex items-center gap-3">
                  <MdOutlineCellWifi className="text-sky-500 text-2xl" />
                  <span>Internet – Wifi</span>
                </div>
                <div className="flex items-center gap-3">
                  <MdSmokingRooms className="text-sky-500 text-2xl" />
                  <span>Smoking Room</span>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <IoIosFitness className="text-sky-500 text-2xl" />
                  <span>Fitness Center</span>
                </div>
                <div className="flex items-center gap-3">
                  <BsSignNoParkingFill className="text-sky-500 text-2xl" />
                  <span>Parking</span>
                </div>
                <div className="flex items-center gap-3">
                  <BiSolidWasher className="text-sky-500 text-3xl" />
                  <span>Washer & Dryer</span>
                </div>
              </div>
            </div>
          </section>

          {/* Rules */}
          <section className="border-t border-gray-300 pt-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Rules</h2>
            <div className="max-w-xs space-y-4 text-gray-700 font-semibold">
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span>Check in</span>
                <span>{hotel.checkIn || "12:00 PM"}</span>
              </div>
              <div className="flex justify-between">
                <span>Check out</span>
                <span>{hotel.checkOut || "12:00 PM"}</span>
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <aside className="space-y-8">
          {/* Booking Box */}
          <div className="border rounded-3xl shadow-lg p-6 bg-white sticky top-24">
            <div className="flex justify-between mb-6">
              <button className="btn bg-blue-600 text-white px-14 py-3 rounded-3xl hover:bg-green-600 transition font-semibold shadow-md">
                Book
              </button>
              <button className="btn border border-gray-300 px-14 py-3 rounded-3xl hover:bg-red-500 hover:text-white transition font-semibold shadow-sm">
                Inquiry
              </button>
            </div>

            <div className="flex justify-between text-gray-700 font-medium text-lg mb-6">
              <div>
                <span className="text-gray-500 mr-1">From :</span>
                <span className="font-bold">${hotel.price}</span>
                <span className="text-gray-500">/night</span>
              </div>
              <div className="italic text-gray-600">
                ({hotel.reviewCount} review{hotel.reviewCount > 1 ? "s" : ""})
              </div>
            </div>

            <div className="border border-sky-500 rounded-2xl p-5">
              <div className="flex justify-between border-b border-sky-500 pb-5">
                <div className="w-1/2 pr-3">
                  <label
                    htmlFor="checkin"
                    className="block font-semibold mb-2 text-gray-700"
                  >
                    Check in
                  </label>
                  <input
                    type="date"
                    id="checkin"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>
                <div className="w-1/2 pl-3 border-l border-sky-500">
                  <label
                    htmlFor="checkout"
                    className="block font-semibold mb-2 text-gray-700"
                  >
                    Check out
                  </label>
                  <input
                    type="date"
                    id="checkout"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="guests"
                  className="block font-semibold mb-2 text-gray-700"
                >
                  Guest & Room
                </label>
                <input
                  type="number"
                  id="guests"
                  min="1"
                  defaultValue={1}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
            </div>

            <button className="mt-6 w-full bg-blue-600 hover:bg-rose-500 text-white font-semibold py-3 rounded-3xl shadow-lg transition">
              Check Availability
            </button>
          </div>

          {/* Contact Info */}
          <div className="border rounded-3xl shadow-lg p-8 bg-white">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Information Contact
            </h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <p className="font-semibold mb-1">Email</p>
                <p>{hotel.contact?.email || "artonmoyh@gmail.com"}</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Website</p>
                <p>{hotel.contact?.website || "travlewrp.com"}</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Phone</p>
                <p>{hotel.contact?.phone || "+6580009999"}</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Fax</p>
                <p>{hotel.contact?.fax || "+123456789"}</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Details;
