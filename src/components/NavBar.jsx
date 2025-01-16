import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigations from "./Navigations";
import UserAvatar from "./UserAvatar";
import SearchBox from "./SearchBox";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="flex items-center p-4 bg-gray-800 text-white">
        <div className="container mx-auto flex items-center justify-between bg-transparent">
          <div className="flex md:w-1/2 items-center md:justify-between">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Lobby
            </h1>
            <Navigations />
          </div>

          <div className="md:w-1/2 flex items-center gap-2 justify-end">
            <SearchBox />
            <UserAvatar inMobileMenu={false} />
            <RxHamburgerMenu
              className="block md:hidden text-4xl text-gray-200 justify-end cursor-pointer"
              onClick={() => setShowMobileMenu(true)}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            showMobileMenu ? "fixed w-full" : "h-0 w-0"
          } right-0 top-0 bottom-0 bg-white shadow-lg z-20 text-black overflow-hidden text-center transition-all`}>
          <div className="flex justify-end text-center">
            <RxCross1
              className="text-4xl m-4"
              onClick={() => setShowMobileMenu(false)}
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 text-lg font-medium">
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

          <div className="flex justify-between items-center text-white bottom-0 fixed px-12 bg-gray-800 w-full">
            <Link
              to="/login"
              className="border-r pr-5"
              onClick={() => setShowMobileMenu(false)}>
              Logout
            </Link>
            <Link
              to="/profile"
              className="flex items-center gap-3 py-2  justify-end "
              onClick={() => setShowMobileMenu(false)}>
              <span>View My Profile</span>
              <UserAvatar inMobileMenu={true} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
