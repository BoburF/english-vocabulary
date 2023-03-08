import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Main.scss";

const Main = ({userName}) => {
  return (
    <div className="Main">
      <Sidebar userName={userName} />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
