import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./listIngredients.scss";
import { AiOutlineClose } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import { removeIngredient } from "../../redux/actions/builderActions";

const ListIngredients = () => {
  const { selectedIngredients, totalBurger, ingredients } = useSelector(
    (store) => store.builder
  );
  const dispatch = useDispatch();

  return (
    <article className="ingredients-section">
      <p className="ingredients-title">Tu lista de ingredientes</p>
      <section className="ingredients-container">
        {selectedIngredients.length ? (
          selectedIngredients.map((ingredient, index) => (
            <div key={index} className="each-ingredient">
              <p>{ingredients.find((item) => item.id === ingredient).name}</p>
              <AiOutlineClose
                className="button-delete"
                onClick={() => dispatch(removeIngredient(ingredient))}
              />
            </div>
          ))
        ) : (
          <section className="section-ingredients-empty">
            <h1 className="empty-title">
              Agrega ingredientes a tu hamburguesa!
            </h1>
            <FaHamburger className="empty-icon" />
          </section>
        )}
      </section>
      <p className="total-ingredients">
        Total de tu hamburguesa:
        <span> {totalBurger}</span>
      </p>
    </article>
  );
};

export default ListIngredients;
