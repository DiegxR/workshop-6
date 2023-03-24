import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navBar.scss";

const NavBar = () => {
  const [activeHome, setActiveHome] = useState(false);
  const [activeReceipt, setActiveReceipt] = useState(false);

  const handleHome = () => {
    setActiveHome(true);
    setActiveReceipt(false);
  };

  const handleReceipt = () => {
    setActiveHome(false);
    setActiveReceipt(true);
  };
  return (
    <nav className="nav">
      <div className="nav__container">
        <figure className="nav__figure">
          <img
            className="nav__img"
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="icon-hamburger"
          />
        </figure>
        <p className="nav__title">Hamburger</p>
      </div>
      <ul className="nav__ul">
        <li>
          <NavLink
            to="./"
            className={activeHome ? "active" : "nav__ul__li"}
            onClick={handleHome}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="./receipt"
            className={activeReceipt ? "active" : "nav__ul__li"}
            onClick={handleReceipt}
          >
            Receipt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
