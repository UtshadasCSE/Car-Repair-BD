import { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  console.log(services);
  return (
    <div>
      <div className="font-inter flex flex-col gap-3 py-12 max-sm:py-3">
        <h4 className="text-[#FF3811] text-xl text-center font-semibold">
          Service
        </h4>
        <h2 className="text-[#151515] text-5xl max-sm:text-3xl text-center font-bold">
          Our Service Area
        </h2>
        <p className="text-center text-[#737373] lg:w-2/4 lg:mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.{" "}
        </p>
      </div>
      {/* card  */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-sm:w-4/5 max-sm:mx-auto gap-4 py-10 ">
        {/* card 1  */}
        {services.map((service) => (
          <div
            key={service._id}
            className="border-2 border-[#E8E8E8] p-4  font-inter  flex flex-col gap-4 rounded "
          >
            <img
              className="w-full h-full rounded-md"
              src={service.img}
              alt=""
            />

            <div>
              <h2 className="font-bold text-2xl text-[#444444]">
                {service.title}
              </h2>
            </div>
            <div className="flex justify-between">
              <p className="text-[#FF3811] text-lg font-medium">
                Price:${service.price}
              </p>
              <button>
                <FaArrowCircleRight className="text-2xl text-[#FF3811]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;