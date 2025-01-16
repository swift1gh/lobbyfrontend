import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <main className="pt-16 px-3">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
