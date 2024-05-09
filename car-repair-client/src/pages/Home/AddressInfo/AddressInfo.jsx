import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const AddressInfo = () => {
  return (
    <div className="py-5">
      <div className="max-sm:w-11/12 max-sm:mx-auto bg-[#151515] px-8 py-16 rounded-2xl flex max-sm:flex-col max-sm:gap-10 max-sm:items-center justify-around text-white">
        <div className="flex items-center gap-2">
          <CiCalendar className="text-4xl" />
          <div>
            <p>We are open monday-friday</p>
            <h4 className="font-semibold text-2xl">7:00 am - 9:00 pm</h4>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IoCallOutline className="text-4xl" />
          <div>
            <p>We are open monday-friday</p>
            <h4 className="font-semibold text-2xl">7:00 am - 9:00 pm</h4>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CiLocationOn className="text-4xl" />
          <div>
            <p>We are open monday-friday</p>
            <h4 className="font-semibold text-2xl">7:00 am - 9:00 pm</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;
