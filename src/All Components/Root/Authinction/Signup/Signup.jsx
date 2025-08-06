import { Link, useNavigate } from "react-router-dom";
import img from "./../../../../assets/images/car signup.jpg";
import { useContext, useState } from "react";
import { AuthConnect } from "./Authinction/Authinction";
import swal from "sweetalert";
import './signup.css'

const Signup = () => {
  const { CreateUser, createGoogle } = useContext(AuthConnect);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;

    setPassword("");

    if (password.length < 6) {
      setPassword("Password should be at least 6 characters");
      return;
    } else if (!/[0-9]/.test(password)) {
      setPassword("Please add at least one number");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPassword("Please add at least one uppercase letter");
      return;
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setPassword("Please add one special character");
      return;
    }

    CreateUser(email, password)
      .then((result) => {
        console.log(result.user);
        swal("Success!", "Please Login", "success");
        event.target.reset();
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignup = () => {
    createGoogle()
      .then((result) => {
        console.log(result.user);
        swal("Success!", "Google Registration Successfully", "success");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 via-pink-100 to-purple-200 h-[800px] flex items-center justify-center px-">
      <div className="bg-white/30 backdrop-blur-xl  shadow-2xl flex flex-col md:flex-row max-w-9xl w-full overflow-hidden border border-white/30 md:mb-20">
        {/* Left Side Image */}
        <img
          src={img}
          alt="Signup"
          className="w-full md:w-1/2 object-cover h-[300px] md:h-auto transition duration-300 hover:scale-105 rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl"
        />

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 bg-white/60 backdrop-blur-lg shadow-xl rounded-br-3xl p-8 md:p-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-2 tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-red-400">
              Create Account
            </span>
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Join the journey with us and get exclusive travel access.
          </p>

          <form onSubmit={handleSignUp} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="First Name"
                className="input-style-glass"
              />
              <input
                type="text"
                name="lastName"
                required
                placeholder="Last Name"
                className="input-style-glass"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="input-style-glass"
              />
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                className="input-style-glass"
              />
            </div>

            {password && (
              <div className="bg-red-100 text-red-700 text-center py-2 rounded-lg text-sm font-medium shadow">
                {password}
              </div>
            )}

            <div className="flex items-center justify-between mt-2">
              <p className="text-gray-500 text-base font-light">Sign up with -----> </p>
              <button
                type="button"
                onClick={handleGoogleSignup}
                className="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white shadow-md transition duration-300"
              >
                Google
              </button>
            </div>

            <div className="flex gap-4 pt-4">
              <input
                type="submit"
                value="Register"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-2 w-full rounded-2xl shadow-lg transition duration-300 cursor-pointer"
              />
              <Link
                to="/login"
                className="text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 w-full rounded-2xl shadow-md transition duration-300"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
