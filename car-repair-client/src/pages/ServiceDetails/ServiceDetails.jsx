import { useLoaderData } from "react-router-dom";
import serviceBanner from "../../assets/images/services/4.jpg";

const ServiceDetails = () => {
  const detalisService = useLoaderData();
  console.log(detalisService);
  return (
    <div className="py-11">
      <div className=" mx-auto h-56 relative font-inter">
        <img src={serviceBanner} alt="" className="w-full h-full rounded-lg " />
        <div className="absolute bottom-0 rounded-lg w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] font-inter text-white flex justify-center items-center">
          <h2 className="font-semibold text-2xl">Service Details</h2>
        </div>
        <div className="absolute bottom-0  text-center bg-[#FF3811] p-3 rounded-t-3xl">
          <h4 className="text-white font-bold text-lg">Home/Service Details</h4>
        </div>
      </div>
      <div className="py-7 font-inter">
        {/* left  */}
        <div className="w-9/12 flex flex-col gap-3">
          <img src={detalisService.img} alt="" className="rounded-lg" />
          <h2 className="text-3xl text-[#151515] font-inter font-black">
            Unique Car Engine Service
          </h2>
          <p className="text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.{" "}
          </p>
          <div className="font-inter py-9  mx-auto grid grid-cols-2 gap-3">
            {/* card -01  */}
            <div className="bg-[#F3F3F3] p-11 border-t-2 border-t-[#FF3811] flex flex-col items-start rounded-lg">
              <h2 className="text-2xl font-semibold">Instant Car Services</h2>
              <p className="w-2/3 mt-3">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            {/* card -01  */}
            <div className="bg-[#F3F3F3] p-11 border-t-2 border-t-[#FF3811] flex flex-col items-start rounded-lg">
              <h2 className="text-2xl font-semibold">Instant Car Services</h2>
              <p className="w-3/4 text-[#737373] mt-3 ">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            {/* card -01  */}
            <div className="bg-[#F3F3F3] p-11 border-t-2 border-t-[#FF3811] flex flex-col items-start rounded-lg">
              <h2 className="text-2xl font-semibold">Instant Car Services</h2>
              <p className="w-2/3 mt-3">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            {/* card -01  */}
            <div className="bg-[#F3F3F3] p-11 border-t-2 border-t-[#FF3811] flex flex-col items-start rounded-lg">
              <h2 className="text-2xl font-semibold">Instant Car Services</h2>
              <p className="w-2/3 mt-3">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
          </div>
          <p className="text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.{" "}
          </p>
        </div>
        {/* right  */}
        <div></div>
      </div>
    </div>
  );
};

export default ServiceDetails;
