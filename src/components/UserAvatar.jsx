import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const UserAvatar = ({ inMobileMenu }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showProfileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showProfileMenu]);

  return (
    <div className={`${inMobileMenu ? "flex" : "hidden"} md:flex justify-end`}>
      <Stack>
        <Avatar
          className="cursor-pointer"
          alt="Swift Prince"
          src="/static/images/avatar/1.jpg"
          onClick={() => setShowProfileMenu(!showProfileMenu)}
        />
      </Stack>

      <div
        className={`hidden absolute ${
          showProfileMenu ? "md:flex" : "hidden"
        } flex-col top-16 mt-1 text-center right-1 w-40 bg-gray-800 text-white p-2 rounded-md shadow-lg transition-transform translate-y-0 duration-300`}>
        <Link
          to="/profile"
          onClick={() => setShowProfileMenu(!showProfileMenu)}>
          My Profile
        </Link>
        <Link
          to="/auth/login"
          onClick={() => setShowProfileMenu(!showProfileMenu)}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default UserAvatar;
