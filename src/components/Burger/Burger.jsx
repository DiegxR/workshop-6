import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./burger.scss";
import {
  addIngredient,
  confirmBurger,
} from "../../redux/actions/builderActions";
import Ingredient from "../ingredient/Ingredient";
import { BurgerSC } from "./styles.js";

const Burger = () => {
  const { selectedIngredients, ingredients, totalBurger, TotalPrice } =
    useSelector((store) => store.builder);
  const dispatch = useDispatch();
  console.log({ selectedIngredients, totalBurger });

  return (
    <aside className="burger-container">
      {ingredients.map((ingredient, index) => (
        <button
          className="button-ingredient"
          key={index}
          onClick={() => dispatch(addIngredient(ingredient.id))}
        >
          <img
            className="image-ingredient "
            src={ingredient.img}
            alt="Ingredient"
          />
        </button>
      ))}
      <button onClick={() => dispatch(confirmBurger())}>Add Burger</button>

      {/* <BurgerSC>
        <Bread variable="top" />
      {selectedIngredients.map((ingredient, index) => (
        <Ingredient />
      ))}
      <Bread variable="bottom" />
        {selectedIngredients.map((ingredient, index) => (
          <Ingredient key={index} />
        ))}
      </BurgerSC> */}
    </aside>
  );
};

export default Burger;
