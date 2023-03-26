import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./navBar.scss";
import { useSelector } from "react-redux";
import { BsBasket2Fill } from "react-icons/bs";
const variants = {
  receipt: { x: "70%" },
  home: { x: "-20%" },
};

const NavBar = () => {
  const navigate = useNavigate()
  const [activeHome, setActiveHome] = useState(false);
  const [activeReceipt, setActiveReceipt] = useState(false);
  const [activeHomeLink, setActiveHomeLink] = useState(true);
  const {burgers} = useSelector(store => store.builder)
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
      <div onClick={()=> navigate('/receipt')} className="container-basket">
      <BsBasket2Fill className="Basket-icon"/>
      <div
            className={activeReceipt ? "active" : "nav__ul__li"}
            onClick={(handleReceipt, handleActiveLink)}
          >
            {burgers.length !== 0 ? <span className="noti">{burgers.length}</span> : <></>}
      </div>
      </div>
      {/* <ul className="nav__ul">
        <motion.div
          variants={variants}
          animate={activeHomeLink ? "home" : "receipt"}
          transition={{ duration: 0.2 }}
          className="activeBg"
        />
        <li>
          <NavLink
            to="./"
            className={activeHome ? "active " : "nav__ul__li"}
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
            {burgers.length !== 0 ? <span className="noti">{burgers.length}</span> : <></>}
          </NavLink>
        </li>
      </ul> */}
    </nav>
  );
};

export default NavBar;
