import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img from "./../../../../assets/images/Frame-3151-min.png"
import img2 from "./../../../../assets/images/Frame-3150-min.png"
import img3 from "./../../../../assets/images/Frame-3150-min.png"
import img4 from "./../../../../assets/images/Frame-3150-min.png"
import img5 from "./../../../../assets/images/Frame-3150-min.png"
const DestinationsBenner = () => {
    return (
        <div>
            <p className="text-4xl font-bold text-center mt-10">Top Destinations </p>

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
                <SwiperSlide>
                    <div className='items-center'>
                        <img className='h-[300px] w-[400px] rounded-full' src={img} alt="" />
                        <div className='ml-28 mt-6'>
                            <h2 className='text-xl font-bold'>Califonia</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>14 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide> 
                <div className='items-center'>
                        <img className='h-[300px] w-[400px] rounded-full' src={img2} alt="" />
                        <div className='ml-28 mt-6'>
                            <h2 className='text-xl font-bold'>New word city</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide> 
                <div className='items-center'>
                        <img className='h-[300px] w-[400px] rounded-full' src={img3} alt="" />
                        <div className='ml-28 mt-6'>
                            <h2 className='text-xl font-bold'>New word city</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide> 
                <div className='items-center'>
                        <img className='h-[300px] w-[400px] rounded-full' src={img4} alt="" />
                        <div className='ml-28 mt-6'>
                            <h2 className='text-xl font-bold'>New word city</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide> 
                <div className='items-center'>
                        <img className='h-[300px] w-[400px] rounded-full' src={img5} alt="" />
                        <div className='ml-28 mt-6'>
                            <h2 className='text-xl font-bold'>New word city</h2>
                            <p className='ml-2 mt-1 text-sm text-gray-600'>7 hotel</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide> <img className='h-[300px] w-[400px]' src={img3} alt="" /></SwiperSlide>
                <SwiperSlide> <img className='h-[300px] w-[400px]' src={img4} alt="" /></SwiperSlide>
                <SwiperSlide> <img className='h-[300px] w-[400px]' src={img5} alt="" /></SwiperSlide>
                <SwiperSlide> <img className='h-[300px] w-[400px]' src={img6} alt="" /></SwiperSlide> */}


            </Swiper>
        </div>
    );
};

export default DestinationsBenner;