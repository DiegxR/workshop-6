import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
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
  const handleBurger = () =>{
    if(selectedIngredients.length !== 0){
      dispatch(
        confirmBurger(
          totalBurger,
          selectedIngredients,
          burgers.length + 1
        )
      )
    }else{
      Swal.fire('Elija los ingredientes para su hamburguesa')
    }
  }
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
          <section className="burgercontainer">
        <button className="button-confirm"
          onClick={() =>
            handleBurger()
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
          </section>  
      </ContainerbtnCS>
    </>
  );
};

export default Burger;
