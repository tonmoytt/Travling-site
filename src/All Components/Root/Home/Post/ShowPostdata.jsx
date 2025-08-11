import { Link } from "react-router-dom"; 
import axios from "axios";
import Swal from "sweetalert2";
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { AuthConnect } from "../../Authinction/Signup/Authinction/Authinction";
import { useContext } from "react";

const ShowPostdata = ({ data }) => {
    const { id, image, authorImage, name, location, rating, rating2, price, email } = data;
      const { user } = useContext(AuthConnect);

    // ❤️ Add to Wishlist
  const handleAddToWishlist = async () => {
  if (!user?.email) {
    Swal.fire({
      icon: "warning",
      title: "Please login first",
    });
    return;
  }

  const wishlistData = {
    id,
    email: user.email,  // user থেকে email নিয়ে আসো
    image,
    authorImage,
    name,
    location,
    rating,
    price
  };

  console.log("Wishlist data to send:", wishlistData);

  try {
    const res = await axios.post("https://travling-server-site.vercel.app/wishlist", wishlistData);
    if (res.data.insertedId || res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Added to Wishlist!",
        showConfirmButton: false,
        timer: 1500
      });
    }
  } catch (error) {
    if (error.response?.status === 400 && error.response.data.message === "Item already added to wishlist") {
      Swal.fire({
        icon: "info",
        title: "Already added!",
        text: "This item is already in your wishlist.",
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: error.message,
      });
    }
  }
};


    // ⭐ Star rendering (unchanged)
    const renderStars = (ratingValue) => {
        const fullStars = Math.floor(ratingValue);
        const hasHalfStar = ratingValue % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} className="text-yellow-500 text-sm" />);
        }
        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" className="text-yellow-500 text-sm" />);
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500 text-sm" />);
        }

        return stars;
    };

    return (
        <div className="relative group shadow-xl rounded-3xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-200 hover:border-indigo-500">
            {/* Wishlist icon */}
            <button
                onClick={handleAddToWishlist}
                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md z-10 hover:bg-pink-100 transition"
                title="Add to Wishlist"
            >
                <FaHeart className="text-red-500" />
            </button>

            {/* Image */}
            <img
                src={image}
                alt={name}
                className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Content */}
            <div className="p-5 bg-white space-y-3">
                <div className="flex items-center gap-1">
                    {renderStars(rating)}
                </div>
                <h2 className="text-xl font-semibold text-gray-800 truncate">
                    {name}
                </h2>

                {/* Location */}
                <div className="text-gray-600 text-sm flex items-center gap-1 text-end">
                    <FaMapMarkerAlt className="text-red-400" />
                    <span>{location}</span>
                </div>

                {/* Price & Rating */}
                <div className="flex justify-between items-center border-t pt-3">
                    <p className="text-indigo-600 font-bold text-lg">{price}</p>
                    <p className="text-sm text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full">
                        Excellent
                    </p>
                </div>

                {/* Author & Details */}
                <div className="flex justify-between items-center pt-4">
                    <div className="flex items-center gap-2">
                        <img
                            src={authorImage}
                            alt={name}
                            className="w-10 h-10 rounded-full border border-gray-300 shadow-sm"
                        />
                        <p className="text-sm text-gray-700 font-medium">{name}</p>
                    </div>

                    <Link
                        to={`/details/${id}`}
                        state={{ hotel: data }}
                    >
                        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-full shadow-md transition">
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShowPostdata;



// ui design 2 
        //  <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gradient-to-br from-white via-gray-50 to-gray-100 transform transition duration-500 hover:scale-[1.06] hover:shadow-indigo-400 hover:border-indigo-400">
        //       {/* Wishlist icon */}
        //       <button
        //         onClick={handleAddToWishlist}
        //         className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg z-20 hover:bg-pink-100 hover:scale-110 transition-transform duration-300"
        //         aria-label="Add to Wishlist"
        //       >
        //         <FaHeart className="text-red-500 text-xl" />
        //       </button>

        //       {/* Image */}
        //       <div className="overflow-hidden rounded-t-3xl">
        //         <img
        //           src={image}
        //           alt={name}
        //           className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        //           loading="lazy"
        //         />
        //         {/* subtle overlay */}
        //         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-30 rounded-t-3xl pointer-events-none"></div>
        //       </div>

        //       {/* Content */}
        //       <div className="p-6 bg-white">
        //         <h3 className="text-2xl font-extrabold text-gray-900 mb-2 truncate">{name}</h3>

        //         <div className="flex items-center gap-2 mb-3">
        //           {renderStars(rating)}
        //           <span className="text-sm text-gray-500">({rating.toFixed(1)} / 5)</span>
        //         </div>

        //         <div className="flex items-center text-gray-600 text-sm mb-5">
        //           <FaMapMarkerAlt className="mr-1 text-indigo-500" />
        //           <span>{location}</span>
        //         </div>

        //         <div className="flex justify-between items-center border-t border-gray-200 pt-4">
        //           <p className="text-indigo-600 text-2xl font-bold tracking-tight"> {price}</p>
        //           <p className="bg-green-100 text-green-700 font-semibold text-sm px-4 py-1 rounded-full shadow-sm">
        //             Excellent
        //           </p>
        //         </div>

        //         <div className="flex items-center justify-between mt-6">
        //           <div className="flex items-center gap-3">
        //             <img
        //               src={authorImage}
        //               alt={`${name} author`}
        //               className="w-8 h-8 rounded-full border border-gray-300 shadow-md"
        //               loading="lazy"
        //             />
        //             <p className="text-gray-700 font-semibold text-base">{name}</p>
        //           </div>

        //           <Link to={`/details/${id}`}>
        //             <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg transition duration-300 font-semibold text-sm tracking-wide">
        //               Details
        //             </button>
        //           </Link>
        //         </div>
        //       </div>
        //     </div>
