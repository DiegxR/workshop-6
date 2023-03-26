import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./listIngredients.scss";
import { AiOutlineClose } from "react-icons/ai";
import {MdOutlineAttachMoney} from "react-icons/md"
import {GiConfirmed} from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
import { removeIngredient } from "../../redux/actions/builderActions";
import { Link } from "react-router-dom";

const ListIngredients = () => {
  const { selectedIngredients, totalBurger, ingredients } = useSelector(
    (store) => store.builder
  );
  const dispatch = useDispatch();

  return (
    <article className="ingredients-section">
      <p className="ingredients-title">Tu lista de ingredientes</p>
      <div className="ingredients-container">
        {selectedIngredients.length ? (
          selectedIngredients.map((ingredient, index) => (
            <div key={index} className="each-ingredient">
              <figure className="list-figure">
              <img className="list-img" src={ingredients.find((item) => item.id === ingredient).img} alt="ingredients"/>
              </figure>
              <p>{ingredients.find((item) => item.id === ingredient).name}</p>
              <AiOutlineClose
                className="button-delete"
                onClick={() => dispatch(removeIngredient(index))}
              />
            </div>
          ))
        ) : (
          <div className="section-ingredients-empty">
            <h1 className="empty-title">
              Agrega ingredientes a tu hamburguesa!
            </h1>
            <FaHamburger className="empty-icon" />
          </div>
        )}
      </div>
      <p className="total-ingredients">
        Total de tu hamburguesa:
        <span>$ {totalBurger} Lucas </span>
      </p>
      <div style={{display: "flex", gap: "5px"}}>
 
      <button className="pay-button">
        <MdOutlineAttachMoney className="pay-icon"/>
        <Link className="pay-link" to="/receipt">Ir a pagar</Link>
        </button>
      </div>
    </article>
  );
};

export default ListIngredients;
