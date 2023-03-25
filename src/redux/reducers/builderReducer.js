import { builderTypes } from "../types/builderTypes";

const initialState = {
  ingredients: [
    {
      id: "1",
      name: "tomato",
      price: 5,
      img: "https://media.giphy.com/media/Q7vCyGPv3clKD94AY2/giphy.gif",
      burgerImg: "https://media.giphy.com/media/DI5EBIwO53zrfimMXQ/giphy.gif",
    },
    {
      id: "2",
      name: "lechuga",
      price: 2,
      img: "https://media.giphy.com/media/EYti70jChQnEVM1bhM/giphy.gif",
      burgerImg: "https://media.giphy.com/media/Jof8PIVfJDeA8PPhGO/giphy.gif",
    },
    {
      id: "3",
      name: "cheese",
      price: 5,
      img: "https://media.giphy.com/media/3og0IJa2xGWfhLf7s4/giphy.gif",
      burgerImg: "https://media.giphy.com/media/OtvkAzmbqiaXma7Din/giphy.gif",
    },
    {
      id: "4",
      name: "meat",
      price: 20,
      img: "https://raw.githubusercontent.com/Danielaigm/whorkshop6-equipo1/main/src/assets/carne_cut.png",
      burgerImg: "https://media.giphy.com/media/qnXRXCK0iJsIL8JKkU/giphy.gif",
    },
  ],
  selectedIngredients: [],
  totalBurger: 0,
  burgers: [],
  totalPrice: 0,
};

export const builderReducer = (state = initialState, action) => {
  switch (action.type) {
    case builderTypes.ADD_INGREDIENT:
      const ingredient = state.ingredients.find(
        (ingredient) => ingredient.id === action.payload
      );
      return {
        ...state,
        selectedIngredients: [...state.selectedIngredients, action.payload],
        // totalBurger: state.totalBurger + ingredient.price,
      };
    case builderTypes.REMOVE_INGREDIENT:
      let element = 0;
      // let ingredients = state.selectedIngredients.filter(
      //   (item) => item.id !== action.payload
      // );
      console.log(state.selectedIngredients[0]);
      console.log(action.payload);
      return {
        ...state,
        selectedIngredients: state.selectedIngredients.filter(
          (item) => item !== action.payload
        ),
        // totalBurger:
        //   state.total -
        //   state.ingredients.find((ingredient) => ingredient.id === element)
        //     .price,
      };
    case builderTypes.CONFIRM_BURGER:
      return {
        ...state,
        burgers: [...state.burgers, action.payload],
        selectedIngredients: [],
        totalBurger: 0,
        totalPrice: state.totalPrice + action.payload.total,
      };

    case builderTypes.DELETE_BURGER:
      return {
        ...state,
        burgers: state.burgers.filter((burger) => burger.id !== action.payload),
        totalPrice:
          state.totalPrice -
          state.burgers.find((burger) => burger.id === action.payload).total,
      };
    default:
      return state;
  }
};
