import { Link, useNavigate } from "react-router-dom";

import img from "./../../../../../assets/images/ttttttttttttttttt.webp"
import { useContext, } from "react";
import { AuthConnect } from "../Authinction/Authinction";
import swal from "sweetalert";

const Login = () => {
    const { Login } = useContext(AuthConnect)


    const Navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }
        console.log(user);

        Login(email, password)
            .then(result => {
                console.log(result.user);
                swal("Success!", "Successfully", "success");
                event.target.reset()
                Navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                alert('try again')
                event.target.reset()
            })
    }
    return (
        <div>
            <div className=" flex justify-between  flex-col lg:flex-row">

                <img className="h-[500px] w-[700px] rounded-r-lg rounded-sm" src={img} />

                <div className="pr-2 md:pr-10 ">
                    <div className="mt-14 mb-8">
                        <h1 className="text-2xl text-green-600 font-bold mb-4 uppercase">
                            TRAVLEWRP</h1>

                        <div className="flex justify-between">
                            <h1 className="text-2xl text-black font-sans font-semibold">Login now</h1>
                            <button className="text-lg font-semibold underline text-black"><Link to="/">Back to Home</Link> </button>
                        </div>

                    </div>

                    <form onSubmit={handleLogin}>
                        <div className="flex gap-7">


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-thin">Email<span className="text-red-400">*</span></span>
                                </label>
                                <input type="email"
                                    name="email" placeholder="exemple@gmail.com" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-thin">Password<span className="text-red-400">*</span></span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="" className="input input-bordered" required />
                            </div>

                        </div>


                        <div className="mt-3 flex justify-between items-center">

                            <div className="flex items-center">
                                <input type="checkbox" checked="checked" className="checkbox checkbox-accent h-4 w-4 mr-2" />
                                <p className="text-gray-800 ">Remember me</p>
                            </div>

                            <div className="flex    text-sm">
                                <p className="text-gray-800 font-thin">Don't have an account?</p>
                                <button className=" "> <Link to="/signup">Create account</Link></button>
                            </div>
                        </div>

                        <div className="mt-8 flex  justify-between">

                            <button className="btn btn-success rounded-full px-8 btn-outline"> <Link to="/signup"> Signup </Link></button>

                            <input className="btn btn-accent px-8 rounded-full  " type="submit" value="Next" />
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Login;