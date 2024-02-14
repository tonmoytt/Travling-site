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

const DestinationsBenner = () => {
    return (
        <div className='mt-20 pt-12 rounded-3xl bg-stone-100'>
            <p className="text-4xl font-bold text-center mb-10">Top Destinations </p>

            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20 mt-10"
            >
                <SwiperSlide className='mb-10'>
                    <div className='items-center '>
                        <div className='overflow-hidden h-[300px] w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img} alt="" />
                        </div>

                        <div className='ml-28 mt-6'>
                            <h2 className='text-xl font-bold'>Califonia</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>14 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <div className='items-center'>
                        <div className='overflow-hidden h-[300px] w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img2} alt="" />
                        </div>
                        <div className='ml-28 mt-6'>
                            <h2 className='text-xl font-bold'>New word city</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <div className='items-center'>
                    <div className='overflow-hidden h-[300px] w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img3} alt="" />
                        </div>
                        <div className='ml-28 mt-6'>
                            <h2 className='text-xl font-bold'>New word city</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <div className='items-center'>
                    <div className='overflow-hidden h-[300px] w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img4} alt="" />
                        </div>
                        <div className='ml-28 mt-6'>
                            <h2 className='text-xl font-bold'>New word city</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <div className='items-center'>
                    <div className='overflow-hidden h-[300px] w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img5} alt="" />
                        </div>
                        <div className='ml-28 mt-6'>
                            <h2 className='text-xl font-bold'>New word city</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <div className='items-center'>
                    <div className='overflow-hidden h-[300px] w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img6} alt="" />
                        </div>
                        <div className='ml-28 mt-6'>
                            <h2 className='text-xl font-bold'>New word city</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <div className='items-center'>
                    <div className='overflow-hidden h-[300px] w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img7} alt="" />
                        </div>
                        <div className='ml-28 mt-6'>
                            <h2 className='text-xl font-bold'>New word city</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <div className='items-center'>
                    <div className='overflow-hidden h-[300px] w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img8} alt="" />
                        </div>
                        <div className='ml-28 mt-6'>
                            <h2 className='text-xl font-bold'>New word city</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-10'>
                    <div className='items-center'>
                    <div className='overflow-hidden h-[300px] w-[300px] rounded-full'>
                            <img className='h-full hover:scale-110 transition duration-300' src={img9} alt="" />
                        </div>
                        <div className='ml-28 mt-6'>
                            <h2 className='text-xl font-bold'>New word city</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default DestinationsBenner;