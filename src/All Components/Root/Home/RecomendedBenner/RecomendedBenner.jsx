import React, { useContext, useEffect, useState, } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from 'axios';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import loveIcon from "../../../../assets/images/bal-removebg-preview.png";
// import { AuthContext } from '../../Authinction/'; // adjust path as needed
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthConnect } from '../../Authinction/Signup/Authinction/Authinction';
import Swal from 'sweetalert2';

const RecommendedBanner = () => {
    const [recommendcard, setRecommendedCards] = useState([]);
    const { user } = useContext(AuthConnect);

    useEffect(() => {
        fetch("/Hoteldata.json")
            .then(res => res.json())
            .then(data => {
                const recommended = data.filter(item => item.category === "recommended");
                setRecommendedCards(recommended);
            });
    }, []);

    const chunked = [];
    for (let i = 0; i < recommendcard.length; i += 2) {
        chunked.push(recommendcard.slice(i, i + 2));
    }

    const handleAddToWishlist = async (card) => {
        if (!user?.email) {
            toast.warning("Please login to add to wishlist");
            return;
        }

        const wishlistData = {
            hotelId: card.id,
            name: card.name,
            price: card.price,
            image: card.image,
            email: user.email,
        };
        console.log("🚀 Sending to backend:", wishlistData);
        try {
            const res = await axios.post('https://travling-server-site.vercel.app/wishlist-recommend', wishlistData);
            if (res.data?.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Added to Wishlist!",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                alert('Already in wishlist');
            }
        } catch (err) {
            console.error(err);
            toast.error('Something went wrong.');
        }
    };

    return (
        <div className='my-16'>
            <h1 className='text-4xl font-semibold ml-4 pb-6 md:pb-10'>Recommended for you</h1>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {chunked.map((recommendcard, index) => (
                    <SwiperSlide key={index} className='mb-10'>
                        <div className="w-full bg-base-100 gap-4 grid md:grid-cols-2">
                            {recommendcard.map(card => (
                                <div key={card.id} className='card card-compact shadow-xl relative'>
                                    <div className='overflow-hidden'>
                                        <img
                                            className="rounded-t-xl hover:scale-110 transition duration-300 h-[380px] w-full"
                                            src={card.image}
                                            alt={card.name}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            className="rounded-full h-8 w-8 absolute mx-[250px] md:mx-[320px] lg:mx-[640px] -mt-4"
                                            src={card.authorImage}
                                            alt="author"
                                        />
                                    </div>

                                    {/* Wishlist Button */}
                                    <div className="relative group">
                                        <button onClick={() => handleAddToWishlist(card)}>
                                            <img
                                                className="rounded-full absolute h-8 w-8 mx-[260px] md:mx-[320px] lg:mx-[640px] -mt-[200px] md:-mt-[240px] lg:-mt-[350px] bg-red-50"
                                                src={loveIcon}
                                                alt="wishlist"
                                            />
                                        </button>
                                        <p className="hidden group-hover:block absolute text-xs md:text-sm bg-black text-white px-2 py-1 rounded -top-10 right-0 md:-top-[380px] md:right-1">
                                            Add to wishlist
                                        </p>
                                    </div>

                                    <div className="ml-5">
                                        <p className="text-lg font-bold mt-2">{card.name}</p>
                                        <p className="text-gray-600 mt-2">{card.location}</p>
                                    </div>
                                    <div className="border-t-2 mt-3 ml-5">
                                        <div className="flex items-center mt-6">
                                            <p className="border border-success bg-gray-100 px-2 py-1 text-blue-500 font-bold w-18 rounded-lg">{card.rating}</p>
                                            <p className="font-bold ml-3 font-mono">Excellent</p>
                                            <p className="ml-2">(5 review)</p>
                                        </div>
                                    </div>
                                    <p className="mt-2 ml-5 pb-5">
                                        <span className="text-gray-600 text-sm">From : </span>
                                        <span className="text-lg font-bold">{card.price}</span>
                                        <span className="text-base text-gray-500">/night</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RecommendedBanner;
