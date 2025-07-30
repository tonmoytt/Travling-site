import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(false);

    // fetch wishlist data
    useEffect(() => {
        fetchWishlist();
    }, []);

    const fetchWishlist = () => {
        setLoading(true);
        axios.get("https://travling-server-site.vercel.app/wishlist")
            .then(res => setWishlist(res.data))
            .catch(err => console.error("Error fetching wishlist:", err))
            .finally(() => setLoading(false));
    };

    // delete function
    const handleDelete = (id) => {
        setLoading(true);
        axios.delete(`https://travling-server-site.vercel.app/wishlist/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    // refetch data
                    fetchWishlist();
                }
            })
            .catch(err => {
                console.error("Delete error:", err);
                setLoading(false);
            });
    };

    return (
        <div className="py-20 px-6 md:px-10 bg-gradient-to-br from-[#fef9f9] to-[#f2f2ff] min-h-screen">
            <p className="text-4xl font-extrabold text-center text-gray-800 mb-10">❤️ My Wishlist</p>
             <p className="border-b-2 border-gray-200 my-6"></p>


            {loading && (
                <div className="text-center mb-8">
                    <span className="loading loading-spinner loading-lg text-indigo-600"></span>
                </div>
            )}

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {!loading && wishlist.map((item) => (
                    <div
                        key={item._id}
                        className="rounded-2xl shadow-xl bg-white hover:shadow-2xl duration-300 transform hover:-translate-y-1 transition-all overflow-hidden relative"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-56 object-cover rounded-t-2xl"
                        />
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    src={item.authorImage}
                                    className="h-10 w-10 rounded-full border"
                                    alt="author"
                                />
                                <p className="text-sm text-gray-600">{item.location}</p>
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                            <p className="text-sm text-gray-500 mt-1">Rating: {item.rating2} ⭐ ({item.rating} reviews)</p>
                            <p className="text-lg font-semibold text-gray-700 mt-2">Price: <span className="text-indigo-600">{item.price}</span> / night</p>

                            {/* Booking Button */}
                            <div className="mt-6 flex justify-between items-center">
                                <button className="relative inline-block px-6 py-2 font-medium group">
                                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-indigo-500 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-md"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-indigo-500 group-hover:bg-indigo-500 rounded-md"></span>
                                    <span className="relative text-indigo-500 group-hover:text-white">Booking Now</span>
                                </button>

                                {/* Remove Button */}
                                <button
                                    onClick={() => handleDelete(item._id)}
                                    className="text-red-600 hover:text-white border border-red-500 hover:bg-red-500 px-3 py-2 rounded-full transition duration-300"
                                    title="Remove"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
