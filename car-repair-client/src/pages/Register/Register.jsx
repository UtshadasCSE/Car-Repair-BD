import loginImg from "../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegisterFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { userName, email, password };
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your account successfully created!",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <div className="flex max-sm:flex-col max-sm:gap-5 justify-center  w-4/5 mx-auto py-14 font-inter">
        <div className="w-1/2  max-sm:w-full">
          <img src={loginImg} alt="" />
        </div>
        <div className="w-1/2 max-sm:w-full p-6 border-2 border-[#D0D0D0] rounded-lg">
          <h2 className="text-3xl text-center font-semibold py-4">Register</h2>
          <form
            onSubmit={handleRegisterFormSubmit}
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
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                name="userName"
                type="text"
                className="grow"
                placeholder="Your name"
              />
            </label>
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
              <input
                name="email"
                type="email"
                className="grow"
                placeholder=" Your email"
              />
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
                name="password"
                type="password"
                className="grow"
                placeholder="Your password"
              />
            </label>
            <button
              type="submit"
              className=" w-full btn text-white bg-[#FF3811]"
            >
              Register
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
            <Link to="/login">
              Already have an account?{" "}
              <span className="text-[#FF3811] font-semibold cursor-pointer hover:underline">
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
