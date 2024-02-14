
import { Link } from "react-router-dom";
import loveIcon from "./../../../../assets/images/bal-removebg-preview.png"
// eslint-disable-next-line react/prop-types
const ShowPostdata = ({ data }) => {


    // eslint-disable-next-line react/prop-types
    const { id, image, authorImage, name, location, rating, rating2, price } = data
    return (
        <div className="mb-10">


            <div className="card card-compact w-[390px] bg-base-100 shadow-xl">

                <div>
                    {/* image */}
                    <div className="overflow-hidden ">
                        <img className="rounded-t-xl relative hover:scale-110 transition duration-700" src={image} alt="" />
                    </div>
                    <div>
                        <img className="rounded-full h-8 w-8 absolute mx-[335px] -mt-4 " src={authorImage} alt="" />
                    </div>
                    <div>
                        <Link to={`/Wishlist/${id}`}>
                            <img className="rounded-full h-8 w-8 absolute mx-[345px] -mt-60" placeholder="add to wish list" src={loveIcon} alt="" />
                        </Link>
                    </div>

                    {/* rating */}

                    <div className="mt-4 ml-5">
                        <p>rating star</p>
                    </div>
                    {/* name location */}

                    <div className="ml-5">
                        <p className="text-lg font-bold mt-2">{name}</p>
                        <p className="text-gray-600 mt-2">{location}</p>

                    </div>
                    {/* others */}
                    <div className="border-t-2 mt-6 ml-5">
                        <div className="flex items-center mt-6" >
                            <p className="  border border-success bg-gray-100 px-2 py-1 text-blue-500 font-bold w-16 rounded-lg">{rating2}</p>
                            <p className="font-bold ml-3 font-mono">Excellent</p>
                            <p className="ml-2">({rating} review)</p>

                        </div>
                    </div>
                    <p className="mt-2 ml-5 pb-5"> <span className="text-gray-600 text-sm">From : </span> <span className="text-lg font-bold">{price}</span><span className="text-base text-gray-500">/night</span></p>

                </div>

            </div>
        </div>


    );
};

export default ShowPostdata;