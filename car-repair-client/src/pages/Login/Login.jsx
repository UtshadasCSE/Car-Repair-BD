import loginImg from "../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="flex max-sm:flex-col max-sm:gap-5 justify-center  w-4/5 mx-auto py-14 font-inter">
        <div className="w-1/2  max-sm:w-full">
          <img src={loginImg} alt="" />
        </div>
        <div className="w-1/2 max-sm:w-full p-6 border-2 border-[#D0D0D0] rounded-lg">
          <h2 className="text-3xl text-center font-semibold py-4">Login</h2>
          <form
            onSubmit={handleLoginFormSubmit}
            action=""
            className="w-full flex flex-col gap-4"
          >
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder=" Your email" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Your password"
              />
            </label>
            <button
              type="submit"
              className=" w-full btn text-white bg-[#FF3811]"
            >
              Log In
            </button>
          </form>
          <div className=" py-5 text-center">
            <p>Or register with</p>
          </div>
          <div className="flex justify-center gap-2">
            <div className="bg-[#F5F5F8] p-3 rounded-full w-max cursor-pointer">
              {" "}
              <FcGoogle className="text-2xl  " />
            </div>
            <div className="bg-[#F5F5F8] p-3 rounded-full w-max cursor-pointer">
              {" "}
              <FaGithub className="text-2xl  " />
            </div>
          </div>
          <div className="flex justify-center py-4">
            <Link to="/register">
              Dont have an account?{" "}
              <span className="text-[#FF3811] font-semibold cursor-pointer hover:underline">
                Register
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
