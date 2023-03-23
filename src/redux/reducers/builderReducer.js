import { builderTypes } from "../types/builderTypes";

const initialState = {
    ingredients: [
        {
            id: '1',
            name: 'bacon',
            price: 10
        },
        {
            id: '2',
            name: 'salad',
            price: 2
        },
        {
            id: '3',
            name: 'cheese',
            price: 5
        },
        {
            id: '4',
            name: 'meat',
            price: 20
        }
    ],
    selectedIngredients: [],
    totalBurger: 0,
    burgers: [],
    totalPrice: 0
};

export const builderReducer = (state = initialState, action) => {
    switch (action.type) {
        case builderTypes.ADD_INGREDIENT:
            const ingredient = state.ingredients.find(ingredient => ingredient.id == action.payload);
            return {
                ...state,
                selectedIngredients: [...state.selectedIngredients, action.payload],
                totalBurger: state.total + ingredient.price
            };
        case builderTypes.REMOVE_INGREDIENT:
             let element = 0
            return {
                ...state,
                selectedIngredients: selectedIngredients.map((item, index) => {
                    if (index !== action.payload) {
                        return item;
                    }else{
                        element = item
                    }
                }),
                totalBurger: state.total - state.ingredients.find((ingredient) => ingredient.id === element).price
            }
        case builderTypes.CONFIRM_BURGER:
            return {
                ...state,
                burgers: [...state.burgers, action.payload],
                selectedIngredients: [],
                totalPrice: totalPrice + action.payload.total,
            }

        case builderTypes.DELETE_BURGER:
            return {
                ...state,
                burgers: state.burgers.find(burger => burger.id !== action.payload),
                totalPrice: state.totalPrice - state.burgers.find(burger => burger.id !== action.payload).total
            }
        default:
            return state;
    }
}