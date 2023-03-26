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
  ContainerbtnCS,
} from "./styles.js";
import './burger.scss'

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

        <button className="button-confirm"
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
         Agregar hamburgesa
        </button>

        <BurgerSC>
          <Bread>
          <img src="https://i.ibb.co/F3fNLqH/panTop.png" alt="panTop" />
          </Bread>
          <Ingredients />
          <Bread
            variant="bottom"
          ><img src="https://i.ibb.co/PCN4pR7/pancito.png" alt="panBottom" />
          </Bread>
        </BurgerSC>
      </ContainerbtnCS>
    </>
  );
};

export default Burger;
