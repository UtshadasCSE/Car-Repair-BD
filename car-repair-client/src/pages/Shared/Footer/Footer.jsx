import footerLogo from "../../../assets/images/logocrbd.png";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div>
        <footer className="footer bg-[#151515] text-white font-inter lg:p-20 p-11">
          <aside>
            <img
              className="w-28 bg-gray-300  rounded-md   "
              src={footerLogo}
              alt=""
            />
            <p>
              Car Repair BD - 2022
              <br />
              <br />
              Dedicated to Reviving Your Ride, One Expert <br /> Repair at a
              Time Since 2022!
            </p>
            <div className="flex items-center gap-3 py-2">
              <div className="bg-[#2c2c2c] p-4 rounded-full">
                {" "}
                <FaFacebook className="text-lg" />
              </div>
              <div className="bg-[#2c2c2c] p-4 rounded-full">
                {" "}
                <FaLinkedin className="text-lg" />
              </div>
              <div className="bg-[#2c2c2c] p-4 rounded-full">
                {" "}
                <FaTwitter className="text-lg" />
              </div>
              <div className="bg-[#2c2c2c] p-4 rounded-full">
                {" "}
                <FaYoutube className="text-lg" />
              </div>
            </div>
          </aside>

          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
