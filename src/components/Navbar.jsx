import React, { useState } from "react"; 

//a dependency from react-icons. react icons has plenty icons to choose from
//here imported two that will be on mobile when menu is clicked or not clicked
import { FaBars, FaTimes } from "react-icons/fa"; 

// //the Link is more similar to <a href=>. 
// Link to routes through pages much faster
import { Link } from "react-router-dom";

//Aglet logo importted from the assets folder
import Aglet from "../assets/pictures/aglet_logo.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (

    <header>
      <nav className="navbar">

      {/* The logo div */}
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

