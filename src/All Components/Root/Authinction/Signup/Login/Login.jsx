import { Link, useNavigate } from "react-router-dom";
import img from "./../../../../../assets/images/ttttttttttttttttt.webp";
import { useContext } from "react";
import { AuthConnect } from "../Authinction/Authinction";
import swal from "sweetalert";

const Login = () => {
  const { Login } = useContext(AuthConnect);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    Login(email, password)
      .then((result) => {
        swal("Success!", "Successfully logged in", "success");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(() => {
        swal("Error!", "Login failed, please try again", "error");
        form.reset();
      });
  };

  return (
    <div className="min-h-screen pt-10 flex flex-col md:flex-row bg-gray-50">
      {/* Left Image - exactly 50% width and full height */}
      <img className="h-[250px] pt-10 md:h-[500px] lg:h-[600px] w-full md:w-1/3 lg:w-[700px] rounded-r-lg rounded-sm" src={img} />

      {/* Right Form - 50% width */}
      <div className="md:w-1/2 h-[560px] flex flex-col justify-center bg-white px-10  shadow-lg rounded-lg mx-4 my-10 md:my-10">
        {/* Branding & Header */}
        <div className="mb-12 flex justify-between text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-green-700 tracking-wide uppercase mb-2">
           Login Now
          </h1>
         
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 font-medium underline"
          >
            &larr; Back to Home
          </Link>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                id="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              />
            </div>
          </div>

          {/* Remember me and Signup link */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center text-gray-700 text-sm">
            <label className="flex items-center mb-4 md:mb-0 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-accent h-5 w-5 mr-2"
              />
              Remember me
            </label>
            <p>
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-green-600 font-semibold hover:underline"
              >
                Create account
              </Link>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center gap-4">
            <Link
              to="/signup"
              className="btn btn-outline btn-success rounded-full px-12 py-3 text-green-700 font-semibold hover:bg-green-600 hover:text-white transition"
            >
              Signup
            </Link>

            <input
              type="submit"
              value="Next"
              className="btn btn-accent rounded-full px-12 py-3 font-semibold text-white bg-green-600 hover:bg-green-700 cursor-pointer transition"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
