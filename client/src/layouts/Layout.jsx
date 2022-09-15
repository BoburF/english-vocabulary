import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Prallax from "../components/Parallax/Prallax";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="Layout">
      <Navbar />
      <Prallax />
      <div className="page">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
