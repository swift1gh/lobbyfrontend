import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <main className="pt-16 mx-5">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
