import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
const Banner = () => {
  return (
    <div>
      <div className="max-sm:w-11/12 max-sm:mx-auto md:w-11/12 md:mx-auto">
        <div className="carousel w-full lg:py-4 max-sm:h-[75vh]">
          <div id="slide1" className="carousel-item relative w-full ">
            <img src={img1} className="w-full h-3/4  rounded-md" />
            <div className="absolute flex items-center  h-3/4 left-0  top-0 gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-md">
              <div className="font-inter flex flex-col gap-6 px-11 ">
                <h2 className="text-6xl max-sm:text-2xl text-white font-semibold lg:w-3/5">
                  Affordable Price For Car Servicing
                </h2>
                <p className="text-[#FFFFFF] lg:w-2/3">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  {" "}
                  <button className="btn bg-[#FF3811] border-none text-white">
                    Discover More
                  </button>
                  <button className="btn btn-outline border-white  text-white">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end  -translate-y-1/2 left-5 right-5 bottom-52 max-sm:bottom-[22%] gap-4">
              <a
                href="#slide4"
                className="btn btn-circle bg-[#FFFFFF33] text-white "
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle bg-[#FF3811] text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full ">
            <img src={img2} className="w-full h-3/4  rounded-md" />
            <div className="absolute flex items-center  h-3/4 left-0  top-0 gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-md">
              <div className="font-inter flex flex-col gap-6 px-11 ">
                <h2 className="text-6xl max-sm:text-2xl text-white font-semibold lg:w-3/5">
                  Affordable Price For Car Servicing
                </h2>
                <p className="text-[#FFFFFF] lg:w-2/3">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  {" "}
                  <button className="btn bg-[#FF3811] border-none text-white">
                    Discover More
                  </button>
                  <button className="btn btn-outline border-white  text-white">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-52 max-sm:bottom-[22%] gap-4">
              <a
                href="#slide1"
                className="btn btn-circle bg-[#FFFFFF33] text-white"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle bg-[#FF3811] text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full h-3/4  rounded-md" />
            <div className="absolute flex items-center  h-3/4 left-0  top-0 gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-md">
              <div className="font-inter flex flex-col gap-6 px-11 ">
                <h2 className="text-6xl max-sm:text-2xl text-white font-semibold lg:w-3/5">
                  Affordable Price For Car Servicing
                </h2>
                <p className="text-[#FFFFFF] lg:w-2/3">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  {" "}
                  <button className="btn bg-[#FF3811] border-none text-white">
                    Discover More
                  </button>
                  <button className="btn btn-outline border-white  text-white">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-52 max-sm:bottom-[22%] gap-4">
              <a
                href="#slide2"
                className="btn btn-circle bg-[#FFFFFF33] text-white"
              >
                ❮
              </a>
              <a
                href="#slide4"
                className="btn btn-circle bg-[#FF3811] text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-full h-3/4  rounded-md" />
            <div className="absolute flex items-center  h-3/4 left-0  top-0 gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-md">
              <div className="font-inter flex flex-col gap-6 px-11 ">
                <h2 className="text-6xl max-sm:text-2xl text-white font-semibold lg:w-3/5">
                  Affordable Price For Car Servicing
                </h2>
                <p className="text-[#FFFFFF] lg:w-2/3">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  {" "}
                  <button className="btn bg-[#FF3811] border-none text-white">
                    Discover More
                  </button>
                  <button className="btn btn-outline border-white  text-white">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-52 max-sm:bottom-[22%] gap-4">
              <a
                href="#slide3"
                className="btn btn-circle bg-[#FFFFFF33] text-white"
              >
                ❮
              </a>
              <a
                href="#slide5"
                className="btn btn-circle bg-[#FF3811] text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <img src={img5} className="w-full h-3/4  rounded-md" />
            <div className="absolute flex items-center  h-3/4 left-0  top-0 gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-md">
              <div className="font-inter flex flex-col gap-6 px-11 ">
                <h2 className="text-6xl max-sm:text-2xl text-white font-semibold lg:w-3/5">
                  Affordable Price For Car Servicing
                </h2>
                <p className="text-[#FFFFFF] lg:w-2/3">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  {" "}
                  <button className="btn bg-[#FF3811] border-none text-white">
                    Discover More
                  </button>
                  <button className="btn btn-outline border-white  text-white">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-52 max-sm:bottom-[22%] gap-4">
              <a
                href="#slide4"
                className="btn btn-circle bg-[#FFFFFF33] text-white"
              >
                ❮
              </a>
              <a
                href="#slide6"
                className="btn btn-circle bg-[#FF3811] text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide6" className="carousel-item relative w-full">
            <img src={img6} className="w-full h-3/4  rounded-md" />
            <div className="absolute flex items-center  h-3/4 left-0  top-0 gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-md">
              <div className="font-inter flex flex-col gap-6 px-11 ">
                <h2 className="text-6xl max-sm:text-2xl text-white font-semibold lg:w-3/5">
                  Affordable Price For Car Servicing
                </h2>
                <p className="text-[#FFFFFF] lg:w-2/3">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  {" "}
                  <button className="btn bg-[#FF3811] border-none text-white">
                    Discover More
                  </button>
                  <button className="btn btn-outline border-white  text-white">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-52 max-sm:bottom-[22%] gap-4">
              <a
                href="#slide5"
                className="btn btn-circle bg-[#FFFFFF33] text-white"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle bg-[#FF3811] text-white"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
