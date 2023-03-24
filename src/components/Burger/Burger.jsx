import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addIngredient, confirmBurger } from "../../redux/actions/builderActions";
import Ingredient from "../ingredient/Ingredient";
import { BurgerSC } from "./styles.js";

const Burger = () => {
  const { selectedIngredients, ingredients, totalBurger, TotalPrice, burgers } = useSelector(
    (store) => store.builder
  );
  const dispatch = useDispatch();
  console.log({selectedIngredients, totalBurger});
  return (
    <>
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
      <button onClick={()=> dispatch(confirmBurger(totalBurger,selectedIngredients, burgers.length+1 ))}>Add Burger</button>

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
    </>
  );
};

export default Burger;
