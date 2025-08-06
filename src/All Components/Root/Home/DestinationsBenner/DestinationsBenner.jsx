import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img from "./../../../../assets/images/feature-11-600x400 111.png"
import img2 from "./../../../../assets/images/feature-21-600x400 222.png"
import img3 from "./../../../../assets/images/feature-1-2-600x400 333.png"
import img4 from "./../../../../assets/images/feature-20-600x400  444.png"
import img5 from "./../../../../assets/images/feature-19-600x400 5555.png"
import img6 from "./../../../../assets/images/Bar-on-property-2-1-600x400 666.png"
import img7 from "./../../../../assets/images/download 777.jpg"
import img8 from "./../../../../assets/images/download 8888.jpg"
import img9 from "./../../../../assets/images/download 999.jpg"
import img10 from "./../../../../assets/images/login final.jpg"
import img11 from "./../../../../assets/images/login2222222222222.jpg"
import img12 from "./../../../../assets/images/loginfinal2.jpg"

const DestinationsBenner = () => {
    return (
        <div className='mt-20 pt-12 rounded-3xl bg-stone-100'>
            <p className="text-4xl font-bold text-center mb-10">Top Destinations </p>

            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper md:6 md:mb-10 lg:mb-20 mt-4 md:mt-6 lg:mt-10"
            >
                <SwiperSlide className='md:mb-6 lg:mb-10'>
                    <div className='items-center '>
                        <div className='overflow-hidden h-[100px] md:h-[220px] lg:h-[300px] w-[100px] md:w-[220px] lg:w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img} alt="" />
                        </div>

                        <div className='ml-10 md:ml-16 lg:ml-28 mt-2 md:mt-4 lg:mt-6'>
                            <h2 className='md:md:text-xl font-bold'>Califonia</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>14 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <div className='items-center'>
                        <div className='overflow-hidden h-[100px] md:h-[220px] lg:h-[300px] w-[100px] md:w-[220px] lg:w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img2} alt="" />
                        </div>
                        <div className='ml-10 md:ml-16 lg:ml-28 mt-2 md:mt-4 lg:mt-6'>
                            <h2 className='md:text-xl font-bold'>New work city</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <div className='items-center'>
                    <div className='overflow-hidden h-[100px] md:h-[220px] lg:h-[300px] w-[100px] md:w-[220px] lg:w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img3} alt="" />
                        </div>
                        <div className='ml-10 md:ml-16 lg:ml-28 mt-2 md:mt-4 lg:mt-6'>
                            <h2 className='md:text-xl font-bold'>New Jersey</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <div className='items-center'>
                    <div className='overflow-hidden h-[100px] md:h-[220px] lg:h-[300px] w-[100px] md:w-[220px] lg:w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img4} alt="" />
                        </div>
                        <div className='ml-10 md:ml-16 lg:ml-28 mt-2 md:mt-4 lg:mt-6'>
                            <h2 className='md:text-xl font-bold'>Los Angela</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <div className='items-center'>
                    <div className='overflow-hidden h-[100px] md:h-[220px] lg:h-[300px] w-[100px] md:w-[220px] lg:w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img5} alt="" />
                        </div>
                        <div className='ml-10 md:ml-16 lg:ml-28 mt-2 md:mt-4 lg:mt-6'>
                            <h2 className='md:text-xl font-bold'>San Francisco</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <div className='items-center'>
                    <div className='overflow-hidden h-[100px] md:h-[220px] lg:h-[300px] w-[100px] md:w-[220px] lg:w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img6} alt="" />
                        </div>
                        <div className='ml-10 md:ml-16 lg:ml-28 mt-2 md:mt-4 lg:mt-6'>
                            <h2 className='md:text-xl font-bold'>Virginia</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <div className='items-center'>
                    <div className='overflow-hidden h-[100px] md:h-[220px] lg:h-[300px] w-[100px] md:w-[220px] lg:w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img7} alt="" />
                        </div>
                        <div className='ml-10 md:ml-16 lg:ml-28 mt-2 md:mt-4 lg:mt-6'>
                            <h2 className='md:text-xl font-bold'>Nevada</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <div className='items-center'>
                    <div className='overflow-hidden h-[100px] md:h-[220px] lg:h-[300px] w-[100px] md:w-[220px] lg:w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img8} alt="" />
                        </div>
                        <div className='ml-10 md:ml-16 lg:ml-28 mt-2 md:mt-4 lg:mt-6'>
                            <h2 className='md:text-xl font-bold'>New word city</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <div className='items-center'>
                    <div className='overflow-hidden h-[100px] md:h-[220px] lg:h-[300px] w-[100px] md:w-[220px] lg:w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img10} alt="" />
                        </div>
                        <div className='ml-10 md:ml-16 lg:ml-28 mt-2 md:mt-4 lg:mt-6'>
                            <h2 className='md:text-xl font-bold'>New word city</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <div className='items-center'>
                    <div className='overflow-hidden h-[100px] md:h-[220px] lg:h-[300px] w-[100px] md:w-[220px] lg:w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img9} alt="" />
                        </div>
                        <div className='ml-10 md:ml-16 lg:ml-28 mt-2 md:mt-4 lg:mt-6'>
                            <h2 className='md:text-xl font-bold'>New word city</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <div className='items-center'>
                    <div className='overflow-hidden h-[100px] md:h-[220px] lg:h-[300px] w-[100px] md:w-[220px] lg:w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img11} alt="" />
                        </div>
                        <div className='ml-10 md:ml-16 lg:ml-28 mt-2 md:mt-4 lg:mt-6'>
                            <h2 className='md:text-xl font-bold'>New word city</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <div className='items-center'>
                    <div className='overflow-hidden h-[100px] md:h-[220px] lg:h-[300px] w-[100px] md:w-[220px] lg:w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img12} alt="" />
                        </div>
                        <div className='ml-10 md:ml-16 lg:ml-28 mt-2 md:mt-4 lg:mt-6'>
                            <h2 className='md:text-xl font-bold'>New word city</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default DestinationsBenner;