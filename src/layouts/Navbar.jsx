import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import ProflileImg from "../assets/avatar1.jpg";

const NavItem = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const listStyleMenu =
    "block py-2 px-3 text-gray-900 rounded-sm md:p-0 md:dark:hover:text-blue-500";

  return (
    <li>
      <Link
        to={to}
        className={
          isActive
            ? "block py-2 px-3 text-gray-900 bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            : listStyleMenu
        }
      >
        {children}
      </Link>
    </li>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);

  const listStyleProfile =
    "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white";

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 shadow-md">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                Schedulify
              </span>
            </Link>

            {/* Profile & Mobile Menu Button */}
            <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              {/* Profile Button */}
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 cursor-pointer"
                id="user-menu-button"
                aria-expanded={toggleProfile}
                onClick={() => setToggleProfile((prev) => !prev)}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src={ProflileImg}
                  alt="user photo"
                />
              </button>

              {/* Profile Dropdown */}
              <div
                className={`${
                  toggleProfile ? " " : "hidden "
                }absolute right-0 top-full mt-2 z-50 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-md dark:bg-gray-700 dark:divide-gray-600`}
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    Nangdy Panhar
                  </span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                    nangdypanhar@gmail.com
                  </span>
                </div>
                <ul className="py-2">
                  <li>
                    <a href="#" className={listStyleProfile}>
                      Appearance
                    </a>
                  </li>
                  <li>
                    <Link to = "/login" className={listStyleProfile}>
                      Sign Out
                      <span className="float-right">
                        <GoSignOut />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              <button
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-user"
                aria-expanded={toggleMenu}
                onClick={() => setToggleMenu((prev) => !prev)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`${
                toggleMenu ? " " : "hidden"
              } items-center justify-between w-full md:flex md:w-auto md:order-1`}
              id="navbar-user"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  dark:border-gray-700">
                <NavItem to="/">Home</NavItem>
                <NavItem to="/myschedule">My Schedule</NavItem>
                <NavItem to="/request">Request</NavItem>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Navbar;
