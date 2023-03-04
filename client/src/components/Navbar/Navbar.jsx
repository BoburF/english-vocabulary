import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="row align_items_center justify_content_between">
          <div className="logo">
            <Link to={'/'}>
              <h2>
                My
                <span className="voca">
                  Voca
                </span>
                <span className="boost">Boost</span>
              </h2>
            </Link>
          </div>
          <div className="menu">
            <ul className="menu_df row align_items_center">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="sign_parent">
                <NavLink className="sign" to={"/sign/in"}>Login</NavLink>
              </li>
              <li className="sign_parent">
                <NavLink className="sign" to={"/sign/up"}>Register</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
