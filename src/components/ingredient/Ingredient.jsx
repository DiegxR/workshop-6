import React from "react";
import { useSelector } from "react-redux";
import { ImgsWrapperSC } from "./ingredients";

function Ingredients() {
  const { selectedIngredients } = useSelector((store) => store.builder);

  return (
    <ImgsWrapperSC>
      {selectedIngredients.map((ingredient, index) => (
        <img key={index} src={ingredient?.burgerImg} alt="ingredient" />
      ))}
    </ImgsWrapperSC>
  );
}

export default Ingredients;
