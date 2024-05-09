import { Link } from "react-router-dom";
import errorImg from "../../assets/icons/errorpage.png";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { FaArrowCircleLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="w-4/5 mx-auto ">
      <Navbar />
      <div className="flex flex-col items-center gap-6 py-10 font-inter text-white">
        <img src={errorImg} alt="" />
        <div>
          <Link
            to="/"
            className=" bg-[#FF3811] px-8 py-3 text-xl font-semibold rounded-md flex items-center gap-2 hover:bg-gray-400 duration-700"
          >
            <FaArrowCircleLeft />
            Go to home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
