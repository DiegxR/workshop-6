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
    total: 0,
    selectedIngredients: [],
    burgers: [],
};

export const builderReducer = (state = initialState, action) => {
    switch (action.type) {
        case builderTypes.ADD_INGREDIENT:
            return {
                ...state,
                selectedIngredients: [...state.selectedIngredients, action.payload]
            };
        case builderTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                selectedIngredients: selectedIngredients.map((item, index) => {
                    if (index !== action.payload) {
                        return item;
                    }
                })
            }
        case builderTypes.CONFIRM_BURGER:
            return {
                ...state,
                burgers: [...state.burgers, action.payload],
                selectedIngredients: [],
                total: 0
            }

        case builderTypes.DELETE_BURGER:
            return {
                ...state,
                burgers: state.burgers.filter(burger => burger.id !== action.payload),
            }
        default:
            return state;
    }
}