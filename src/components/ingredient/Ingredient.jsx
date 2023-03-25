import React from "react";
import { useSelector } from "react-redux";
import { ImgsWrapperSC } from "./ingredients";

function Ingredients() {
  const { selectedIngredients, ingredients } = useSelector(
    (store) => store.builder
  );

  return (
    <ImgsWrapperSC>
      {selectedIngredients.map((ingredient, index) => {
        const currentIngredient = ingredients.find(
          (item) => item.id == ingredient
        );
        return (
          <img key={index} src={currentIngredient.burgerImg} alt="ingredient" />
        );
      })}
    </ImgsWrapperSC>
  );
}

export default Ingredients;
