import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addIngredient,
  confirmBurger,
} from "../../redux/actions/builderActions";
import Ingredients from "../ingredient/Ingredient";
import {
  BtnWrapperSC,
  Bread,
  BurgerSC,
  TextSC,
  ContainerbtnCS,
} from "./styles.js";

const Burger = () => {
  const { selectedIngredients, ingredients, totalBurger, TotalPrice, burgers } =
    useSelector((store) => store.builder);
  const dispatch = useDispatch();
  console.log({ selectedIngredients, totalBurger });
  return (
    <>
      <ContainerbtnCS>
        <BtnWrapperSC>
          {ingredients.map((ingredient, index) => (
            <button
              key={index}
              onClick={() => dispatch(addIngredient(ingredient.id))}
            >
              <img src={ingredient.img} alt="Ingredient" />
            </button>
          ))}
        </BtnWrapperSC>

        <button
          onClick={() =>
            dispatch(
              confirmBurger(
                totalBurger,
                selectedIngredients,
                burgers.length + 1
              )
            )
          }
        >
          <TextSC>Agregar hamburgesa</TextSC>
        </button>

        <BurgerSC>
          <Bread img="https://media.giphy.com/media/shZBRqVpESNRF6ns1H/giphy.gif"></Bread>
          <Ingredients />
          <Bread
            variant="bottom"
            img="https://media.giphy.com/media/7DEoxyxXo03jip8aoL/giphy.gif"
          ></Bread>
        </BurgerSC>
      </ContainerbtnCS>
    </>
  );
};

export default Burger;
