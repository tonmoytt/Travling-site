import { Link } from "react-router-dom";
import img1 from "./../../../../../assets/images/hotel details 1pic.png"
import img2 from "./../../../../../assets/images/hotel details 1pic222222.png"
import img3 from "./../../../../../assets/images/hotel details 1pic333333.png"
import img4 from "./../../../../../assets/images/hotel details 1pic4444.png"
import img5 from "./../../../../../assets/images/hotel details 1pic444444.png"
import love from "./../../../../../assets/images/bal-removebg-preview.png"

import { RiShareForwardLine } from "react-icons/ri";

const Detailhotel1 = () => {
    return (
        <div className="pb-10">
            <div className="py-5 border-t-2 border-b-2 mt-2 ">
                <div className="flex gap-x-10 pl-6 ">
                    <Link to="/"> <h1 className=" font-semibold">Home</h1></Link>
                    <Link to="/unitedstate"> <h1 className=" font-semibold">United State</h1></Link>
                    <h1 className=" text-gray-500">Studio Allston Hotel</h1>
                </div>
            </div>
            {/* section 2 */}
            <div className="grid md:grid-cols-3 gap-2  pt-8 pb-5 bg-slate-50 px-4">
                <div>
                    <img className="h-full rounded-lg" src={img1} alt="" />
                </div>

                <div className="gap-2">
                    <img className="mb-2 rounded-lg" src={img2} alt="" />
                    <img className="rounded-lg" src={img3} alt="" />
                </div>

                <div >
                    <img className="mb-2 rounded-lg" src={img4} alt="" />
                    <img className="rounded-lg" src={img5} alt="" />
                </div>
            </div>
            {/* section 3 */}
            <div className="px-5 pt-10 grid md:grid-cols-3">
                <div className="col-span-2">
                    <div className="flex justify-between items-center">


                        <div>
                            <div>
                                <p>star rating</p>
                                <h1 className="text-3xl font-bold">Studio Allston Hotel</h1>
                            </div>


                            <div >
                                <div className="flex items-center mt-4" >
                                    <p className="border border-success bg-gray-100 text-center py-1 text-blue-500 font-bold w-16 rounded-lg">5 / 5</p>
                                    <p className="font-bold ml-3 font-mono">Excellent</p>
                                    <p className="ml-2  text-blue-500">( 7 review )</p>
                                    <p className="pl-4 text-gray-500">Califonia</p>

                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 mr-6">
                            <div className="border-2 rounded-full p-2">
                                <RiShareForwardLine className="h-6 w-6  "></RiShareForwardLine>
                            </div>
                            <div id="dropdown" className="border-2 rounded-full p-1">
                                <p id="submenu2" className="text-sm text-red-500 border-2">Add to wishlist</p>
                                
                                <img id="rounded"  className="h-8 w-8  hover:bg-red-300 hover:rounded-full" src={love} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-2">
                    <p>ami re vai</p>
                </div>
            </div>

        </div>
    );
};

export default Detailhotel1;