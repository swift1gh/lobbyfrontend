import React from "react";
import NavBtn from "./NavBtn";
import { ImHome } from "react-icons/im";
import { RiUserCommunityFill } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { TiMessages } from "react-icons/ti";

const Navigations = () => {
  return (
    <nav className="hidden md:flex">
      <ul className="flex gap-8">
        <NavBtn Name="Home" Destination="/" Icon={<ImHome />} />
        <NavBtn
          Name="Community"
          Destination="/community"
          Icon={<RiUserCommunityFill />}
        />
        <NavBtn Name="Projects" Destination="/projects" Icon={<GrProjects />} />
        <NavBtn Name="Messages" Destination="/messages" Icon={<TiMessages />} />
      </ul>
    </nav>
  );
};

export default Navigations;
