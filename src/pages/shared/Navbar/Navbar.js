import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const signOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <nav className="navbar bg-base-100 flex items-center mt-5 max-w-[1300px] mx-auto">
      <div className="navbar-start">
        <Link to={"/"}>
          <img
            src="https://p.kindpng.com/picc/s/137-1372514_my-website-logo-png-transparent-png.png"
            className="w-6/12"
            alt=""
          />
        </Link>
      </div>

      {/* Large Screen nav items */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ul-style text-primary">
          <li className="li-style">
            <Link to={"/dashboard"} className="noo-hover link-style">
              Dashboard
            </Link>
          </li>
          <li className="li-style">
            <Link to={"/about"} className="noo-hover link-style">
              About
            </Link>
          </li>
          <li className="li-style">
            <Link to={"/schedule/fifteen"} className="noo-hover link-style">
              Schedule
            </Link>
          </li>
          <li className="li-style">
            <Link to={"/blog"} className="noo-hover link-style">
              Blog
            </Link>
          </li>
          <div className="animation start-home"></div>
        </ul>
      </div>
      {/* Large Screen nav items */}

      {/* Small Screen nav items */}
      <div className="navbar-end">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary h-8 w-8"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content right-1 mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/dashboard"} className=" hover:bg-secondary pr-32">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to={"/about"} className=" hover:bg-secondary pr-32">
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/schedule/fifteen"}
                className=" hover:bg-secondary pr-28"
              >
                Schedule
              </Link>
            </li>
            <li>
              <Link to={"/blog"} className=" hover:bg-secondary pr-36">
                Blog
              </Link>
            </li>

            {user?.uid ? (
              <button
                onClick={signOut}
                className="btn border-0 lg:flex px-10 mr-4 text-white"
              >
                Log Out
              </button>
            ) : (
              <Link
                to={"/login"}
                className="btn border-0 lg:flex px-10 mr-4 text-white"
              >
                Log In
              </Link>
            )}
          </ul>
        </div>
        {/* Small Screen nav items */}

        {user?.uid ? (
          <button
            onClick={signOut}
            className="btn hidden border-0 lg:flex bg-primary rounded-full text-white px-10"
          >
            Log Out
          </button>
        ) : (
          <Link
            to={"/login"}
            className="btn hidden border-0 lg:flex bg-primary rounded-full text-white px-10"
          >
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
