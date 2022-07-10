import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aglet from "../assets/pictures/aglet_logo.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Aglet} alt="/" />
          </Link>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item" onClick={handleClick}>
            <Link to="/" className="nav-link">
              home
            </Link>
          </li>
          <li className="nav-item" onClick={handleClick}>
            <Link to="/contact" className="nav-link">
              contact
            </Link>
          </li>
        </ul>

        <div className="toggler" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#000" }} />
          ) : (
            <FaBars size={20} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
