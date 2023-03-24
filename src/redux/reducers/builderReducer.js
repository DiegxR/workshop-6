import { builderTypes } from "../types/builderTypes";

const initialState = {
  ingredients: [
    {
      id: "1",
      name: "bacon",
      price: 10,
      img: "https://previews.123rf.com/images/bestfotostudio/bestfotostudio1608/bestfotostudio160800023/60626970-cooked-bacon-rashers-close-up-isolated-on-a-white-background.jpg",
    },
    {
      id: "2",
      name: "salad",
      price: 2,
      img: "https://thumbs.dreamstime.com/b/verdura-y-lechuga-del-tomate-31733966.jpg",
    },
    {
      id: "3",
      name: "cheese",
      price: 5,
      img: "https://www.merkadomi.com/wp-content/uploads/2020/11/QUESO-DOBLE-CREMA-TAJADO.jpg",
    },
    {
      id: "4",
      name: "meat",
      price: 20,
      img: "https://media.istockphoto.com/id/1204417280/photo/grilled-hamburger-meat-isolated-on-white-background-clipping-path-full-depth-of-field.jpg?s=612x612&w=0&k=20&c=72xYpv2v3TuUB0SpMTa2lyBvc1K25o1bXQIx7iMHchM=",
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
        totalBurger: state.totalBurger + ingredient.price,
      };
    case builderTypes.REMOVE_INGREDIENT:
      let element = 0;
      return {
        ...state,
        selectedIngredients: selectedIngredients.map((item, index) => {
          if (index !== action.payload) {
            return item;
          } else {
            element = item;
          }
        }),
        totalBurger:
          state.total -
          state.ingredients.find((ingredient) => ingredient.id === element)
            .price,
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
