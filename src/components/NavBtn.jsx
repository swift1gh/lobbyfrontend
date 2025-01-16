import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBtn = ({ Name, Destination, Icon }) => {
  const location = useLocation(); // Get the current route
  const isActive = location.pathname === Destination; // Check if the button is active

  return (
    <Link to={Destination}>
      <div
        className={`relative flex flex-col items-center ${
          isActive ? "text-white" : "text-gray-300"
        } group`}>
        <div
          className={`text-2xl flex items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-y-[-4px] group-hover:text-white ${
            isActive ? "scale-110 text-blue-500" : "group-hover:scale-110"
          }`}>
          {Icon}
        </div>

        <span
          className={`absolute bottom-[-1.0rem] text-sm opacity-0 translate-y-2 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 text-gray-300`}>
          {Name}
        </span>
      </div>
    </Link>
  );
};

export default NavBtn;
