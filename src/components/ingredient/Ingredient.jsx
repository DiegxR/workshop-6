import React from "react";
import { useSelector } from "react-redux";

import "./ingredient.scss";

function Ingredient() {
  const { selectedIngredients } = useSelector((store) => store.builder);
  const lastIngredient = selectedIngredients.lenght - 1;
  // const burgerIngredients = [];
  // selectedIngredients.map((ingredient) =>
  //   burgerIngredients.push(ingredient.img)
  // );
  // console.log(burgerIngredients);
  return (
    <>
      {/* {selectedIngredients.map((ingredient, index) => (
        <img key={index} src={ingredient.img} alt="ingredient" />
      ))} */}
    </>
  );
}

export default Ingredient;
