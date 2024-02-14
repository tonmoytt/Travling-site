import { Link } from "react-router-dom";
import img from "./../../../../assets/images/car signup.jpg"

const Signup = () => {
    return (
        <div>
            <div>

                <div className="  bg-base-200">
                    <div className=" flex justify-between  flex-col lg:flex-row">

                        <img className="h-[500px] w-[700px] rounded-sm" src={img} />

                        <div className="pr-2 md:pr-10 ">
                            <div className="mt-10 mb-8">
                                <h1 className="text-2xl text-green-600 font-bold mb-1 uppercase">
                                    <span className="text-red-300">for</span>
                                    <span className="text-blue-400 pl-2">your</span> Travlewrp</h1>
                                <h1 className="text-xl text-black font-semibold">Signup today</h1>
                            </div>
                            <div className="flex gap-7">


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-thin">First name<span className="text-red-400">*</span></span>
                                    </label>
                                    <input type="text" placeholder="" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-thin">Last name<span className="text-red-400">*</span></span>
                                    </label>
                                    <input type="text" placeholder="" className="input input-bordered" required />
                                </div>

                            </div>

                            <div className="flex gap-7">


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-thin">Email<span className="text-red-400">*</span></span>
                                    </label>
                                    <input type="email" placeholder="exemple@gmail.com" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-thin">Password<span className="text-red-400">*</span></span>
                                    </label>
                                    <input type="password" placeholder="" className="input input-bordered" required />
                                </div>

                            </div>

                            <div className="mt-3 flex justify-between items-center">

                                <div className="flex items-center">
                                    <p></p>
                                </div>

                                <div className="flex mr-4   text-sm">
                                    <p className="text-gray-800 font-thin">Sign up with ?</p>
                                    <button className=" text-blue-400"> <Link to="/signup"> Google</Link></button>
                                </div>
                            </div>





                            <div className="mt-6 flex justify-between">
                                <input className="btn btn-error rounded-2xl btn-outline" type="submit" value="Register" />
                                <button className="btn btn-success rounded-full px-8 btn-outline"><Link to="/login">Login</Link> </button>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Signup;