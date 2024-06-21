import React, { useState } from "react";
import { APP_LOGO } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>online status: {onlineStatus ? "T" : "F"}</li>
          <Link to="/" className="custom-link">
            Home
          </Link>
          <Link to="/about" className="custom-link">
            About us
          </Link>
          <Link to="/contact" className="custom-link">
            Contact
          </Link>
          <Link to="/grocery" className="custom-link">
            Grocery
          </Link>
          <li>
            <button
              className="login"
              onClick={() =>
                btnNameReact === "Login"
                  ? setBtnNameReact("Logged")
                  : setBtnNameReact("Login")
              }
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
