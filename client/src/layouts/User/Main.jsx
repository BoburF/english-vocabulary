import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Main.scss";

const Main = () => {
  return (
    <div className="Main">
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
