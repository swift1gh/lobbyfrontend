import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigations from "./Navigations";
import UserAvatar from "./UserAvatar";
import SearchBox from "./SearchBox";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { motion } from "motion/react";

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-gray-800 text-white h-16">
      <div className="flex items-center p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex md:w-1/2 md:justify-between items-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Lobby
            </h1>
            <Navigations />
          </div>
          <div className="flex items-center gap-4">
            <SearchBox />
            <UserAvatar />
            <RxHamburgerMenu
              className="block md:hidden text-3xl cursor-pointer"
              onClick={() => setShowMobileMenu(true)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 bottom-0 right-0 w-[80%] bg-gray-600 shadow-xl z-20 text-white text-center transition-transform duration-300 ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}>
        <div className="flex justify-end p-4">
          <RxCross1
            className="text-4xl cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 200 }} // Initial state
          animate={
            showMobileMenu ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }
          } // Animate based on state
          transition={{ duration: 1 }}>
          <ul className="flex flex-col items-center gap-4 mt-5 text-lg font-medium pb-20">
            <li>
              <Link
                to="/"
                className="px-4 py-2 rounded-full inline-block"
                onClick={() => setShowMobileMenu(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/community"
                className="px-4 py-2 rounded-full inline-block"
                onClick={() => setShowMobileMenu(false)}>
                Community
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="px-4 py-2 rounded-full inline-block"
                onClick={() => setShowMobileMenu(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/messages"
                className="px-4 py-2 rounded-full inline-block"
                onClick={() => setShowMobileMenu(false)}>
                Messages
              </Link>
            </li>
          </ul>
        </motion.div>

        <div className="absolute bottom-0 w-full bg-gray-800 text-white py-4 flex justify-between items-center px-6">
          <Link
            to="/login"
            className="border-r pr-5"
            onClick={() => setShowMobileMenu(false)}>
            Logout
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-3"
            onClick={() => setShowMobileMenu(false)}>
            <span>View My Profile</span>
            <UserAvatar inMobileMenu={true} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
