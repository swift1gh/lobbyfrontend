import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const UserAvatar = ({ inMobileMenu }) => {
  return (
    <div
      className={`${
        inMobileMenu ? "flex" : "hidden"
      } md:flex justify-end cursor-pointer`}>
      <Stack>
        <Avatar alt="Swift Prince" src="/static/images/avatar/1.jpg" />
      </Stack>
    </div>
  );
};

export default UserAvatar;
