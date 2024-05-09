import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import logoNav from "../../../assets/icons/logocrbd.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogoutBtn = () => {
    logoutUser()
      .then(() => {
        alert("Ok");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <nav className="py-3">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <Link to="/" className="">
              <img className="w-24 max-sm:w-12" src={logoNav} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end flex gap-3 ">
            <button className="btn btn-ghost btn-circle max-sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <div className="max-sm:hidden">
              <button className="btn btn-ghost btn-circle">
                <IoCartOutline className="text-lg" />
              </button>
            </div>
            {user ? (
              <>
                {" "}
                <button
                  onClick={handleLogoutBtn}
                  className="btn   text-[#FFFF] bg-slate-950 rounded-full px-6 max-sm:text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="btn   text-[#FFFF] bg-slate-950 rounded-full px-6 max-sm:text-sm"
              >
                Login
              </Link>
            )}
            <button className="btn btn-outline border-[#FF3811]  text-[#FF3811] max-sm:text-sm">
              Appointment
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
