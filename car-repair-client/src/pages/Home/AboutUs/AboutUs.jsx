import about1 from "../../../assets/images/about_us/person.jpg";
import about2 from "../../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div>
      <div>
        <div className="hero  pb-36 max-sm:pb-20 w-11/12 mx-auto font-inter ">
          <div className="hero-content flex-col items-start max-sm:items-center max-sm:justify-center max-sm:w-full  lg:flex-row">
            <div className="lg:w-1/2 lg:relative max-sm:flex max-sm:flex-col">
              <img
                src={about1}
                className="w-4/5 max-sm:w-4/5 h-96 max-sm:h-full rounded-lg shadow-2xl"
              />
              <img
                src={about2}
                className="max-sm:-translate-y-6 lg:absolute top-64 left-40 max-w-sm lg:w-2/3 max-sm:w-3/4 rounded-lg shadow-2xl border-8 border-white"
              />
            </div>
            <div className="lg:w-1/2 flex flex-col gap-3 items-start">
              <h4 className="font-bold text-[#FF3811]">About Us</h4>
              <h1 className="text-5xl max-sm:text-2xl font-bold leading-[60px]">
                We are qualified
                <br /> & of experience <br /> in this field!
              </h1>
              <p className="py-6 text-[#737373]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look even
                slightly believable.
              </p>
              <p className="py-4 text-[#737373]">
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which dont look even slightly
                believable.
              </p>
              <button className="btn  bg-[#FF3811] text-white">
                Get More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
