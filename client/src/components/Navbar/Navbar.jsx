import React from "react";
import { Link } from "react-router-dom";
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
                <Link to={"/"}>Home</Link>
              </li>
              <li className="sign_parent">
                <Link className="sign" to={"/sign/in"}>Sign in</Link>
              </li>
              <li className="sign_parent">
                <Link className="sign" to={"/sign/up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
