import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import logo from "./../../../../assets/images/man.jpg"
import loveIcon from "./../../../../assets/images/bal-removebg-preview.png"

import image from "./../../../../assets/images/feature-11-600x400 111.png"
import image1 from "./../../../../assets/images/feature-21-600x400 222.png"
import image2 from "./../../../../assets/images/feature-1-2-600x400 333.png"
import image3 from "./../../../../assets/images/feature-20-600x400  444.png"
import image4 from "./../../../../assets/images/feature-19-600x400 5555.png"
import image5 from "./../../../../assets/images/Bar-on-property-2-1-600x400 666.png"
import image6 from "./../../../../assets/images/download 777.jpg"
import image7 from "./../../../../assets/images/download 8888.jpg"
import image8 from "./../../../../assets/images/download 999.jpg"
import image9 from "./../../../../assets/images/download 1000.jpg"
import { Link } from 'react-router-dom';


const RecomendedBenner = () => {

    return (
        <div className='my-16'>
            <h1 className='text-4xl font-semibold ml-4 pb-6 md:pb-10'>Recommended for you</h1>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='mb-10'>
                    <div className=" w-full bg-base-100 gap-4 grid md:grid-cols-2">

                        <div className='card card-compact shadow-xl'>
                            {/* image */}
                            <div className='overflow-hidden'>
                                <img className="rounded-t-xl hover:scale-110 transition duration-300 relative" src={image} alt="" />
                            </div>
                            <div>
                                <img className="rounded-full h-8 w-8 absolute mx-[250px] md:mx-[320px] lg:mx-[520px] -mt-4 " src={logo} alt="" />
                            </div>
                            <div id='dropdown'>
                                <p id="submenu4" className="text-sm text-red-500 border-2">Add to wishlist</p>
                                <Link  >
                                    <img className="rounded-full  absolute h-12 w-12 mx-[260px] md:mx-[320px] lg:mx-[540px] -mt-[200px] md:-mt-[240px] lg:-mt-[380px] hover:bg-red-300 hover:rounded-full" src={loveIcon} alt="" />
                                </Link>
                            </div>

                            {/* rating */}

                            <div className="mt-4 ml-5">
                                <p>rating star</p>
                            </div>
                            {/* name location */}

                            <div className="ml-5">
                                <p className="text-lg font-bold mt-2">Agoda</p>
                                <p className="text-gray-600 mt-2">New York, NY</p>

                            </div>
                            {/* others */}
                            <div className="border-t-2 mt-6 ml-5">
                                <div className="flex items-center mt-6" >
                                    <p className="  border border-success bg-gray-100 px-2 py-1 text-blue-500 font-bold w-16 rounded-lg">5 / 5</p>
                                    <p className="font-bold ml-3 font-mono">Excellent</p>
                                    <p className="ml-2">(5 review)</p>

                                </div>
                            </div>
                            <p className="mt-2 ml-5 pb-5"> <span className="text-gray-600 text-sm">From : </span> <span className="text-lg font-bold">$200</span><span className="text-base text-gray-500">/night</span></p>

                        </div>


                        {/* second */}
                        <div className='card card-compact shadow-xl'>
                            {/* image */}
                            <div className='overflow-hidden'>
                                <img className="rounded-t-xl hover:scale-110 transition duration-300 relative" src={image1} alt="" />
                            </div>
                            <div>
                                <img className="rounded-full h-8 w-8 absolute mx-[250px] md:mx-[320px] lg:mx-[520px] -mt-4 " src={logo} alt="" />
                            </div>

                            <div id='dropdown'>
                                <p id="submenu4" className="text-sm text-red-500 border-2">Add to wishlist</p>
                                <Link  >
                                    <img className="rounded-full  absolute h-12 w-12 mx-[260px] md:mx-[320px] lg:mx-[540px] -mt-[200px] md:-mt-[240px] lg:-mt-[380px] hover:bg-red-300 hover:rounded-full" src={loveIcon} alt="" />
                                </Link>
                            </div>

                            {/* rating */}

                            <div className="mt-4 ml-5">
                                <p>rating star</p>
                            </div>
                            {/* name location */}

                            <div className="ml-5">
                                <p className="text-lg font-bold mt-2">OneFineStay</p>
                                <p className="text-gray-600 mt-2">Los Angeles, CA</p>

                            </div>
                            {/* others */}
                            <div className="border-t-2 mt-6 ml-5">
                                <div className="flex items-center mt-6" >
                                    <p className="  border border-success bg-gray-100 px-2 py-1 text-blue-500 font-bold w-16 rounded-lg">4.9/ 5</p>
                                    <p className="font-bold ml-3 font-mono">Excellent</p>
                                    <p className="ml-2">(5 review)</p>

                                </div>
                            </div>
                            <p className="mt-2 ml-5 pb-5"> <span className="text-gray-600 text-sm">From : </span> <span className="text-lg font-bold">$180</span><span className="text-base text-gray-500">/night</span></p>

                        </div>
                    </div>
                </SwiperSlide>

                {/* second */}
                <SwiperSlide className='mb-10'>
                    <div className=" w-full bg-base-100 gap-4 grid md:grid-cols-2">

                        <div className='card card-compact shadow-xl'>
                            {/* image */}
                            <div className='overflow-hidden'>
                                <img className="rounded-t-xl hover:scale-110 transition duration-300 relative" src={image2} alt="" />
                            </div>
                            <div>
                                <img className="rounded-full h-8 w-8 absolute mx-[250px] md:mx-[320px] lg:mx-[520px] -mt-4 " src={logo} alt="" />
                            </div>
                            <div id='dropdown'>
                                <p id="submenu4" className="text-sm text-red-500 border-2">Add to wishlist</p>
                                <Link  >
                                    <img className="rounded-full  absolute h-12 w-12 mx-[260px] md:mx-[320px] lg:mx-[540px] -mt-[200px] md:-mt-[240px] lg:-mt-[380px]  hover:bg-red-300 hover:rounded-full" src={loveIcon} alt="" />
                                </Link>
                            </div>
                            {/* rating */}

                            <div className="mt-4 ml-5">
                                <p>rating star</p>
                            </div>
                            {/* name location */}

                            <div className="ml-5">
                                <p className="text-lg font-bold mt-2">OneFineStay</p>
                                <p className="text-gray-600 mt-2">Los Angeles, CA</p>

                            </div>
                            {/* others */}
                            <div className="border-t-2 mt-6 ml-5">
                                <div className="flex items-center mt-6" >
                                    <p className="  border border-success bg-gray-100 px-2 py-1 text-blue-500 font-bold w-16 rounded-lg">4.9/ 5</p>
                                    <p className="font-bold ml-3 font-mono">Excellent</p>
                                    <p className="ml-2">(5 review)</p>

                                </div>
                            </div>
                            <p className="mt-2 ml-5 pb-5"> <span className="text-gray-600 text-sm">From : </span> <span className="text-lg font-bold">$180</span><span className="text-base text-gray-500">/night</span></p>

                        </div>


                        {/* second */}
                        <div className='card card-compact shadow-xl'>
                            {/* image */}
                            <div className='overflow-hidden'>
                                <img className="rounded-t-xl hover:scale-110 transition duration-300 relative" src={image3} alt="" />
                            </div>
                            <div>
                                <img className="rounded-full h-8 w-8 absolute mx-[250px] md:mx-[320px] lg:mx-[520px] -mt-4 " src={logo} alt="" />
                            </div>

                            <div id='dropdown'>
                                <p id="submenu4" className="text-sm text-red-500 border-2">Add to wishlist</p>
                                <Link  >
                                    <img className="rounded-full  absolute h-12 w-12 mx-[260px] md:mx-[320px] lg:mx-[540px] -mt-[200px] md:-mt-[240px] lg:-mt-[380px] hover:bg-red-300 hover:rounded-full" src={loveIcon} alt="" />
                                </Link>
                            </div>
                            {/* rating */}

                            <div className="mt-4 ml-5">
                                <p>rating star</p>
                            </div>
                            {/* name location */}

                            <div className="ml-5">
                                <p className="text-lg font-bold mt-2">Hotel Expedia</p>
                                <p className="text-gray-600 mt-2">Chicago, IL</p>

                            </div>
                            {/* others */}
                            <div className="border-t-2 mt-6 ml-5">
                                <div className="flex items-center mt-6" >
                                    <p className="  border border-success bg-gray-100 px-2 py-1 text-blue-500 font-bold w-16 rounded-lg">5/ 5</p>
                                    <p className="font-bold ml-3 font-mono">Excellent</p>
                                    <p className="ml-2">(4 review)</p>

                                </div>
                            </div>
                            <p className="mt-2 ml-5 pb-5"> <span className="text-gray-600 text-sm">From : </span> <span className="text-lg font-bold">$220</span><span className="text-base text-gray-500">/night</span></p>

                        </div>
                    </div>
                </SwiperSlide>

                {/* third */}
                <SwiperSlide className='mb-10'>
                    <div className=" w-full bg-base-100 gap-4 grid md:grid-cols-2">

                        <div className='card card-compact shadow-xl'>
                            {/* image */}
                            <div className='overflow-hidden'>
                                <img className="rounded-t-xl hover:scale-110 transition duration-300 relative" src={image4} alt="" />
                            </div>
                            <div>
                                <img className="rounded-full h-8 w-8 absolute mx-[250px] md:mx-[320px] lg:mx-[520px] -mt-4 " src={logo} alt="" />
                            </div>

                            <div id='dropdown'>
                                <p id="submenu4" className="text-sm text-red-500 border-2">Add to wishlist</p>
                                <Link  >
                                    <img className="rounded-full  absolute h-12 w-12 mx-[260px] md:mx-[320px] lg:mx-[540px] -mt-[200px] md:-mt-[240px] lg:-mt-[380px]  hover:bg-red-300 hover:rounded-full" src={loveIcon} alt="" />
                                </Link>
                            </div>

                            {/* rating */}

                            <div className="mt-4 ml-5">
                                <p>rating star</p>
                            </div>
                            {/* name location */}

                            <div className="ml-5">
                                <p className="text-lg font-bold mt-2">Hotel Expedia</p>
                                <p className="text-gray-600 mt-2">Chicago, IL</p>

                            </div>
                            {/* others */}
                            <div className="border-t-2 mt-6 ml-5">
                                <div className="flex items-center mt-6" >
                                    <p className="  border border-success bg-gray-100 px-2 py-1 text-blue-500 font-bold w-16 rounded-lg">5/ 5</p>
                                    <p className="font-bold ml-3 font-mono">Excellent</p>
                                    <p className="ml-2">(4 review)</p>

                                </div>
                            </div>
                            <p className="mt-2 ml-5 pb-5"> <span className="text-gray-600 text-sm">From : </span> <span className="text-lg font-bold">$220</span><span className="text-base text-gray-500">/night</span></p>

                        </div>


                        {/* second */}
                        <div className='card card-compact shadow-xl'>
                            {/* image */}
                            <div className='overflow-hidden'>
                                <img className="rounded-t-xl hover:scale-110 transition duration-300 relative" src={image5} alt="" />
                            </div>
                            <div>
                                <img className="rounded-full h-8 w-8 absolute mx-[250px] md:mx-[320px] lg:mx-[520px] -mt-4 " src={logo} alt="" />
                            </div>

                            <div id='dropdown'>
                                <p id="submenu4" className="text-sm text-red-500 border-2">Add to wishlist</p>
                                <Link  >
                                    <img className="rounded-full  absolute h-12 w-12 mx-[260px] md:mx-[320px] lg:mx-[540px] -mt-[200px] md:-mt-[240px] lg:-mt-[380px] hover:bg-red-300 hover:rounded-full" src={loveIcon} alt="" />
                                </Link>
                            </div>
                            {/* rating */}

                            <div className="mt-4 ml-5">
                                <p>rating star</p>
                            </div>
                            {/* name location */}

                            <div className="ml-5">
                                <p className="text-lg font-bold mt-2">Priceline</p>
                                <p className="text-gray-600 mt-2">Miami, FL</p>

                            </div>
                            {/* others */}
                            <div className="border-t-2 mt-6 ml-5">
                                <div className="flex items-center mt-6" >
                                    <p className="  border border-success bg-gray-100 px-2 py-1 text-blue-500 font-bold w-16 rounded-lg">4.7/ 5</p>
                                    <p className="font-bold ml-3 font-mono">Excellent</p>
                                    <p className="ml-2">(7 review)</p>

                                </div>
                            </div>
                            <p className="mt-2 ml-5 pb-5"> <span className="text-gray-600 text-sm">From : </span> <span className="text-lg font-bold">$250</span><span className="text-base text-gray-500">/night</span></p>

                        </div>
                    </div>
                </SwiperSlide>
                {/* four */}

                <SwiperSlide className='mb-10'>
                    <div className=" w-full bg-base-100 gap-4 grid md:grid-cols-2">

                        <div className='card card-compact shadow-xl'>
                            {/* image */}
                            <div className='overflow-hidden'>
                                <img className="rounded-t-xl w-full hover:scale-110 transition duration-300 relative" src={image6} alt="" />
                            </div>
                            <div>
                                <img className="rounded-full h-8 w-8 absolute mx-[250px] md:mx-[320px] lg:mx-[520px] -mt-4 " src={logo} alt="" />
                            </div>

                            <div id='dropdown'>
                                <p id="submenu5" className="text-sm text-red-500 border-2">Add to wishlist</p>
                                <Link  >
                                    <img className="rounded-full  absolute h-12 w-12 mx-[260px] md:mx-[320px] lg:mx-[540px] -mt-[170px] md:-mt-[210px] lg:-mt-[380px]  hover:bg-red-300 hover:rounded-full" src={loveIcon} alt="" />
                                </Link>
                            </div>
                            {/* rating */}

                            <div className="mt-4 ml-5">
                                <p>rating star</p>
                            </div>
                            {/* name location */}

                            <div className="ml-5">
                                <p className="text-lg font-bold mt-2">Agoda</p>
                                <p className="text-gray-600 mt-2">New York, NY</p>

                            </div>
                            {/* others */}
                            <div className="border-t-2 mt-6 ml-5">
                                <div className="flex items-center mt-6" >
                                    <p className="  border border-success bg-gray-100 px-2 py-1 text-blue-500 font-bold w-16 rounded-lg">5 / 5</p>
                                    <p className="font-bold ml-3 font-mono">Excellent</p>
                                    <p className="ml-2">(5 review)</p>

                                </div>
                            </div>
                            <p className="mt-2 ml-5 pb-5"> <span className="text-gray-600 text-sm">From : </span> <span className="text-lg font-bold">$200</span><span className="text-base text-gray-500">/night</span></p>

                        </div>


                        {/* second */}
                        <div className='card card-compact shadow-xl'>
                            {/* image */}
                            <div className='overflow-hidden'>
                                <img className="rounded-t-xl w-full h-[215px] hover:scale-110 transition duration-300 relative" src={image7} alt="" />
                            </div>
                            <div>
                                <img className="rounded-full h-8 w-8 absolute mx-[250px] md:mx-[320px] lg:mx-[520px] -mt-4 " src={logo} alt="" />
                            </div>

                            <div id='dropdown'>
                                <p id="submenu5" className="text-sm text-red-500 border-2">Add to wishlist</p>
                                <Link  >
                                    <img className="rounded-full  absolute h-12 w-12 mx-[260px] md:mx-[320px] lg:mx-[540px] -mt-[200px] md:-mt-[210px] lg:-mt-[380px] hover:bg-red-300 hover:rounded-full" src={loveIcon} alt="" />
                                </Link>
                            </div>
                            {/* rating */}

                            <div className="mt-4 ml-5">
                                <p>rating star</p>
                            </div>
                            {/* name location */}

                            <div className="ml-5">
                                <p className="text-lg font-bold mt-2">OneFineStay</p>
                                <p className="text-gray-600 mt-2">Los Angeles, CA</p>

                            </div>
                            {/* others */}
                            <div className="border-t-2 mt-6 ml-5">
                                <div className="flex items-center mt-6" >
                                    <p className="  border border-success bg-gray-100 px-2 py-1 text-blue-500 font-bold w-16 rounded-lg">4.9/ 5</p>
                                    <p className="font-bold ml-3 font-mono">Excellent</p>
                                    <p className="ml-2">(5 review)</p>

                                </div>
                            </div>
                            <p className="mt-2 ml-5 pb-5"> <span className="text-gray-600 text-sm">From : </span> <span className="text-lg font-bold">$180</span><span className="text-base text-gray-500">/night</span></p>

                        </div>
                    </div>
                </SwiperSlide>

                {/* five */}

                <SwiperSlide className='mb-10'>
                    <div className=" w-full bg-base-100 gap-4 grid md:grid-cols-2">

                        <div className='card card-compact shadow-xl'>
                            {/* image */}
                            <div className='overflow-hidden'>
                                <img className="rounded-t-xl w-full hover:scale-110 transition duration-300 relative" src={image8} alt="" />
                            </div>
                            <div>
                                <img className="rounded-full h-8 w-8 absolute mx-[250px] md:mx-[320px] lg:mx-[520px] -mt-4 " src={logo} alt="" />
                            </div>

                            <div id='dropdown'>
                                <p id="submenu6" className="text-sm text-red-500 border-2">Add to wishlist</p>
                                <Link  >
                                    <img className="rounded-full  absolute h-12 w-12 mx-[260px] md:mx-[320px] lg:mx-[540px] -mt-[200px] md:-mt-[240px] lg:-mt-[380px]  hover:bg-red-300 hover:rounded-full" src={loveIcon} alt="" />
                                </Link>
                            </div>
                            {/* rating */}

                            <div className="mt-4 ml-5">
                                <p>rating star</p>
                            </div>
                            {/* name location */}

                            <div className="ml-5">
                                <p className="text-lg font-bold mt-2">OneFineStay</p>
                                <p className="text-gray-600 mt-2">Los Angeles, CA</p>

                            </div>
                            {/* others */}
                            <div className="border-t-2 mt-6 ml-5">
                                <div className="flex items-center mt-6" >
                                    <p className="  border border-success bg-gray-100 px-2 py-1 text-blue-500 font-bold w-16 rounded-lg">4.9/ 5</p>
                                    <p className="font-bold ml-3 font-mono">Excellent</p>
                                    <p className="ml-2">(5 review)</p>

                                </div>
                            </div>
                            <p className="mt-2 ml-5 pb-5"> <span className="text-gray-600 text-sm">From : </span> <span className="text-lg font-bold">$180</span><span className="text-base text-gray-500">/night</span></p>

                        </div>


                        {/* second */}
                        <div className='card card-compact shadow-xl'>
                            {/* image */}
                            <div className='overflow-hidden'>
                                <img className="rounded-t-xl w-full hover:scale-110 transition duration-300 relative" src={image9} alt="" />
                            </div>
                            <div>
                                <img className="rounded-full h-8 w-8 absolute mx-[250px] md:mx-[320px] lg:mx-[520px] -mt-4 " src={logo} alt="" />
                            </div>
                             

                            <div id='dropdown'>
                                <p id="submenu6" className="text-sm text-red-500 border-2">Add to wishlist</p>
                                <Link  >
                                    <img className="rounded-full  absolute h-12 w-12 mx-[260px] md:mx-[320px] lg:mx-[540px] -mt-[200px] md:-mt-[240px] lg:-mt-[380px] hover:bg-red-300 hover:rounded-full" src={loveIcon} alt="" />
                                </Link>
                            </div>
                            {/* rating */}

                            <div className="mt-4 ml-5">
                                <p>rating star</p>
                            </div>
                            {/* name location */}

                            <div className="ml-5">
                                <p className="text-lg font-bold mt-2">Hotel Expedia</p>
                                <p className="text-gray-600 mt-2">Chicago, IL</p>

                            </div>
                            {/* others */}
                            <div className="border-t-2 mt-6 ml-5">
                                <div className="flex items-center mt-6" >
                                    <p className="  border border-success bg-gray-100 px-2 py-1 text-blue-500 font-bold w-16 rounded-lg">5/ 5</p>
                                    <p className="font-bold ml-3 font-mono">Excellent</p>
                                    <p className="ml-2">(4 review)</p>

                                </div>
                            </div>
                            <p className="mt-2 ml-5 pb-5"> <span className="text-gray-600 text-sm">From : </span> <span className="text-lg font-bold">$220</span><span className="text-base text-gray-500">/night</span></p>

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default RecomendedBenner;