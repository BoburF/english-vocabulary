import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  const [position, setPosition] = useState("");
  const [btnPosition, setBtnPosition] = useState("");
  const [svg, setSvg] = useState(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-list"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
  const [active, setActive] = useState(['button_media'])

  const SetPo = () => {
    if (position === "") {
      setPosition("0");
      setBtnPosition("270px");
      setSvg(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      );
      setActive(['button_media', 'fsa'])
    } else {
      setPosition("");
      setBtnPosition("");
      setSvg(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      );
      setActive(['button_media'])
    }
  };



  return (
    <>
      <div
        className={active.join(' ')}
        style={{ left: btnPosition }}
        onClick={(e) => SetPo()}
      >
        {svg}
      </div>
      <div className="Sidebar" style={{ left: position }} onClick={(e) => {
        setBtnPosition('')
        setPosition('')
        setSvg(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        );
        setActive(['button_media'])
      }}>
        <ul className="ul">
          <li className="user_data">
            <NavLink to={"/user"}>
              <div className="user_img">
                <img src="/img/avatar.webp" alt="" />
              </div>
              <p>{localStorage.getItem('username')}</p>
            </NavLink>
          </li>
          <li className="user_vocab">
            <NavLink to={"/user/vocabulary"}>Vocabulary</NavLink>
          </li>
          <li className="user_vocab">
            <NavLink to={"/user/random"}>Random word from vocabulary</NavLink>
          </li>
          <li className="user_vocab">
            <NavLink to={"/user/settings"}>Settings</NavLink>
          </li>
          <li className="user_vocab">
            <Link to={"/"} onClick={() => sessionStorage.removeItem('token')}>Log out</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
