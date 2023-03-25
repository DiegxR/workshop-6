import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./navBar.scss";

const variants = {
  receipt: { x: "170%" },
  home: { x: "-20%" },
};

const NavBar = () => {
  const [activeHome, setActiveHome] = useState(false);
  const [activeReceipt, setActiveReceipt] = useState(false);
  const [activeHomeLink, setActiveHomeLink] = useState(true);

  const handleHome = () => {
    setActiveHome(true);
    setActiveReceipt(false);
  };

  const handleReceipt = () => {
    setActiveHome(false);
    setActiveReceipt(true);
  };

  const handleActiveLink = () => {
    setActiveHomeLink(!activeHomeLink);
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
        <p className="nav__title">Hamburguesa</p>
      </div>
      <ul className="nav__ul">
        <motion.div
          variants={variants}
          animate={activeHomeLink ? "home" : "receipt"}
          transition={{ duration: 0.2 }}
          className="activeBg"
        />
        <li>
          <NavLink
            to="./"
            className={activeHome ? "active" : "nav__ul__li"}
            onClick={(handleHome, handleActiveLink)}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="./receipt"
            className={activeReceipt ? "active" : "nav__ul__li"}
            onClick={(handleReceipt, handleActiveLink)}
          >
            Recibo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
